document.addEventListener('DOMContentLoaded', function () {
    alert('The content of the DOM is loaded');
});

const quoteContainer = document.getElementById('quoteContainer');
const quotes = require('./quotes').default; // Importing quotes from quotes.js

let visibleQuotes = 3; // Number of initially visible quotes
displayQuotes();

window.addEventListener('scroll', function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // When scrolled to the bottom, add more quotes
        visibleQuotes += 3;
        displayQuotes();
    }
});

function displayQuotes() {
    // Display quotes up to the current visibleQuotes count
    quoteContainer.innerHTML = '';
    for (let i = 0; i < visibleQuotes && i < quotes.length; i++) {
        const quote = quotes[i];
        const quoteElement = document.createElement('div');
        quoteElement.classList.add('quote');
        quoteElement.textContent = `${quote.text} - ${quote.author}`;
        quoteContainer.appendChild(quoteElement);
    }
}
