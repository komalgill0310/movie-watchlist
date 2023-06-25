function baseURL() {
  return "http://www.omdbapi.com/?apikey=b7cff027";
}

function createMovieCard(movie) {
  const {
    Poster: poster,
    Title: title,
    imdbRating: rating,
    Runtime: duration,
    Plot: plot,
    Genre: genre,
    imdbID: id,
  } = movie;
  return `    
      <div class="movie-info">
        <img src=${poster} alt="Image poster" />
        <h3>${title}</h3>
        <p>${rating}</p>
        <p>${duration}</p>
        <p>${genre}</p>
        <p>${plot}</p>
      </div>   
    `;
}

export { baseURL, createMovieCard };
