import React, { useState, useRef, useEffect } from 'react';
import './PuzzleBoard.css';

function PuzzlePiece({ piece, index, onDragStart, onDrop }) {
  return (
    <div
      className="PuzzlePiece"
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDrop={(e) => onDrop(e, index)}
      onDragOver={(e) => e.preventDefault()} // Allow dropping
    >
      <img src={piece} alt={`Puzzle piece ${index}`} />
    </div>
  );
}

function PuzzleBoard() {
  const [image, setImage] = useState(null);
  const [pieces, setPieces] = useState([]);
  const [shuffledPieces, setShuffledPieces] = useState([]);
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [timer, setTimer] = useState(0); // Timer starts from 0 and counts up
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const canvasRef = useRef(null);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      timerRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsTimerRunning(false);
  };

  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];
    if (uploadedImage) {
      const img = new Image();
      img.src = URL.createObjectURL(uploadedImage);
      img.onload = () => {
        setImage(img);
        sliceImage(img);
      };
    }
  };

  const sliceImage = (img) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const pieceWidth = img.width / 4;
      const pieceHeight = img.height / 4;

      const piecesArray = [];
      canvas.width = pieceWidth;
      canvas.height = pieceHeight;

      for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(
            img,
            x * pieceWidth,
            y * pieceHeight,
            pieceWidth,
            pieceHeight,
            0,
            0,
            pieceWidth,
            pieceHeight
          );
          piecesArray.push(canvas.toDataURL());
        }
      }

      setPieces(piecesArray);
      setShuffledPieces(shuffleArray(piecesArray));
    }
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('pieceIndex', index);
    if (!isTimerRunning) startTimer();
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = parseInt(e.dataTransfer.getData('pieceIndex'), 10);

    if (dragIndex === dropIndex) return;

    const newShuffledPieces = [...shuffledPieces];
    [newShuffledPieces[dragIndex], newShuffledPieces[dropIndex]] = [
      newShuffledPieces[dropIndex],
      newShuffledPieces[dragIndex],
    ];

    setShuffledPieces(newShuffledPieces);
    checkPuzzleSolved(newShuffledPieces);
  };

  const checkPuzzleSolved = (currentPieces) => {
    if (JSON.stringify(currentPieces) === JSON.stringify(pieces)) {
      setIsPuzzleSolved(true);
      stopTimer();
      setTimeSpent(timer); // Record the time spent
    }
  };

  const handlePlayAgain = () => {
    setImage(null);
    setPieces([]);
    setShuffledPieces([]);
    setIsPuzzleSolved(false);
    setTimer(0);
    setTimeSpent(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="PuzzleContainer">
      <div className="center">
      {!image && <div className="animatedMessage">Insert your image here</div>}
        {!image && <input type="file" onChange={handleImageUpload} />}
      </div>
      <div className="PuzzleBoard">
        <div className="PuzzleGrid">
          {shuffledPieces.map((piece, index) => (
            <PuzzlePiece
              key={index}
              piece={piece}
              index={index}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>
      <div className="RightSide">
        {image && <img src={image.src} alt="Original uploaded" />}
        {isPuzzleSolved && (
          <div className="CompletionMessage">
            <h2>Congratulations!</h2>
            <p>You have spent {timeSpent} seconds to complete the puzzle.</p>
            <button onClick={handlePlayAgain}>Play Again</button>
          </div>
        )}
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
}

export default PuzzleBoard;
