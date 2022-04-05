import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import "./BottomNav.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 10,
  },

})

export function BottomNav() {
  // const [value, setValue] = useState(0);
  const classes = useStyles();

  return (

    // <BottomNavigation
    //   showLabels
    //   value={value}
    //   onChange={(event, newValue) => {
    //     console.log(newValue,event);
    //     return setValue(newValue);
    //   }}
    //   className={classes.root}
    // >
    //   <BottomNavigationAction label="Trending" icon={<WhatshotIcon/>} />
    //   <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
    //   <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
    // </BottomNavigation>
    <nav className="actions-cat flex-center">
      <Link to="/" className="flex-col flex-vCenter">
        <span><WhatshotIcon /></span>
        <span className="actions-name">Home</span>
      </Link>
      <Link to="/movies" className="flex-col flex-vCenter">
        <span><MovieIcon /></span>
        <span className="actions-name">Movies</span>
      </Link>
      <Link to="/series" className="flex-col flex-vCenter">
        <span><TvIcon /></span>
        <span className="actions-name">Series</span>
      </Link >
    </nav>

  );
}