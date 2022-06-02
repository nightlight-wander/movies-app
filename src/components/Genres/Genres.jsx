import axios from 'axios'
import React, { useEffect } from 'react';

const Genres = ({
    genres,
    setGenres,
    selectedGenres,
    setSelectedGenres,
    setPage,
    media_type,
}) => {

    useEffect(()=>{
        (async()=>{
            const data=await axios.get(`https://api.themoviedb.org/3/genre/${media_type}/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`)
            setGenres(data.data.genres)
        })()
    },[])

    // const genreHandler=(id)=>{
    //     for(let i=0;i<genres.length;i++){
    //         if(id===genres[i].id){
    //             setSelectedGenres([...selectedGenres,genres[i]])
    //         }
    //     }
        
    // }

    const addGenres=(genre)=>{
        setSelectedGenres(prevGenres=>[...prevGenres,genre]);
        setGenres(genres.filter(item=>item.id!==genre.id));
        setPage(parseInt(1))
    }

    const removeGenres=(genre)=>{
        setSelectedGenres(selectedGenres.filter(item=>item.id!==genre.id));
        setGenres(()=>[...genres,genre]);
        setPage(parseInt(1));
    }


  return (
    <div className='genres-wrapper '>
        {selectedGenres?.map((genre)=>{
            return <button key={genre.id} className={`genreBtn selectedGenreBtn`}>{genre.name} <span className='remove-genre-btn' onClick={()=>removeGenres(genre)}>X</span></button>
        })}
        {genres?.map((genre)=>{
            return <button key={genre.id} onClick={()=>addGenres(genre)} className={`genreBtn ${ selectedGenres?`selectedBtn`:""}`}>{genre.name}</button>
        })}
    </div>
  )
}

export {Genres};