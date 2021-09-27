import React from "react";
import MovieList from "./components/movie-list";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <MovieList/>
      </main>
    </div>
  );
}

export default App;
