import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el, id}) => {
    return (
        <div key={id} className="popular--card">
            <Link to={`/movie/movie_details/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`} alt="img"/>
            </Link>
            <h2>{el.title}</h2>
        </div>
    );
};

export default MovieCard;