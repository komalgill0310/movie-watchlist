# **Movie Watchlist**

# Overview

Welcome to **"Movie Watchlist"** – a project created to simplify the process of managing a watchlist for movies. Users can easily search for movies using keywords and view relevant details such as the movie's poster, name, rating, duration, genre, and a brief description. Additionally, users can add movies to their watchlist for future viewing.

# Website

Live Version [here](https://colorschemegenerator03.netlify.app/)

# Preview

<img src = "colorSchemeGenerator.gif">

## What I've Learned

This project has enriched my knowledge in web development, focusing on the following key learnings:

- **Asynchronous Data Fetching**:  Implementing asynchronous data fetching using **'async/await'** to pull movie data from the Omdb API.

- **Local Storage Usage**: Utilizing local storage to store and retrieve the user's watchlist, providing a seamless experience across sessions.

## Getting Started

Explore the world of movies and build your watchlist by following these steps:

1. **Clone the Repository**: Open your terminal and run the following command to clone the repository to your local machine:
```
    git clone git@github.com:your-username/movie-watchlist.git
```

2. **Navigate to Project Directory**: Move into the project directory using the following command:
```
    cd movie-watchlist
```

3. **Open the HTML File**: Open the **index.html** file in your preferred web browser.

4. **Search for Movies**: Type keywords in the search box to find relevant movies. View movie details and add them to your watchlist.

5. **View Watchlist**: Click on **"My Watchlist"** to see the movies you've added. Remove movies or go back to the search page for more.

6. **Persistent Watchlist**: Your watchlist is stored in local storage, ensuring it's available even when you return to the site.

## Features

- **Movie Search**: Enter keywords to find movies and view details such as posters, names, ratings, durations, genres, and descriptions.

- **Watchlist Management**: Add movies to your watchlist, view your watchlist, and remove movies from it.

- **Local Storage**: Persists watchlist data in local storage for a consistent user experience across sessions.

## Project Structure

The project is built using HTML, CSS, and JavaScript with the following structure:

- **css**: Contains styling files.
    - **common.css**: Defines common styling rules for the project.
    - **index.css**: Styles for the index(Search) page. 
    - **watchlist.css**: Styles for the watchlist page. 
    - **watchListMoives.css**: Styles for individual movies in the watchlist. 

- **html**: Contains HTML files.
    - **watchlist.html**: Defines the structure of the watchlist page.

- **js**: Contains JavaScript files. 
    - **index.js**: Implements the logic for the search page, including movie searching and displaying details.
    - **utils.js**: Houses utility function for the project. 
    - **watchlist.css**: Implements the logic for managing the watchlist.
    - **watchListMovies.js**: Implements the logic for displaying individual movies in the watchlist.

- **index.html**: Contains the structure of the web page. 

- **images**: Stores relative images for the project, such as icons and background images.

- **tasks_breakdown.md**: Breakdown of project tasks for organized developement.

## API Source

Data is pulled from the [OMDb API](https://www.omdbapi.com/) using the entered text. 

# Author

Komal | Software Developer | [Portfolio](https://kaurkomal.com/) | [LinkedIn](https://www.linkedin.com/in/hssa03/)

