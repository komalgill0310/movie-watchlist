import { baseURL } from "/js/utils.js";

const inputSearch = document.getElementById("movie-title-search");
const btnFetchMovie = document.getElementById("btn-fetch-movie");

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
  plusIcon();
}

function plusIcon() {
  const imgPlusIcon = document.querySelectorAll(".plus-icon");
  for (const plusIcon of imgPlusIcon) {
    plusIcon.addEventListener("click", handlePlusClick);
  }
}

function handlePlusClick(e) {
  console.log(" I am plus icon!");
  wishToWatchMovies = wishToWatchMovies.concat(
    movies.filter((movie) => movie.imdbID === e.target.id)
  );
  localStorage.setItem("movie", JSON.stringify(wishToWatchMovies));
  console.log(wishToWatchMovies);
}

let wishToWatchMovies = [];
let movies = [];
async function getMovieDetails(id) {
  const url = baseURL();
  const movieResponse = await fetch(`${url}&i=${id}`);
  const movieData = await movieResponse.json();
  movies.push(movieData);
  const movieCard = createMovieCard(movieData);
  return movieCard;
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
