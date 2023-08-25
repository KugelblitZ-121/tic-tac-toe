import { useState } from "react";

function MainSquare() {
  const boxes = new Array(9).fill(null);

  const [boxGrid, setBoxGrid] = useState(boxes);
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleChange = (index) => {
    const updatedBox = boxGrid.slice();
    const newBox = [...boxGrid];
    if (updatedBox[index] || winner) {
      return;
    }
    isX === true ? (newBox[index] = "X") : (newBox[index] = "O");
    setBoxGrid(newBox);
    setIsX(!isX);
    calculateWinner(newBox);
  };
  const calculateWinner = (boxes) => {
    const winningSets = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningSets.length; i++) {
      const [a, b, c] = winningSets[i];
      if (boxes[a] && boxes[a] === boxes[b] && boxes[b] === boxes[c]) {
        setWinner(boxes[a]);
        return;
      }
    }
  };
  const resetGame = () => {
    setBoxGrid(boxes);
    setWinner(null);
  };
  return (
    <>
      <div className="border border-red-500 grid grid-cols-3">
        {boxGrid.map((box, index) => (
          <div
            className="w-24 h-24 text-6xl border border-red-500 flex items-center justify-center"
            key={index}
            onClick={() => handleChange(index)}
          >
            {box}
          </div>
        ))}
      </div>
      <div className="mt-5 text-2xl">
        {winner ? (
          <span className="text-green-500">Winner is {winner}</span>
        ) : (
          <span>Next player is: {isX ? "X" : "O"}</span>
        )}
      </div>
      <button onClick={resetGame} className="mt-5">
        Reset Game
      </button>
    </>
  );
}

export default MainSquare;
