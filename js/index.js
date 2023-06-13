// API KEY: b7cff027

const inputSearch = document.getElementById("movie-title-search");
const btnFetchMovie = document.getElementById("btn-fetch-movie");

inputSearch.addEventListener("keypress", (e) => e.key === "Enter" && log);

btnFetchMovie.addEventListener("click", log);

function log() {
  console.log(inputSearch.value);
  inputSearch.value = "";
}
