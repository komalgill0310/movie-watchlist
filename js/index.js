// API KEY: b7cff027

const inputSearch = document.getElementById("movie-title-search");
const btnFetchMovie = document.getElementById("btn-fetch-movie");

// inputSearch.addEventListener("keypress", (e) => {
//   e.preventDefault();
//   if (e.key === "Enter") {
//     fetchData();
//     inputSearch.value = "";
//   }
// });

btnFetchMovie.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
  inputSearch.value = "";
});

async function fetchData() {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=b7cff027&t=${inputSearch.value}`
  );
  const data = await response.json();
  console.log("data: ", data);
}
