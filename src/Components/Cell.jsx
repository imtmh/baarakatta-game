import React from "react";

export default function Cell({ value, isCross, showPlayer1, showPlayer2 }) {
  return (
    <div className={`cell${isCross ? " cross" : ""}`}>
      {showPlayer1 && <div className="player player1">p1</div>}
      {showPlayer2 && <div className="player player2">p2</div>}
    </div>
  );
}
