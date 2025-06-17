import { useState, useRef, useCallback } from 'react';

export const useCamera = () => {
  const [isActive, setIsActive] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const waitForVideoRef = async () => {
    let attempts = 0;
    while (!videoRef.current && attempts < 20) {
      await new Promise(resolve => setTimeout(resolve, 100)); // wait 100ms
      attempts++;
    }
    if (!videoRef.current) {
      throw new Error('videoRef not ready after multiple attempts');
    }
  };

  const startCamera = useCallback(async () => {
    try {
      setError(null);
      await waitForVideoRef(); // wait until video element is mounted

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        },
        audio: false
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsActive(true);
        setHasPermission(true);
        console.log('Camera stream started');
      }
    } catch (err) {
      console.error('Camera error:', err);
      setError('Camera access denied or not available');
      setHasPermission(false);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsActive(false);
  }, []);

  const captureImage = useCallback(() => {
    if (!videoRef.current || !isActive) return null;

    const canvas = document.createElement('canvas');
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.drawImage(video, 0, 0);
    return canvas.toDataURL('image/jpeg', 0.8);
  }, [isActive]);

  return {
    videoRef,
    isActive,
    hasPermission,
    error,
    startCamera,
    stopCamera,
    captureImage
  };
};
