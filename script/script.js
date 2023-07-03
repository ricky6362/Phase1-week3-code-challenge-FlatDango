// Listen for the DOMContentLoaded event and call the init function
document.addEventListener("DOMContentLoaded", init);

function init() {
  // Fetch films data from the server
  fetch('http://localhost:3000/films')
    .then(resp => resp.json())
    .then((data) => {
      // Iterate over each film
      data.forEach(element => {
        const image = element.poster;
        const title = element.title;

        // Create a movie card div element
        let movieDiv = document.createElement('div');
        movieDiv.setAttribute('class', 'movie-card');

        // Create an image element and set its source
        let movieImage = document.createElement('img');
        movieImage.setAttribute('src', image);

        // Create a paragraph element for the movie title and set its text content
        let movieTitle = document.createElement('p');
        movieTitle.textContent = title;

        // Append the movieImage and movieTitle to the movieDiv
        movieDiv.appendChild(movieImage);
        movieDiv.appendChild(movieTitle);

        // Append the movieDiv to the movie-container
        const movieContainer = document.querySelector('.other-movies');
        movieContainer.appendChild(movieDiv);

        // Attach a click event listener to the movieDiv to get movie details
        movieDiv.addEventListener('click', () => {
          getMovieDetails(element.id);
        });
      });
    });
}

function getMovieDetails(movieId) {
  // Fetch movie details for a specific movieId
  fetch(`http://localhost:3000/films/${movieId}`)
    .then(resp => resp.json())
    .then((data) => {
      const title = data.title;
      const runtime = data.runtime;
      const capacity = data.capacity;
      const showtime = data.showtime;
      const ticketsSold = data.tickets_sold;
      const description = data.description;
      const poster = data.poster;

      // Update the movie details on the page
      updateMovieDetails(title, runtime, capacity, showtime, ticketsSold, description, poster);
    });
}

function updateMovieDetails(title, runtime, capacity, showtime, ticketsSold, description, poster) {
  // Get DOM elements to update with movie details
  const movieTitle = document.querySelector('.movie-description p:nth-child(1)');
  const movieRuntime = document.querySelector('.movie-description p:nth-child(2)');
  const movieCapacity = document.querySelector('.movie-description p:nth-child(3)');
  const movieShowtime = document.querySelector('.movie-description p:nth-child(4)');
  const ticketsSoldElement = document.getElementById('tickets-sold');
  const movieDescription = document.querySelector('.movie-description p:nth-child(6)');
  const submitButton = document.getElementById('submit-ticket');
  const ticketResponse = document.getElementById('ticket-response');
  const moviePoster = document.getElementById('selected-movie-img')
  const ticketsPurchasedInput = document.getElementById('tickets-purchased');

  // Update the movie details in the DOM
  movieTitle.textContent = `Title: ${title}`;
  movieRuntime.textContent = `Runtime: ${runtime}`;
  movieCapacity.textContent = `Capacity: ${capacity}`;
  movieShowtime.textContent = `Showtime: ${showtime}`;
  ticketsSoldElement.textContent = `Tickets Sold: ${ticketsSold}`;
  movieDescription.textContent = `Description: ${description}`;
  moviePoster.setAttribute('src', poster);
  moviePoster.setAttribute('alt', description);

  // Check if tickets are sold out
  submitButton.addEventListener('click', () => {
    const ticketsPurchased = parseInt(ticketsPurchasedInput.value);
    
    if (ticketsSold + ticketsPurchased > capacity) {
      ticketResponse.textContent = 'Sold out!';
    } else {
      const remainingTickets = capacity - (ticketsSold + ticketsPurchased)
      ticketResponse.textContent = `${remainingTickets} tickets remaining`
    
      // Update ticketsSold value
      ticketsSold += ticketsPurchased;
      ticketsSoldElement.textContent = `Tickets Sold: ${ticketsSold}`;
    }
  });
}