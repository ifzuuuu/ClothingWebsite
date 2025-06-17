import React from 'react';
import { User, Ruler, Palette, BarChart3 } from 'lucide-react';
import '../css/MeasurementResults.css';

const MeasurementResults = ({
  measurements = {},
  skinTone = { tone: 'Unknown', undertone: 'neutral', hex: '#ccc' },
  bodyType = 'rectangle',
  recommendedSize = { primary: 'M', alternatives: [] }
}) => {
  const formatBodyType = (type) =>
    type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const { height = 0, chest = 0, waist = 0, hips = 0, shoulders = 0 } = measurements;

  return (
    <div className="measurement-container">
      <div className="header">
        <h2>Your Body Analysis</h2>
        <p>Personalized measurements and style guidance</p>
      </div>

      <div className="card-grid">
        {/* Measurements */}
        <div className="card purple-bg">
          <div className="card-header">
            <Ruler className="icon purple-icon" />
            <h3>Measurements</h3>
          </div>
          <div className="info-pairs">
            <div><span>Height</span><span>{height.toFixed(1)} cm</span></div>
            <div><span>Chest</span><span>{chest.toFixed(1)} cm</span></div>
            <div><span>Waist</span><span>{waist.toFixed(1)} cm</span></div>
            <div><span>Hips</span><span>{hips.toFixed(1)} cm</span></div>
            <div><span>Shoulders</span><span>{shoulders.toFixed(1)} cm</span></div>
          </div>
        </div>

        {/* Body Type & Size */}
        <div className="card pink-bg">
          <div className="card-header">
            <User className="icon pink-icon" />
            <h3>Body Profile</h3>
          </div>
          <div className="info-block">
            <div>
              <label>Body Type</label>
              <strong>{formatBodyType(bodyType)}</strong>
            </div>
            <div>
              <label>Recommended Size</label>
              <strong>
                {recommendedSize.primary}
                {recommendedSize.alternatives?.length > 0 && (
                  <> (Also fits: {recommendedSize.alternatives.join(', ')})</>
                )}
              </strong>
            </div>
          </div>
        </div>

        {/* Skin Tone */}
        <div className="card orange-bg">
          <div className="card-header">
            <Palette className="icon orange-icon" />
            <h3>Skin Tone</h3>
          </div>
          <div className="skin-tone-info">
            <div className="color-box" style={{ backgroundColor: skinTone.hex }}></div>
            <div>
              <div className="tone">{skinTone.tone}</div>
              <div className="undertone">{skinTone.undertone} undertone</div>
            </div>
          </div>
        </div>
      </div>

      {/* Style Tips */}
      <div className="style-tips">
        <div className="card-header">
          <BarChart3 className="icon purple-icon" />
          <h3>Style Recommendations</h3>
        </div>
        <div className="recommendations">
          <div>
            <h4>Best Fits for {formatBodyType(bodyType)}</h4>
            <ul>
              {bodyType === 'hourglass' && (
                <>
                  <li>Fitted tops and dresses</li>
                  <li>High-waisted bottoms</li>
                  <li>Wrap and belted styles</li>
                </>
              )}
              {bodyType === 'pear' && (
                <>
                  <li>A-line skirts and dresses</li>
                  <li>Boat neck and off-shoulder tops</li>
                  <li>Darker bottoms with bright tops</li>
                </>
              )}
              {bodyType === 'apple' && (
                <>
                  <li>Empire waist dresses</li>
                  <li>V-neck tops</li>
                  <li>Straight-leg pants</li>
                </>
              )}
              {bodyType === 'rectangle' && (
                <>
                  <li>Peplum tops and dresses</li>
                  <li>Layered outfits</li>
                  <li>Wide-leg trousers</li>
                </>
              )}
              {bodyType === 'inverted-triangle' && (
                <>
                  <li>A-line skirts and dresses</li>
                  <li>Scoop and V-neck tops</li>
                  <li>Bootcut jeans</li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h4>Colors for {skinTone.tone} {skinTone.undertone} Skin</h4>
            <ul>
              {skinTone.undertone === 'warm' && (
                <>
                  <li>Earth tones and warm colors</li>
                  <li>Gold and bronze accessories</li>
                  <li>Coral, peach, and warm reds</li>
                </>
              )}
              {skinTone.undertone === 'cool' && (
                <>
                  <li>Jewel tones and cool colors</li>
                  <li>Silver and platinum accessories</li>
                  <li>Blues, purples, and emerald greens</li>
                </>
              )}
              {skinTone.undertone === 'neutral' && (
                <>
                  <li>Classic neutrals with bold accents</li>
                  <li>Warm and cool color blends</li>
                  <li>Flexible wardrobe palette</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasurementResults;
