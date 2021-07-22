import React, { useState } from "react";

export default function PlayerPortal({ setPlayer1, setPlayer2, player2, player1 }) {
  return (
    <div className="player-portal">
      <h3>PlayerPortal</h3>
      <div className="player-box">
        <Dice {...{ set: setPlayer1, value: player1 }} />
        <Dice {...{ set: setPlayer2, value: player2 }} />
      </div>
    </div>
  );
}
function Dice({ set, value }) {
  const [randomValue, setRandomValue] = useState(null);

  function rollDice() {
    let random = 1 + Math.floor(Math.random() * 5);
    if (random === 5) {
      random = 4;
    }
    setRandomValue(random);
    if (value + random <= 24) set(value + random);
  }

  return (
    <div className="player-dice">
      <div>{randomValue}</div>
      <button onClick={() => rollDice()}>Roll dice</button>
    </div>
  );
}
