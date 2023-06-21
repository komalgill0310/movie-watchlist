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
    <div class="movie-container">
      <div class="movie-info">
        <img src=${poster} alt="Image poster" />
        <h3>${title}</h3>
        <p>${rating}</p>
        <p>${duration}</p>
        <p>${genre}</p>
        <p>${plot}</p>
      </div>
      <div>
        <img src="/images/addIcon.png" class="plus-icon" id=${id} />
        <p>Watchlist</p>
      </div>
    </div>
    <hr />
    `;
}

function getMoviesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("movies"));
}

function renderData() {
  const data = getMoviesFromLocalStorage();
  if (data.length) {
    let movie = "";
    for (const wishToWatchMovie of data) {
      movie += createMovieCard(wishToWatchMovie);
    }
    document.querySelector(".watch-list-movies").innerHTML = movie;
  }
}

window.addEventListener("load", (e) => {
  e.preventDefault();
  renderData();
});
