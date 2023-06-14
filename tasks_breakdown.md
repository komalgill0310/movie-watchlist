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

1.  Header✅

    - Text - Find your film✅
    - Text - My Watchlist✅
      1. it is an anchor tag, which when clicked will take user to the watchlist.html page.
      - this page will be opened on the same tab.
    - a background image✅

2.  A Search Bar - user has the ability to type the text✅

    - An input tag - type *SEARCH*✅
      - a search icon✅
      - placeholder text - Any movie name✅

3.  A Search Button - when click, will make **GET Request**✅

    - A button element✅
      - text -> Search

4.  main Section for the index.html✅
    - A blurred image✅
    - Text Below image -> Start exploring✅

**JAVASCRIPT BREAKDOWN: High level overview for the functionality**

_Index.html Page Functionality_

1. User will enter the movie title name in the Search bar
2. Moives which includes that title name will be fetched from the Server.
3. Each movie will have a "+" icon
   - when user click on the icon, the movie will be added to the local storage.
4. The movie information from the API which should be shown the page
   - poster image for the movie
   - Title for the movie
   - Rating for the movie
   - Duration for the movie -> In Minute
   - Genre
   - Small description of the movie

**Step by Step Breakdown:**

*First Task: When user the enter the movie name in the search input, store that value in a variable.*✅
**Breakdown:**

1. Store input search element in JS using it's end in a variable.

*Second Task: Attach an event listener to the Search button, when user click on it, log the input search value on the console.*✅
**Breakdown:**

1. Store search button element in a variable in JS.
2. Attach an _CLICK_ event listener to the search button
   - When click on the button, log input search value on the console.

_Third Task: Attach an event listener either when user typed the name and hit enter or click on the Search button, the click event listener will be called._
**Breakdown:**✅

1. Attach an event listener to the input => Key Press event
2. Inside check if the event is _Enter_
   - Handle click event will happen.

*Fourth Task: Api Calls*✅
**Breakdown:**

1. Make an api call
2. Log the data on the console

*Fifth Task: Render the data on the page*✅
**Breakdown:**

1. Create a function called renderData

   - Pass data as a parameter to the function.
   - Use object destructure to store the required values in a variable.
   - Create a variable called X
   - use for loop to loop over the data
     - Create html element to hold the required data.
     - Store all the html data in a variable X
   - update the innerHtml for the main section = X

2. Call renderData in a fetchData function.

**Fetch request using _s parameter_ does not return the full detail about the movie. So, In order to get the full detail, need to make another get request using the id for the movie from the first request.**✅
_Breakdown_

1. Make the first API request, using the input value
2. Use for loop to loop over the data
3. make another fetch request using the id for each of the movie object.
4. Use Object destructure to store the values in variables.
5. Log them on the console.

<!-- ========================================================== -->
<!-- ========================================================== -->

**SECOND PART OF THE PROJECT**

*First task: Add an event listener to the plus icon, which when clicked, log a message "I was clicked!" on the console.*✅

**Breakdown**

1. Give the image a class & Id.
2. Get access to that element in JS using its ID.
3. Attach a click event listener to the image, which when clicked log a message on the console.

*Second task: When clicked on the plus icon, log that element's parent's sibling html on the console.*✅

**Breakdown**

1. Reach out to the parent of the clicked element.
2. Log the sibling on the DOM.
