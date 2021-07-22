import React, { useState } from "react";
import "./board.scss";
import Cell from "./Cell";
export default function Board() {
  const [rows, setRows] = useState([...Array(10)].map((item, index) => [...Array(10)].map((child, chIdx) => ({}))));
  console.log(rows);
  return (
    <div className="board">
      {rows.map((row, index) => (
        <div className="row" key={"row-" + index}>
          {row.map((cell, chIdx) => (
            <Cell key={"cell-" + index} value={index * 10 + (chIdx + 1)} />
          ))}
        </div>
      ))}
    </div>
  );
}
