import React, { useState, useEffect } from 'react';
import { useCamera } from '../hooks/useCamera';
import { analyzeBodyMeasurements } from '../data/bodyAnalysis';
import '../css/CameraInterface.css';

import { Pose } from '@mediapipe/pose';
import * as camUtils from '@mediapipe/camera_utils';
import PostureGuideOverlay from '../components/PostureGuideOverlay';

export const CameraInterface = ({ onAnalysisComplete }) => {
  const { videoRef, isActive, hasPermission, error, startCamera, stopCamera } = useCamera();

  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStage, setScanStage] = useState('ready');
  const [userHeight, setUserHeight] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [postureOk, setPostureOk] = useState(false);
  const [poseMessage, setPoseMessage] = useState('Initializing...');

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  useEffect(() => {
    if (!videoRef.current || !isActive) return;

    const pose = new Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    pose.onResults((results) => {
      if (!results.poseLandmarks) {
        setPostureOk(false);
        setPoseMessage('No pose detected');
        return;
      }

      const lShoulder = results.poseLandmarks[11];
      const rShoulder = results.poseLandmarks[12];
      const lHip = results.poseLandmarks[23];
      const rHip = results.poseLandmarks[24];
      const lAnkle = results.poseLandmarks[27];
      const rAnkle = results.poseLandmarks[28];

      const required = [lShoulder, rShoulder, lHip, rHip, lAnkle, rAnkle];

      const allVisible = required.every((p) => p.visibility > 0.6);
      const bodyStraight = Math.abs(lShoulder.y - rShoulder.y) < 0.05 && Math.abs(lHip.y - rHip.y) < 0.05;

      if (allVisible && bodyStraight) {
        setPostureOk(true);
        setPoseMessage('Good posture! Hold still...');
      } else {
        setPostureOk(false);
        if (!allVisible) setPoseMessage('Ensure full body is visible in frame');
        else if (!bodyStraight) setPoseMessage('Stand straight and evenly');
      }
    });

    const camera = new camUtils.Camera(videoRef.current, {
      onFrame: async () => {
        if (videoRef.current) {
          await pose.send({ image: videoRef.current });
        }
      },
      width: 640,
      height: 480,
    });

    camera.start();
    return () => camera.stop();
  }, [videoRef, isActive]);

  useEffect(() => {
    if (isScanning || !userHeight || !postureOk) return;

    setIsScanning(true);
    setScanStage('capturing');
    setScanProgress(0);

    const progressInterval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    setTimeout(async () => {
      setScanStage('analyzing');
      try {
        if (!videoRef.current) throw new Error('Camera not ready');

        const rawMeasurements = await analyzeBodyMeasurements(videoRef.current, userHeight);
        const scaled = {
          ...rawMeasurements,
          height: parseFloat(userHeight)
        };

        setScanStage('complete');
        setTimeout(() => {
          onAnalysisComplete(scaled);
          setIsScanning(false);
          setShowPopup(true);
          setScanStage('ready');
          setScanProgress(0);
        }, 1000);
      } catch (err) {
        console.error('Analysis failed:', err);
        setIsScanning(false);
        setScanStage('ready');
        setScanProgress(0);
      }
    }, 2500);
  }, [postureOk, userHeight]);

  return (
    <div className="camera-wrapper">
      <div className="video-container">
        <video ref={videoRef} autoPlay playsInline muted className="video-feed" />

        {isScanning && (
          <div className="overlay">
            <div className="overlay-content">
              <div className="scan-message">
                {scanStage === 'capturing' && 'Capturing your image...'}
                {scanStage === 'analyzing' && 'Analyzing measurements...'}
                {scanStage === 'complete' && 'Scan complete!'}
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${scanProgress}%` }} />
              </div>
              <div className="progress-text">{scanProgress}%</div>
            </div>
          </div>
        )}

        {!isScanning && (
          <PostureGuideOverlay message={poseMessage} isGood={postureOk} />
        )}

        {!isActive && (
          <div className="camera-permission">
            <h3>Camera Access Required</h3>
            <p>We need your camera to analyze body measurements.</p>
            {error && <div className="error-message">{error}</div>}
          </div>
        )}
      </div>

      <input
        type="number"
        placeholder="Enter your height (cm)"
        value={userHeight}
        onChange={(e) => setUserHeight(e.target.value)}
        className="height-input"
      />

      {showPopup && (
        <div className="scan-complete-popup">
          <h3>Scan Completed</h3>
          <p>Your measurements are ready!</p>
          <button onClick={() => setShowPopup(false)}>View Recommendations</button>
        </div>
      )}
    </div>
  );
};

export default CameraInterface;
