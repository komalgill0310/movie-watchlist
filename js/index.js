import { baseURL, createMovieCard } from "/js/utils.js";

const inputSearch = document.getElementById("movie-title-search");
const btnFetchMovie = document.getElementById("btn-fetch-movie");

let moviesInfo = [];

btnFetchMovie.addEventListener("click", (e) => {
  e.preventDefault();
  fetchAndRenderMovies();
  inputSearch.value = "";
});

async function fetchAndRenderMovies() {
  const url = baseURL();
  const response = await fetch(`${url}&s=${inputSearch.value}`);
  const data = await response.json();
  if (!data.Search) {
    return renderNoResultsMessage();
  }
  displayMovieData(data);
}

function renderNoResultsMessage() {
  document.querySelector(".main-section").innerHTML = `
    <p class="no-result-text">Unable to find what you’re looking for. Please try another search.</p>  
  `;
}

async function displayMovieData(movieData) {
  let movieHtml = "";
  for (const movie of movieData.Search) {
    movieHtml += await getMovieDetails(movie.imdbID);
  }
  document.querySelector(".main-section").innerHTML = movieHtml;
  attachAddIconEventListeners();
}

async function getMovieDetails(movieId) {
  const url = baseURL();
  const movieResponse = await fetch(`${url}&i=${movieId}`);
  const movieData = await movieResponse.json();
  moviesInfo.push(movieData);
  const movieCard = `${createMovieCard(
    movieData,
    "/images/addIcon.png",
    "Watchlist"
  )}`;
  return movieCard;
}

function attachAddIconEventListeners() {
  const imgAddIcons = document.querySelectorAll(".cta-icon");
  imgAddIcons.forEach((imgAddIcon) => {
    console.log("eachIcon: ", imgAddIcon);
    imgAddIcon.addEventListener("click", addToLocalStorageOnClick);
  });
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
  console.log(wishToWatchMovies);
}
