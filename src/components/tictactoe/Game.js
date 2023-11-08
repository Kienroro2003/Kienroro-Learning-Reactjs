import React from "react";
import Board from "./Board";
import "./GameStyle.css";
// import { useState } from "react";
import { calculateWinnter } from "../../helpers";
import { useReducer } from "react";

const Game = () => {
  const gameReducer = (state, action) => {
    switch (action.type) {
      case "CLICK": {
        const { board, xIsNext } = JSON.parse(JSON.stringify(state));
        console.log(action.payload);
        const { index, winner } = action.payload;
        if (winner || board[index]) return state;
        const nextState = JSON.parse(JSON.stringify(state));
        // console.log(nextState);
        nextState.board[index] = xIsNext ? "X" : "O";
        state.xIsNext = !xIsNext;
        return nextState;
      }
      case "RESET": {
        return { ...state, board: Array(9).fill(null), xIsNext: true };
      }

      default: {
        return state;
      }
    }
  };
  const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
  };
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  // });
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = calculateWinnter(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (boardCopy[index] || winner) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setState({ board: boardCopy, xIsNext: !state.xIsNext });
  };

  const handleResetGame = () => {
    dispatch({ type: "RESET" });
    // setState({ ...state, board: Array(9).fill(null) });
  };
  return (
    <div className="game">
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="game-winner">{winner ? "Winner is " + winner : ""}</div>
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
