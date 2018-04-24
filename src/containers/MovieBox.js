import React, { Component } from "react";
import MovieList from '../components/MovieList.js';
import '../App.css';

class MovieBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{id: 1, title: "A Quiet Place", text:"Showtimes"},
      {id: 2, title:"I feel pretty", text:"Showtimes"},
      {id: 3, title: "Avengers Infinity War", text:"Showtimes"},
      {id: 4, title:"Deadpool 2", text:"Showtimes"}]
    };
  }
  render(){
    return(
      <div className="movie-box">
        <h2>Opening in the UK this week</h2>
        <MovieList data={this.state.data} />
      </div>
    );
  }
}

export default MovieBox;
