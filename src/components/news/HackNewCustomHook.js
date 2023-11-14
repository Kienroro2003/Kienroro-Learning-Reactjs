import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import lodash from "lodash";
import useHackerNewAPI from "../../hooks/useHackerNewAPI";

const HackNewCustomHook = () => {
  const [query, setQuery] = useState("react");
  const { data, isLoading, errorMessage, setUrl } = useHackerNewAPI(
    "https://hn.algolia.com/api/v1/search?query=react",
    { hits: [] }
  );

  return (
    <div className="bg-white shadow-md w-2/4 mx-auto my-5 p-5 rounded-lg">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
          defaultValue={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {!isLoading && errorMessage && <p>{errorMessage}</p>}
      {isLoading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!isLoading &&
          !errorMessage &&
          data.hits.map((item, index) => {
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

export default HackNewCustomHook;
