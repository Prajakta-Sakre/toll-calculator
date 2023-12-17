// CalculateTollButton.js
import React from 'react';

const CalculateTollButton = ({ onClick }) => {
  return (
    <button id="calculateToll" onClick={onClick}>
      Calculate Toll
    </button>
  );
};

export default CalculateTollButton;
