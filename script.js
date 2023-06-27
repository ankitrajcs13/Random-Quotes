// Fetch a random quote from the API
function getRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').textContent = data.content;
            document.getElementById('author').textContent = "- " + data.author;
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

// Event listener for the "New Quote" button
document.getElementById('new-quote').addEventListener('click', getRandomQuote);

// Initial quote when the page loads
getRandomQuote();
