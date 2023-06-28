function baseURL() {
  return "http://www.omdbapi.com/?apikey=b7cff027";
}

function createMovieCard(movie, imgSrc, descriptionText) {
  const {
    imdbID: movieId,
    Poster: poster,
    Title: title,
    imdbRating: rating,
    Runtime: duration,
    Genre: genre,
    Plot: plot,
  } = movie;
  return `    
      <div class="movie-card">
        <img src=${poster} alt="${title}" class="movie-img">
        <h3 class="movie-title">${title}</h3>
        <img src="/images/filledStarIcon.png" alt="yellow color filled Star Icon" class="movie-rating-icon" />
        <p class="movie-rating">${rating}</p>
        <p class="movie-duration">${duration}</p>
        <p class="movie-genre">${genre}</p>
        <img src="${imgSrc}" class="action-icon" id=${movieId} /> 
        <p class="description-text">${descriptionText}</p>
        <p class="movie-plot">${plot}</p>
      </div>   
    `;
}

export { baseURL, createMovieCard };
