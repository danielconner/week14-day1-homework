import React from 'react';
import '../App.css';


const Movie = (props) => (
  <div className="movie">
    <p className="movieTitle">{props.title}</p>
    <p className="movieBody">{props.children}</p>

  </div>
)



export default Movie;
