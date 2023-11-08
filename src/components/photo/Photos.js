import React, { useRef } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import { useReducer } from "react";

//https://picsum.photos/v2/list

const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CLICK": {
//       break;
//     }
//     default:
//       break;
//   }
// };

// const initialState = {};

const Photos = () => {
  const [randomImage, setRandomImage] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  // const [state, dispath] = useReducer(reducer, initialState);
  const handleLoadMorePhotos = useRef({});
  handleLoadMorePhotos.current = () => {
    getRandomPhotos(nextPage).then((images) => {
      setRandomImage([...randomImage, ...images]);
      setNextPage(nextPage + 1);
    });
  };

  useEffect(() => {
    handleLoadMorePhotos.current();
  }, []);
  // const handleLoadMorePhotos2 = async () => {
  //   const images = await getRandomPhotos(nextPage);
  // };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomImage.length > 0 &&
          randomImage.map((item, index) => (
            <div
              key={`${item.download_url}${index}`}
              className="p-3 bg-white shadow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMorePhotos.current}
          className="inline-block px-8 py-4 bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
