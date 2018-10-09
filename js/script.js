// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

var quotes = [
  {
    quote: 'Life happens wherever you are, whether you make it or not',
    source: 'Iroh',
    citation: 'Avatar: The Last Airbender, Episode 2.13',
    date: '',
  },
  {
    quote: 'Pride is not the opposite of shame, but its source.',
    source: 'Iroh',
    citation: 'Avatar: The Last Airbender, Episode 2.09',
    date: '',
  },
  {
    quote: 'While it is always best to believe in oneself, a little help from others can be a great blessing',
    source: 'Iroh',
    citation: 'Avatar: The Last Airbender, Episode 2.15',
    date: '',
  },
  {
    quote: 'The fear of embarrassment has robbed the world of a lot of genius.',
    source: 'Jedidiah Jenkins',
    citation: '@jedidiahjenkins',
    date: '7.1.2018',
  },
  {
    quote: 'We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better.',
    source: 'J.K Rowling',
    citation: 'Very Good Lives: The Fringe Benefits of Failure and the Importance of Imagination',
    date: '4.14.2015',
  },
  {
    quote: 'Today you are you, that is truer than true. There is no one alive who is youer than you.',
    source: 'Dr. Seuss',
    citation: 'Happy Birthday to You!',
    date: '8.12.1959',
  }
]

// Create the getRandomQuote function and name it getRandomQuote

function getRandomQuote() {
return (quotes[Math.floor( Math.random() * 6 )]);
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
  var storedQuote = getRandomQuote(quotes);
  var printedQuote;
  printedQuote = '<p>' + quotes.quote + quotes.source + quotes.citation;
  if (quotes.date === ''){
    printedQuote += '</p>';
    return true;
  } else {
    printedQuote += quotes.date + '</p>';
    return false;
  }
}

printQuote(getRandomQuote);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
