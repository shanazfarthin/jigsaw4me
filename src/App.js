import React from 'react';
import './App.css';
import PuzzleBoard from './PuzzleBoard'; // Import PuzzleBoard


function App() {
  return (
    <div className="App">
      <h1>Welcome to the Jigsaw Puzzle Game!</h1>
       <p>Your favorite image to explore jigsaw.</p>
      <PuzzleBoard /> {/* Render the PuzzleBoard component */}
    </div>
  );
}

export default App;
