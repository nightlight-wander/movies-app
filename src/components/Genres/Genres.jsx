import axios from 'axios'
import React, { useEffect } from 'react';

const Genres = ({
    genres,
    setGenres,
    selectedGenres,
    setSelectedGenres,
    media_type,
    setPage
}) => {

    useEffect(()=>{
        (async()=>{
            const data=await axios.get(`https://api.themoviedb.org/3/genre/${media_type}/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`)
            setGenres(data.data.genres)
        })()
    },[selectedGenres])

    const genreHandler=(id)=>{
        for(let i=0;i<genres.length;i++){
            if(id===genres[i].id){
                setSelectedGenres([...selectedGenres,genres[i]])
            }
        }
        setPage(Number(1))
    }


  return (
    <div className='genres-wrapper flex-center'>
        {genres.map((genre)=>{
            return <button key={genre.id} onClick={()=>genreHandler(genre.id)}>{genre.name}</button>
        })}
    </div>
  )
}

export {Genres};