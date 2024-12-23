import React from 'react';
import './PuzzlePiece.css';  // Make sure your CSS styles are correctly applied

// Import the image
import puzzleImage from './aylaan.jpeg'; // Assuming the image is directly inside the `src` folder

function PuzzlePiece({ id }) {
  return (
    <div className="PuzzlePiece">
      <img src={puzzleImage} alt="Puzzle" />
    </div>
  );
}

export default PuzzlePiece;
