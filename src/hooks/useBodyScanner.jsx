// hooks/useBodyScanner.js
import { Pose } from '@mediapipe/pose';
import * as camUtils from '@mediapipe/camera_utils';

export const useBodyScanner = (videoRef, onMeasurementsReady, onPostureState) => {
  let pose;
  let camera;

  const startScanner = async () => {
    pose = new Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    pose.setOptions({
      modelComplexity: 2,
      enableSegmentation: false,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    pose.onResults((results) => {
      if (!results.poseLandmarks) return;

      const landmarks = results.poseLandmarks;

      // Posture checks
      const visibilityThreshold = 0.6;
      const required = [11, 12, 23, 24, 27, 28];
      const visible = required.every((idx) => landmarks[idx]?.visibility > visibilityThreshold);
      onPostureState(visible);

      if (!visible) return;

      // Collect multiple frames to reduce noise
      const chestWidth = distance(landmarks[11], landmarks[12], videoRef);
      const hipWidth = distance(landmarks[23], landmarks[24], videoRef);
      const shoulderWidth = distance(landmarks[11], landmarks[12], videoRef);
      const height = distance(landmarks[0], landmarks[27], videoRef);

      onMeasurementsReady({
        height: +height.toFixed(1),
        chest: +(chestWidth * 0.95).toFixed(1),
        waist: +(chestWidth * 0.8).toFixed(1),
        hips: +hipWidth.toFixed(1),
        shoulders: +shoulderWidth.toFixed(1)
      });

      stopScanner();
    });

    camera = new camUtils.Camera(videoRef.current, {
      onFrame: async () => {
        await pose.send({ image: videoRef.current });
      },
      width: 640,
      height: 480,
    });

    camera.start();
  };

  const stopScanner = () => {
    camera?.stop();
  };

  const distance = (a, b, videoRef) => {
    const dx = (a.x - b.x) * videoRef.current.videoWidth;
    const dy = (a.y - b.y) * videoRef.current.videoHeight;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return { startScanner, stopScanner };
};
