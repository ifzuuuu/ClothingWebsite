import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import {
  analyzeBodyMeasurements,
  analyzeSkinTone,
  determineBodyType,
  recommendSize
} from '../data/bodyAnalysis';
import '../css/BodyAnalysis.css';

const videoConstraints = {
  width: 640,
  height: 480,
  facingMode: 'user'
};

const BodyAnalysisComponent = () => {
  const webcamRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = async () => {
    setLoading(true);

    // Wait until webcam ref is ready and has video
    const video = webcamRef.current && webcamRef.current.video;
    if (!video || video.readyState < 2) {
      alert("Webcam not ready yet. Please wait a second and try again.");
      setLoading(false);
      return;
    }

    const measurements = await analyzeBodyMeasurements(video);
    const skinTone = await analyzeSkinTone(); // Dummy skin tone
    const bodyType = determineBodyType(measurements);
    const size = recommendSize(measurements);

    setResults({ measurements, skinTone, bodyType, size });
    setLoading(false);
  };

  return (
    <div className="analysis-container">
      <h3>AI Clothing Recommender</h3>
      <Webcam
        ref={webcamRef}
        videoConstraints={videoConstraints}
        mirrored
        screenshotFormat="image/jpeg"
        style={{ width: 640, height: 480, marginBottom: '15px' }}
      />
      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? 'Analyzing...' : 'Start Analysis'}
      </button>

      {results && (
        <div className="results">
          <h4>Results:</h4>
          <p><strong>Body Type:</strong> {results.bodyType}</p>
          <p><strong>Recommended Size:</strong> {results.size}</p>
          <p><strong>Skin Tone:</strong> {results.skinTone.tone} ({results.skinTone.undertone})</p>
          <div className="tone-box" style={{ backgroundColor: results.skinTone.hex }}></div>
          <h5>Measurements:</h5>
          <ul>
            {Object.entries(results.measurements).map(([key, value]) => (
              <li key={key}>{key}: {value.toFixed(1)} cm</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BodyAnalysisComponent;
