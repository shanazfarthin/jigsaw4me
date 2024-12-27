import React from 'react';
import './PuzzlePiece.css'; // Ensure your CSS styles are correctly applied

// Import the image
import puzzleImage from './aylaan.jpeg'; // Assuming the image is directly inside the `src` folder

function PuzzlePiece({ id }) {
  // Event handlers for touch and click interactions
  function handleTouchStart(event) {
    console.log(`Touch started on piece ${id}:`, event.target);
  }

  function handleTouchMove(event) {
    console.log(`Touch moved on piece ${id}:`, event.touches);
  }

  function handleClick(event) {
    console.log(`Mouse click on piece ${id}:`, event.target);
  }

  return (
    <div
      className="PuzzlePiece"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <img src={puzzleImage} alt="Puzzle" />
    </div>
  );
}

export default PuzzlePiece;
