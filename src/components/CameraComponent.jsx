import React, { useState } from 'react';
import { useCamera } from '../hooks/useCamera';
import '../css/Camera.css';

const CameraComponent = () => {
  const {
    videoRef,
    isActive,
  
    error,
    startCamera,
    stopCamera,
    captureImage
  } = useCamera();

  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapture = () => {
    const image = captureImage();
    if (image) {
      setCapturedImage(image);
    }
  };

  return (
    <div className="camera-container">
      {error && <p className="error">{error}</p>}

      <video
        ref={videoRef}
        autoPlay
        playsInline
        className={`camera-video ${isActive ? 'active' : 'inactive'}`}
      />

      <div className="camera-controls">
        {!isActive ? (
          <button onClick={startCamera}>Start Camera</button>
        ) : (
          <>
            <button onClick={handleCapture}>Capture</button>
            <button onClick={stopCamera}>Stop</button>
          </>
        )}
      </div>

      {capturedImage && (
        <div className="captured-preview">
          <h4>Captured Image:</h4>
          <img src={capturedImage} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default CameraComponent;
