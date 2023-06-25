import { baseURL, createMovieCard } from "/js/utils.js";

const inputSearch = document.getElementById("movie-title-search");
const btnFetchMovie = document.getElementById("btn-fetch-movie");

let moviesInfo = [];

btnFetchMovie.addEventListener("click", (e) => {
  e.preventDefault();
  fetchMovies();
  inputSearch.value = "";
});

async function fetchMovies() {
  const url = baseURL();
  const response = await fetch(`${url}&s=${inputSearch.value}`);
  const data = await response.json();
  displayMovieData(data);
}

async function displayMovieData(movieData) {
  let movieHtml = "";
  for (const movie of movieData.Search) {
    movieHtml += await getMovieDetails(movie.imdbID);
  }
  document.querySelector(".main-section").innerHTML = movieHtml;
  attachPlusIconEventListeners();
}

async function getMovieDetails(movieId) {
  const url = baseURL();
  const movieResponse = await fetch(`${url}&i=${movieId}`);
  const movieData = await movieResponse.json();
  moviesInfo.push(movieData);
  const movieCard = `
    <div class="movie-container">
      ${createMovieCard(movieData)}
      <div>
        <img src="/images/addIcon.png" 
        alt="add-icon-to-add-movies" 
        class="add-icon"
        id=${movieId} 
        >
        <p>Watchlist</p>
      </div>
    </div>`;
  return movieCard;
}

function attachPlusIconEventListeners() {
  const imgAddIcons = document.querySelectorAll(".add-icon");
  for (const addIcon of imgAddIcons) {
    addIcon.addEventListener("click", addToLocalStorageOnClick);
  }
}

function addToLocalStorageOnClick(e) {
  const wishToWatchMovies = [];
  const storedMoviesData = JSON.parse(
    localStorage.getItem("wishToWatchMovies")
  );
  storedMoviesData && wishToWatchMovies.push(...storedMoviesData);
  wishToWatchMovies.push(
    ...moviesInfo.filter((movie) => movie.imdbID === e.target.id)
  );
  localStorage.setItem("wishToWatchMovies", JSON.stringify(wishToWatchMovies));
}
