import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmRjZjMwMjAxN2I5NDQyMTNiNGRkYjYxZjYzOWMyOSIsInN1YiI6IjY1NTNlZDM5YWQ1MGYwMDBjZTA4OGY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ie6i6UVpGwYQjlmY_G25T1vC_p6Jrk-5wq_qcDxq5q8",
  },
};

const fetcher = (...args) => fetch(...args, options).then((res) => res.json());
// const fetcher = (url) =>
//   axios
//     .get(url, options)
//     .then((res) => res.data)
//     .catch((error) => error);

// const fetcher = async (url) => {
//   const res = await fetch(url, options);

//   // If the status code is not in the range 200-299,
//   // we still try to parse and throw it.
//   if (!res.ok) {
//     const error = new Error("An error occurred while fetching the data.");
//     // Attach extra info to the error object.
//     error.info = await res.json();
//     error.status = res.status;
//     return await res.json();
//   }

//   return res.json();
// };

const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdb = {
  getMovieList: (type, currentPage = 1) =>
    `${tmdbEndpoint}/${type}?page${currentPage}`,
  image500: (poster_path) => `https://image.tmdb.org/t/p/w500/${poster_path}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}`,
  getMovieMeta: (movieId, type) => `${tmdbEndpoint}/${movieId}/${type}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  getMovieSearch: (query, currentPage = 1) =>
    `https://api.themoviedb.org/3/search/movie?query=${query}&page=${currentPage}`,
};
export { fetcher, tmdb };
