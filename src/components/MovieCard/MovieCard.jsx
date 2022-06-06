import React from 'react';
import "./MovieCard.css";

const MovieCard = ({
    id,
    title,
    poster_path,
    media_type,
    }) => {

    return (
        <div className='movie-card' key={id}>
            <img src={`https://images5.alphacoders.com/909/thumb-1920-909635.jpg`} alt={title} ></img>
            <div className='name-info'>
                <h4 className='title'>{title}</h4>
                <p className='media'>{media_type === "movie" ? "Movie" : "Series"}</p>
            </div>
        </div>
    )
}

export { MovieCard };