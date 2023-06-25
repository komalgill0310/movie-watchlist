import { createMovieCard } from "/js/utils.js";

function getMoviesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("wishToWatchMovies")) || [];
}

function renderData() {
  const data = getMoviesFromLocalStorage();
  if (data.length) {
    let movie = "";
    for (const wishToWatchMovie of data) {
      console.log(wishToWatchMovie.imdbID);
      movie += `
        <div class="movie-container">
            ${createMovieCard(wishToWatchMovie)}
            <div>
              <img src="/images/removeIcon.png" class="remove-icon" id=${
                wishToWatchMovie.imdbID
              }>
              <p>Remove</p>
            </div>
        </div>`;
    }
    document.querySelector(".watch-list-movies").innerHTML = movie;
    removeIcon();
  } else {
    document.querySelector(".watch-list-movies").innerHTML = `
      <a
      href="/html/index.html"
      class="anchor-watchlist"
      >Let's add some movies to watch!
      </a>`;
  }
}

window.addEventListener("load", (e) => {
  e.preventDefault();
  renderData();
});

function removeIcon() {
  const imgRemoveIcon = document.querySelectorAll(".remove-icon");
  for (const removeIcon of imgRemoveIcon) {
    removeIcon.addEventListener("click", handleRemoveClick);
  }
}

function handleRemoveClick(e) {
  let storedMovies = getMoviesFromLocalStorage();
  storedMovies = storedMovies.filter((movie) => movie.imdbID !== e.target.id);
  localStorage.setItem("wishToWatchMovies", JSON.stringify(storedMovies));
  renderData();
}
