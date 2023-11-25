import React, { Fragment, useEffect, useState } from "react";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;

const MoviePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("https://api.themoviedb.org/3/movie/popular");
  const filterDebounce = useDebounce(query);
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  console.log("out side");
  useEffect(() => {
    console.log("useEffect filter");
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?query=${filterDebounce}&page=${currentPage}`
      );
    } else {
      console.log("useEffect filter else");
      setUrl(`https://api.themoviedb.org/3/movie/popular?page=${currentPage}`);
    }
  }, [filterDebounce, currentPage]);
  const movies = data?.results || [];
  useEffect(() => {
    console.log("useEffect data");
    if (!data || !data.total_results) return;
    setPageCount(data.total_pages);
  }, [data]);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };
  console.log(data);

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 text-white outline-none bg-slate-800"
            placeholder="Type here to search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item, index) => {
            return <MovieCard key={index} item={item}></MovieCard>;
          })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default MoviePage;
