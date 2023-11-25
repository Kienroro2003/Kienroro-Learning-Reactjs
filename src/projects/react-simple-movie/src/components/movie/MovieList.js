import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdb } from "../../config";
import { useErrorBoundary, withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import FetchingError from "../errors/FetchingError";

const MovieList = ({ type = "now_playing" }) => {
  const { showBoundary } = useErrorBoundary();
  const { data, error } = useSWR(`${tmdb.getMovieList(type)}`, fetcher);
  // if (data && data.hasOwnProperty("success" && !data.success))
  //   showBoundary(data?.status_message);
  if (error) showBoundary(error);
  console.log("🚀 ~ MovieList ~ data, error:", data, error);
  const movies = data?.results || [];

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default withErrorBoundary(MovieList, {
  FallbackComponent: FetchingError,
  onError(error, info) {
    console.log(error);
    // Do something with the error
    // E.g. log to an error logging client here
  },
});
