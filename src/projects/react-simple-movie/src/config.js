const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmRjZjMwMjAxN2I5NDQyMTNiNGRkYjYxZjYzOWMyOSIsInN1YiI6IjY1NTNlZDM5YWQ1MGYwMDBjZTA4OGY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ie6i6UVpGwYQjlmY_G25T1vC_p6Jrk-5wq_qcDxq5q8",
  },
};

const fetcher = (...args) => fetch(...args, options).then((res) => res.json());
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdb = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}`,
  image500: (poster_path) => `https://image.tmdb.org/t/p/w500/${poster_path}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}`,
  getMovieMeta: (movieId, type) => `${tmdbEndpoint}/${movieId}/${type}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
};
export { fetcher, tmdb };
