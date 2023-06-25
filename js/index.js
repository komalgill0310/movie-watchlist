import { baseURL, createMovieCard } from "/js/utils.js";

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
  const WISHTOWATCHMOVIES = [];
  if (JSON.parse(localStorage.getItem("movies"))) {
    WISHTOWATCHMOVIES.push(...JSON.parse(localStorage.getItem("movies")));
  }
  WISHTOWATCHMOVIES.push(
    ...movies.filter((movie) => movie.imdbID === e.target.id)
  );
  localStorage.setItem("movies", JSON.stringify(WISHTOWATCHMOVIES));
}

let movies = [];

async function getMovieDetails(id) {
  const url = baseURL();
  const movieResponse = await fetch(`${url}&i=${id}`);
  const movieData = await movieResponse.json();
  movies.push(movieData);
  const movieCard = `
    <div class="movie-container">
      ${createMovieCard(movieData)}
      <div>
        <img src="/images/addIcon.png" class="plus-icon" id=${id} />
        <p>Watchlist</p>
      </div>
    </div>`;
  return movieCard;
}
