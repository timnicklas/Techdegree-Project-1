// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

// the quotes array has quote objects with quote, source, citation, mediaType, and date (when available)
var quotes = [
  {
    quote: 'Pride is not the opposite of shame, but its source.',
    source: 'Iroh',
    citation: 'Avatar: The Last Airbender, Episode 2.09',
    mediaType: 'TV Show',
    date: '',
  },
  {
    quote: 'While it is always best to believe in oneself, a little help from others can be a great blessing',
    source: 'Iroh',
    citation: 'Avatar: The Last Airbender, Episode 2.15',
    mediaType: 'TV Show',
    date: '',
  },
  {
    quote: 'The fear of embarrassment has robbed the world of a lot of genius.',
    source: 'Jedidiah Jenkins',
    citation: '@jedidiahjenkins',
    mediaType: 'Instagram',
    date: '7.1.2018',
  },
  {
    quote: 'We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better.',
    source: 'J.K Rowling',
    citation: 'Very Good Lives: The Fringe Benefits of Failure and the Importance of Imagination',
    mediaType: 'Book',
    date: '4.14.2015',
  },
  {
    quote: 'Today you are you, that is truer than true. There is no one alive who is youer than you.',
    source: 'Dr. Seuss',
    citation: 'Happy Birthday to You!',
    mediaType: 'Book',
    date: '8.12.1959',
  },
  {
    quote: 'Baby, you\'re a firework',
    source: 'Katy Perry',
    citation: 'Firework',
    mediaType: 'Song',
    date: '10.26.2010',
  },
  {
    quote: 'You can\'t make decisions based on fear and the possibility of what might happen.',
    source: 'Michelle Obama',
    citation: '',
    mediaType: '',
    date: '2013',
  },
  {
    quote: 'And now that you don\'t have to be perfect, you can be good.',
    source: 'John Steinbeck',
    citation: 'East of Eden',
    mediaType: 'Book',
    date: '9.19.1952',
  }
]

// Array of colors. Chose these colors, becuase they good as a background when they're overlayed with white text.

var colors = ['red','blue','green','black','mustard','DeepPink','Indigo','gray', "#36b55c"]

// Create the getRandomQuote function and name it getRandomQuote

function getRandomQuote(arr) {
// Generate a random number from one to length of array (switched to length, so I could use the same function for getting a random color from the color array)
return (arr[Math.floor( Math.random() * arr.length )]);
}

// this setInterval(method) will change the quote every 10 seconds (found on MDN https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
var timer = setInterval(printQuote, 10000);

// Create the printQuote funtion and name it printQuote
function printQuote() {
// The storedQuote variable stores the randomely selected quote in a function, so the same randomly selected quote can be used throughout the function
  var storedQuote = getRandomQuote(quotes);
// The printedQuote prepares the storedQuote to be printed to the page in the correct format when called
  var printedQuote = '<p class="quote">' + storedQuote.quote + '</p>' + '<p class="source">' + storedQuote.source;
// If the citation is included, this if statement will include it to the quote. If not, it will move on to the next if statement
  if (storedQuote.citation !== ''){
    printedQuote += '<span class="citation">' + storedQuote.citation + '</span>';
  }
// If the mediaType is included, this if statement will include it to the quote. If not, it will move on to the next if statement
  if (storedQuote.mediaType !== ''){
    printedQuote += '<span class="citation">' + storedQuote.mediaType + '</span>';
  }
  // If the date is included, this if statement will include it to the quote. If not, it will close the <p> tag, so the quote shows on the page when called
  if (storedQuote.date === ''){
    printedQuote += '</p>';
  } else {
    printedQuote += '<span class="year">' + storedQuote.date + '</span>' + '</p>';
  }

// The pickedColor variable uses the same getRandomQuote function we used for quotes (did not change the name becuase it needs to stay getRandomQuote for grading rubric) to grab a random color for the background
  var pickedColor = getRandomQuote(colors);

// this variable tells the browser to put the printedQuote on the page
  var quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = printedQuote;

  //This tells the browser to switch the background to the randomly selected color (pickedColor) found here - https://www.w3schools.com/jsref/prop_style_background.asp
  document.body.style.backgroundColor = pickedColor;

  //  This tells the browser to switch the button color background to the randomly selected color (pickedColor)...also found here - https://www.w3schools.com/jsref/prop_style_background.asp
  document.getElementById("loadQuote").style.background = pickedColor;
}

// This tells the browser to run the functions
printQuote(getRandomQuote);




// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
