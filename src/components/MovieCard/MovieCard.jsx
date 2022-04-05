import React from 'react';
import "./MovieCard.css";

const MovieCard = ({
    id,
    title,
    poster_path,
    media_type,
    vote_average }) => {
    const img_sz300 = "https://image.tmdb.org/t/p/w300";
    const img_sz500 = "https://image.tmdb.org/t/p/w500";

    return (
        <div className='movie-card'>
            <img src={`${img_sz300}/${poster_path}`} alt={title}></img>
            <div className='name-info'>
                <h4 className='title'>{title}</h4>
                <p className='media'>{media_type === "movie" ? "Movie" : "Series"}</p>
            </div>
        </div>
    )
}

export { MovieCard };