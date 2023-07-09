import React from "react";
import { movies } from "./movies";
import ReviewList from "./review-list";

export default function MovieList() {
    const movieObjects = movies.map(movie =>
        <div key={movie.id} className="movie-section">
            <div>
                <img src={movie.img}></img>
                <h3>{movie.title}, {movie.release}</h3>
                <p>{movie.synopsis}</p>
            </div>
            <ReviewList />
        </div>
    );

    return(
        <div>
            <div>{movieObjects}</div>
        </div>
    );
};

