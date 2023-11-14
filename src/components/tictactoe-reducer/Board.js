import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.board.map((item, index) => {
        return (
          <Cell
            value={item}
            key={index}
            onClick={() => props.onClick(index)}
            className={item === "x" ? "is-x" : item === "o" ? "is-o" : ""}
          ></Cell>
        );
      })}
    </div>
  );
};

export default Board;
