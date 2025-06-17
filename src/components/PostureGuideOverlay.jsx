import React from 'react';
import '../css/PostureGuideOverlay.css';

const PostureGuideOverlay = ({ message, isGood }) => {
  return (
    <div className={`posture-guide-overlay ${isGood ? 'good' : 'bad'}`}>
      <p>{message}</p>
    </div>
  );
};

export default PostureGuideOverlay;
