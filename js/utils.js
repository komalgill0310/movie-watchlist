function baseURL() {
  return "http://www.omdbapi.com/?apikey=b7cff027";
}

function createMovieCard(movie) {
  const {
    Poster: poster,
    Title: title,
    imdbRating: rating,
    Runtime: duration,
    Genre: genre,
    Plot: plot,
  } = movie;
  console.log("movieCard: ", title);
  return `    
      <div class="movie-info">
        <img src=${poster} alt="${title}" class="movie-img">
        <h3 class="movie-title">${title}</h3>
        <p class="movie-rating">${rating}</p>
        <p class="movie-duration">${duration}</p>
        <p class="movie-genre">${genre}</p>
        <p class="movie-plot">${plot}</p>
      </div>   
    `;
}

export { baseURL, createMovieCard };
