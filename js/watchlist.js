import { createMovieCard } from "/js/utils.js";

renderData();

function renderData() {
  const moviesData = getMoviesFromLocalStorage();
  if (moviesData.length) {
    const movies = moviesData
      .map((movie) =>
        createMovieCard(movie, "/images/removeIcon.png", "Remove")
      )
      .join("");
    document.querySelector(".watch-list-movies").innerHTML = movies;
    attachRemoveIconEventListeners();
  } else {
    document.querySelector(".watch-list-movies").innerHTML = `
      <p class="empty-watchlist-text">Your watchlist is looking a little empty...</p>
      <div>
        <img src="/images/addIcon.png" class="cta-icon" />
        <a href="/html/index.html" class="movies-search-link"
            >Let's add some movies to watch!
        </a>
      </div>`;
  }
}

function getMoviesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("wishToWatchMovies")) || [];
}

function attachRemoveIconEventListeners() {
  const imgRemoveIcons = document.querySelectorAll(".cta-icon");
  imgRemoveIcons.forEach((imgRemoveIcon) =>
    imgRemoveIcon.addEventListener(
      "click",
      removeMovieFromLocalStorageArrayAndRender
    )
  );
}

function removeMovieFromLocalStorageArrayAndRender(e) {
  let storedMovies = getMoviesFromLocalStorage();
  console.log(storedMovies);
  for (let i = 0; i < storedMovies.length; i++) {
    storedMovies[i].imdbID === e.target.id && storedMovies.splice(i, 1);
    break;
  }
  localStorage.setItem("wishToWatchMovies", JSON.stringify(storedMovies));
  renderData();
}
