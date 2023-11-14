import React, { useReducer } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helpers";

const initialState = {
  board: Array(9).fill(null),
  isX: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      console.log("In Click");
      const { index, winner } = action.payload;
      if (winner || state.board[index]) break;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = state.isX ? "x" : "o";
      nextState.isX = !state.isX;
      return nextState;
    }

    case "RESET": {
      const nextState = {
        ...state,
        board: Array(9).fill(null),
        isX: true,
      };
      console.log(nextState);
      return nextState;
    }

    default:
      break;
  }
  return state;
};

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };

  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
    console.log(state);
  };
  return (
    <div>
      <Board board={state.board} onClick={handleClick}></Board>
      {winner && (
        <div className="game-winner">
          Winner is {`${!state.isX ? "x" : "o"}`}
        </div>
      )}
      <button className="game-reset" onClick={handleResetGame}>
        Reset
      </button>
    </div>
  );
};

export default Game;
