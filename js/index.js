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
}

async function getMovieDetails(id) {
  const url = baseURL();
  const movieResponse = await fetch(`${url}&i=${id}`);
  const movieData = await movieResponse.json();
  return createMovieCard(movieData);
}

function createMovieCard(movie) {
  const {
    Poster: poster,
    Title: title,
    imdbRating: rating,
    Runtime: duration,
    Plot: plot,
    Genre: genre,
  } = movie;
  return `
    <div class="movie-container">
      <img src=${poster} alt="Image poster" />
      <h3>${title}</h3>
      <p>${rating}</p>
      <p>${duration}</p>
      <p>${genre}</p>
      <div>
        <img src="/images/addIcon.png" />
        <p>Watchlist</p>
      </div>
      <p>${plot}</p>
    </div>
    <hr />
    `;
}
