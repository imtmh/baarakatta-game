import React, { useState } from "react";
import "./board.scss";
import Cell from "./Cell";
import PlayerPortal from "./PlayerPortal";
const PLAYER_1 = [
  [4, 2],
  [4, 1],
  [4, 0],
  [3, 0],
  [2, 0],
  [1, 0],
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
  [4, 4],
  [4, 3],
  [3, 3],
  [2, 3],
  [1, 3],
  [1, 2],
  [1, 1],
  [2, 1],
  [3, 1],
  [3, 2],
  [2, 2]
];
const PLAYER_2 = [
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
  [4, 4],
  [4, 3],
  [4, 2],
  [4, 1],
  [4, 0],
  [3, 0],
  [2, 0],
  [1, 0],
  [0, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
  [3, 2],
  [3, 3],
  [2, 3],
  [1, 3],
  [1, 2],
  [2, 2]
];

export default function Board() {
  const [rows] = useState(
    [...Array(5)].map((item, index) => {
      return [...Array(5)].map((child, chIdx) => {
        return index * 5 + (chIdx + 1);
      });
    })
  );

  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);

  return (
    <div className="game">
      <div className="board">
        {player1 === 24 || player2 === 24 ? (
          <div>
            <h2>Winner is player {player1 === 24 ? "1" : "2"}</h2>
            <button
              onClick={() => {
                setPlayer1(0);
                setPlayer2(0);
              }}
            >
              Restart the game?
            </button>
          </div>
        ) : (
          rows.map((row, index) => (
            <div className="row" key={"row-" + index}>
              {row.map((cell, chIdx) => {
                return (
                  <Cell
                    showPlayer1={isAMatch(PLAYER_1[player1], [index, chIdx])}
                    showPlayer2={isAMatch(PLAYER_2[player2], [index, chIdx])}
                    key={"cell-" + index + chIdx}
                    value={index * 5 + (chIdx + 1)}
                    isCross={isCross(index, chIdx)}
                  />
                );
              })}
            </div>
          ))
        )}
      </div>
      <PlayerPortal {...{ setPlayer1, setPlayer2, player1, player2 }} />
    </div>
  );
}

function isAMatch(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
function isCross(x, y) {
  if (x === 2) {
    return y === 0 || y === 2 || y === 4;
  }
  if (y === 2) {
    return x === 0 || x === 4;
  }
  return false;
}
