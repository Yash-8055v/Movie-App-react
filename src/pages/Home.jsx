import MovieCard from "../components/MovieCard";
import "../css/Home.css"
import React, { useState } from 'react'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {id: 1, title: "John Wick", release_date: "2020"},
  ];

  const handleSearch = (e) => {
    e.preventDefault();
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) => movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}/>)
        )}
      </div>
    </div>
  )
}
