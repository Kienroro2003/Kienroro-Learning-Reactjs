const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmRjZjMwMjAxN2I5NDQyMTNiNGRkYjYxZjYzOWMyOSIsInN1YiI6IjY1NTNlZDM5YWQ1MGYwMDBjZTA4OGY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ie6i6UVpGwYQjlmY_G25T1vC_p6Jrk-5wq_qcDxq5q8",
  },
};

const fetcher = (...args) => fetch(...args, options).then((res) => res.json());
export { fetcher };
