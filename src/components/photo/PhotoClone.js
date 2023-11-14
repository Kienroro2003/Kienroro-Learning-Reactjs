import axios from "axios";
import React, { useEffect, useState } from "react";

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

const PhotoClone = () => {
  const [page, setPage] = useState(1);
  const [randomImages, setRandomImages] = useState([]);
  const handleGetRandomPhotos = async (page) => {
    const randomPhotos = await getRandomPhotos(page);
    setRandomImages([...randomImages, ...randomPhotos]);
  };
  useEffect(() => {
    handleGetRandomPhotos(page);
  }, [page]);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomImages.length > 0 &&
          randomImages.map((item, index) => (
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
          //   onClick={handleLoadMorePhotos.current}
          onClick={() => setPage(page + 1)}
          className="inline-block px-8 py-4 bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default PhotoClone;
