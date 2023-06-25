import { createMovieCard } from "/js/utils.js";

window.addEventListener("load", (e) => {
  e.preventDefault();
  renderData();
});

function renderData() {
  const moviesData = getMoviesFromLocalStorage();
  if (moviesData.length) {
    const movies = moviesData
      .map((movie) => {
        return `
            <div class="movie-container">
                ${createMovieCard(movie)}
                <div>
                  <img src="/images/removeIcon.png" class="remove-icon" id=${
                    movie.imdbID
                  }>
                  <p>Remove</p>
                </div>
            </div>`;
      })
      .join("");
    document.querySelector(".watch-list-movies").innerHTML = movies;
    attachRemoveIconEventListeners();
  } else {
    document.querySelector(".watch-list-movies").innerHTML = `
      <a href="/html/index.html" class="anchor-watchlist"
          >Let's add some movies to watch!
      </a>`;
  }
}

function getMoviesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("wishToWatchMovies")) || [];
}

function attachRemoveIconEventListeners() {
  const imgRemoveIcons = document.querySelectorAll(".remove-icon");
  imgRemoveIcons.forEach((imgRemoveIcon) =>
    imgRemoveIcon.addEventListener(
      "click",
      removeMovieFromLocalStorageArrayAndRender
    )
  );
}

function removeMovieFromLocalStorageArrayAndRender(e) {
  let storedMovies = getMoviesFromLocalStorage();
  storedMovies = storedMovies.filter((movie) => movie.imdbID !== e.target.id);
  localStorage.setItem("wishToWatchMovies", JSON.stringify(storedMovies));
  renderData();
}
