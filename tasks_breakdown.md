**Requirements: High Level Overview**
_HTML_

1. Two html files

   - First page -> index.html
   - Second page -> watchlist.html

2. Index.html contains:

   - Search Page
   - Make an API call to OMDB API, with the title searched and then display search results.
   - A button "add to watchlist" which saves that data to local storage.

3. Watchlist.html contains:
   - It just loads and displays data from local storage.

**Default page for the index.html _BreakDown_**

1.  Header

    - Text - Find your film
    - Text - My Watchlist
      1. it is an anchor tag, which when clicked will take user to the watchlist.html page.
      - this page will be opened on the same tab.
    - a background image

2.  A Search Bar - user has the ability to type the text

- An input tag - type text
  - a search icon
  - placeholder text - Any movie name

3. A Search Button - when click, will make **GET Request**

- A button element
  - text -> Search

4. main Section for the index.html -

- A blurred image
- Text Below image -> Start exploring
