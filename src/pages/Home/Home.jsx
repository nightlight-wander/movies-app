import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Home.css";
import { MovieCard } from '../../components/MovieCard/MovieCard';

const Home = () => {
  const [moviesContent, setMoviesContent] = useState([])
  const [page, setPage] = useState(1)
  const Pages=(props)=>{
    let items=[];
    for(let i=1;i<props.pagesCount;i++){
      items.push(props.children(i))
    }
    return items
  }

  const pageHandler=(e)=>{
    setPage(e.target.textContent)
  }

  useEffect(() => {
    (async () => {
      const { data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_KEY}&page=${page}`)
      setMoviesContent(data.results)
    })()
  }, [page])
  return (
    <>
      <div className='main-content'>
        {moviesContent.map((singleMovie) => {
          return <MovieCard key={singleMovie.id} title={singleMovie.title || singleMovie.name} id={singleMovie.id} media_type={singleMovie.media_type} poster_path={singleMovie.poster_path} vote_average={singleMovie.vote_average} />
        })}
      </div>
      <div className="changePage flex-center">
      <Pages pagesCount={8}>  
      {(index)=><button className="page-index" key={index} onClick={pageHandler}>{index}</button>}
      </Pages>
      </div>
    </>
  )
}

export { Home };