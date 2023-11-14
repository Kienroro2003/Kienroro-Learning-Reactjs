import axios from "axios";
import React, { useReducer, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import lodash, { set } from "lodash";

//https://hn.algolia.com/api/v1/search?query=react

const initializeState = {
  hits: [],
  query: "react",
  isLoading: false,
  errorMessage: "",
  url: `https://hn.algolia.com/api/v1/search?query=`,
};

const hackNewReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      return { ...state, url: action.payload };
    }
    case "SET_DATA": {
      //   const newState = JSON.parse(JSON.stringify(state));
      //   const merge = [...newState.hits, ...action.payload];
      //   newState.hits = merge;
      //   console.log(
      //     "🚀 ~ file: HackNewsReducer.js:26 ~ hackNewReducer ~ newState:",
      //     newState
      //   );
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, isLoading: action.payload };
    }

    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }

    default:
      break;
  }
  return state;
};

const HackNewsReducer = () => {
  const [state, dispatch] = useReducer(hackNewReducer, initializeState);
  const handleFetchData = useRef({});
  // const handleUpdateQuery = lodash.debounce((event) => {
  //   setQuery(event.target.value);
  // }, 500)
  handleFetchData.current = async () => {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
      const response = await axios.get(state.url);
      console.log(
        "🚀 ~ file: HackNewsReducer.js:59 ~ handleFetchData.current= ~ response:",
        response
      );
      dispatch({
        type: "SET_DATA",
        payload: response.data.hits,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };

  useEffect(() => {
    handleFetchData.current();
    console.log("change");
  }, [state.url]);
  return (
    <div className="bg-white shadow-md w-2/4 mx-auto my-5 p-5 rounded-lg">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
          value={state.query}
          onChange={(event) =>
            dispatch({
              type: "SET_QUERY",
              payload: event.target.value,
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: "CLICK",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {state.isLoading && state.errorMessage && <p>{state.errorMessage}</p>}
      {state.isLoading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.isLoading &&
          !state.errorMessage &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 className="p-3 bg-gray-100 rounded-md" key={index}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackNewsReducer;
