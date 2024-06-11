import React, { useState, useEffect } from 'react';
import './Grid.css';

const Grid = ({ rowLabels, colLabels }) => {
  const initialGrid = Array(9).fill('').map(() => Array(9).fill(''));
  const [grid, setGrid] = useState(initialGrid);
  const [dice1Wins, setDice1Wins] = useState(0);
  const [dice2Wins, setDice2Wins] = useState(0);
  const [ties, setTies] = useState(0);

  useEffect(() => {
    let dice1Count = 0;
    let dice2Count = 0;
    let tieCount = 0;

    const newGrid = initialGrid.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        if (rowIndex === 0 && colIndex !== 0) {
          return colLabels?.[colIndex - 1] || '';
        } else if (rowIndex !== 0 && colIndex === 0) {
          return rowLabels?.[rowIndex - 1] || '';
        } else if (rowIndex !== 0 && colIndex !== 0) {
          const rowValue = rowLabels?.[rowIndex - 1];
          const colValue = colLabels?.[colIndex - 1];
          if (rowValue && colValue) {
            if (rowValue > colValue) {
              dice1Count++;
              return 'dice 1';
            } else if (rowValue < colValue) {
              dice2Count++;
              return 'dice 2';
            } else {
              tieCount++;
              return 'tie';
            }
          }
        }
        return '';
      })
    );

    setGrid(newGrid);
    setDice1Wins(dice1Count);
    setDice2Wins(dice2Count);
    setTies(tieCount);
  }, [initialGrid, rowLabels, colLabels]);

  const totalGames = dice1Wins + dice2Wins + ties;

  return (
    <div className="grid-container">
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                type="text"
                value={cell}
                readOnly
                className={(() => {
                  if (rowIndex === 0 || colIndex === 0) {
                    return 'grid-input-header';
                  } else if (cell === 'dice 1') {
                    return 'grid-input-red';
                  } else if (cell === 'dice 2') {
                    return 'grid-input-blue';
                  } else if (cell === 'tie') {
                    return 'grid-input-tie';
                  } else {
                    return 'grid-input-yellow';
                  }
                })()}
                placeholder={cell}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="results">
        <p>Dice 1 Wins: {dice1Wins} out of {totalGames} games</p>
        <p>Dice 2 Wins: {dice2Wins} out of {totalGames} games</p>
        <p>Ties: {ties} out of {totalGames} games</p>
      </div>
    </div>
  );
};

export default Grid;
