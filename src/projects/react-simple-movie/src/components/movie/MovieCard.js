import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdb } from "../../config";
import { withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <div className="w-full h-[250px] rounded-lg mb-5">
        {poster_path && (
          <img
            src={`${tmdb.image500(poster_path)}`}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        )}
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          {release_date ? (
            <span>{new Date(release_date).getFullYear()}</span>
          ) : (
            <span></span>
          )}
          <span>{vote_average}</span>
        </div>
        <Button bgColor="secondary" onClick={() => navigate(`/movie/${id}`)}>
          Watch now
        </Button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.number,
  }),
};

function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50">
      Something went wrong with this component
    </p>
  );
}

export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});
