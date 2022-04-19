import React, { useState, useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import axios from 'axios';
import { Genres } from '../../components/Genres/Genres';

const Movies = () => {
  const [moviesContent, setMoviesContent] = useState([])
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState();
  const [firstPage, setFirstPage] = useState(0);
  const [lastPage, setLastPage] = useState(10);
  const [genres,setGenres]=useState([]);
  const [selectedGenres,setSelectedGenres]=useState([]);
  const Pages = (props) => {
    let items = [];
    for (let i = props.firstPage + 1; i < props.lastPage + 1; i++) {
      items.push(props.children(i));
    }
    return items;
  }

  const nextPageHandler = () => {
    setFirstPage(firstPage+1);
    setLastPage(lastPage + 1);
    setPage(page=>Number(page)+1);
  }

  const prevPageHandler = () => {
    if (firstPage>1||firstPage===1) {
      setFirstPage(firstPage - 1);
      setLastPage(lastPage - 1);
    }
    if(Number(page)>1){
      setPage(page=>Number(page)-1);
    }
  }

  const pageHandler = (e) => {
    setPage(Number(e.target.textContent))

  }

  const selectedGenreIds=selectedGenres.map(sg=>sg.id);
  const useGenres=selectedGenreIds.reduce((curTotal,curItem)=>curTotal+","+curItem,selectedGenreIds[0]);
  const genreIdsString=useGenres;
  console.log(selectedGenres)

  useEffect(() => {
    (async () => {
      const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreIdsString}`)
      setMoviesContent(data.results);
      setPagesCount(data.total_pages);
    })()
  }, [page, firstPage, lastPage,genreIdsString])


  return (
    <>
      <h1>Movies</h1>
      <Genres genres={genres} setGenres={setGenres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} setPage={setPage}media_type="movie"/>
      <div className='main-content'>
        {moviesContent.map((singleMovie) => {
          return <MovieCard key={singleMovie.id} title={singleMovie.title || singleMovie.name} id={singleMovie.id} media_type="movie" poster_path={singleMovie.poster_path} vote_average={singleMovie.vote_average} />
        })}
      </div>
      <div className="changePage flex-center">
        <button className="page-index" onClick={()=>prevPageHandler()}>&lt;</button>
        <Pages pagesCount={pagesCount} firstPage={firstPage} lastPage={lastPage}>{(index) =>
            <button className={`page-index ${page===index?"active":null}`} key={index} onClick={pageHandler}>{index}</button>
        }
        </Pages>
        <button className="page-index" onClick={()=>nextPageHandler()}>&gt;</button>
      </div>
    </>
  )
}

export { Movies }