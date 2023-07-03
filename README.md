# Phase1-week3-code-challenge-FlatDango
Movie Site
This is a simple movie site that allows users to view movie details such as runtime, category, title, tickets sold, and a brief description. Users can explore the available movies and gather information about each movie before making a decision to purchase tickets.

<!-- Features -->
1.Browse a list of available movies.
2.View detailed information about each movie.
3.See the movie's runtime, category, title, tickets sold, and description.
4.Purchase tickets for the desired movie.

<!-- Functioning of the Movie Site -->
The movie site is a web application that provides users with the ability to browse and view detailed information about available movies. It also allows users to purchase tickets for their desired movie. Here's how the different features of the movie site function:

<!-- Viewing movies available in the website -->
First you need to run the json-server and look out for the database file by the name db.json and run it to populate the website with the movies available 

<!-- Browse a List of Available Movies: -->
When the web page loads, the init() function is called after the DOM content has been loaded.
The init() function makes a GET request to the server at http://localhost:3000/films to fetch the list of available movies.
The response data is then iterated over using a forEach loop, and for each movie, a movie card is created.
Each movie card consists of an image and a title, and it is appended to the "other-movies" container on the web page.
Clicking on a movie card triggers the getMovieDetails(movieId) function, which fetches the detailed information for that specific movie.

<!-- View Detailed Movie Information: -->
The getMovieDetails(movieId) function is called when a user clicks on a movie card.
It makes a GET request to the server at http://localhost:3000/films/${movieId} to fetch the detailed information for the selected movie.
The response data contains information such as the movie's title, runtime, capacity, showtime, tickets sold, description, and poster.
The updateMovieDetails() function is then called with the retrieved movie details to update the relevant elements on the web page.
The movie's details, including the title, runtime, capacity, showtime, tickets sold, description, and poster, are displayed to the user.

<!-- Purchase Tickets: -->
After viewing the movie details, users can enter the number of tickets they want to purchase in the input field.
Clicking the "Submit" button triggers an event listener that calculates the remaining tickets and updates the ticket response accordingly.
If the total number of tickets sold and the number of tickets to be purchased exceeds the capacity, the ticket response displays "Sold out!"

Otherwise, the ticket response displays the number of remaining tickets.
The tickets sold counter is updated, and the "Tickets Sold" element is also updated with the new value.
These features provide users with the ability to browse movies, view details, and purchase tickets based on the available capacity. The movie site enhances the user experience by providing relevant movie information and ensuring the availability of tickets for a seamless ticket purchase process.