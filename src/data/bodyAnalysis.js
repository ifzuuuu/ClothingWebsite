// bodyAnalysis.js

export const analyzeBodyMeasurements = async (_videoElement, userHeight) => {
  const height = parseFloat(userHeight);
  if (!height || isNaN(height)) {
    throw new Error("Height is required and must be a number");
  }

  return {
    height,
    chest: +(height * 0.255).toFixed(1),
    waist: +(height * 0.22).toFixed(1),
    hips: +(height * 0.24).toFixed(1),
    shoulders: +(height * 0.26).toFixed(1),
  };
};

export const analyzeSkinTone = async () => {
  const tones = [
    { tone: 'light', undertone: 'warm', hex: '#F5DEB3' },
    { tone: 'light', undertone: 'cool', hex: '#FFE4E1' },
    { tone: 'medium', undertone: 'warm', hex: '#DEB887' },
    { tone: 'medium', undertone: 'neutral', hex: '#D2B48C' },
    { tone: 'dark', undertone: 'warm', hex: '#8B4513' },
    { tone: 'dark', undertone: 'cool', hex: '#654321' }
  ];
  return tones[Math.floor(Math.random() * tones.length)];
};

export const determineBodyType = ({ chest, waist, hips }) => {
  if (Math.abs(chest - hips) <= 5 && waist < chest - 10) return 'hourglass';
  if (chest > hips + 5) return 'inverted-triangle';
  if (hips > chest + 5) return 'pear';
  if (waist >= chest - 5) return 'apple';
  return 'rectangle';
};

export const recommendSize = (height) => {
  if (!height || isNaN(height)) return { primary: "M", alternatives: [] };

  let primary = '';
  const alternatives = [];

  if (height < 155) {
    primary = 'XS';
    if (height >= 150) alternatives.push('S');
  } else if (height < 162) {
    primary = 'S';
    if (height <= 156) alternatives.push('XS');
    if (height >= 160) alternatives.push('M');
  } else if (height < 168) {
    primary = 'M';
    if (height <= 163) alternatives.push('S');
    if (height >= 166) alternatives.push('L');
  } else if (height < 175) {
    primary = 'L';
    if (height <= 170) alternatives.push('M');
    if (height >= 173) alternatives.push('XL');
  } else if (height < 182) {
    primary = 'XL';
    if (height <= 178) alternatives.push('L');
    if (height >= 180) alternatives.push('XXL');
  } else {
    primary = 'XXL';
    if (height <= 185) alternatives.push('XL');
  }

  return { primary, alternatives: [...new Set(alternatives)] };
};
