import React, { useState, useEffect } from "react"; // React imports
import Button from "react-bootstrap/Button"; // Button component from Bootstrap

// Initial quote
const initialQuote = {
  quote: "Believe in yourself!",
  author: "Anonymous",
};

// Main Quote Generator component
export default function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState(initialQuote); // State for the current displayed quote
  const [quotes, setQuotes] = useState([]); // State for the list of all quotes

  useEffect(() => {
    // Fetching a set of quotes from a public source
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setQuotes(data.quotes)); // Store the quotes in state
  }, []); // Effect with empty dependency array to run once on mount

  function getNewQuote() {
    // Function to get a random quote
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length); // Get a random index
      const randomQuote = quotes[randomIndex]; // Get a random quote
      setCurrentQuote(randomQuote); // Update the current quote
    }
  }

  return (
    <div className="quote-container text-center">
      <h1>Your Motivational Quotes</h1> {/* Heading */}
      <div className="quote-box border rounded p-4 bg-light shadow-sm"> {/* Quote container */}
        <QuoteDisplay currentQuote={currentQuote} /> {/* Display the current quote */}
      </div>
      <Button
        onClick={getNewQuote} // OnClick to fetch a new quote
        variant="primary"
        className="mt-3"
      >
        New Quote {/* Button text */}
      </Button>
    </div>
  );
}

// Component to display individual quotes
const QuoteDisplay = (props) => {
  return (
    <div className="quote"> {/* Quote block */}
      <blockquote className="blockquote text-center">
        <i className="fa fa-quote-left" /> {/* Left quote icon */}
        <span className="quote-text"> {props.currentQuote.quote} </span> {/* Display quote text */}
        <i className="fa fa-quote-right" /> {/* Right quote icon */}
      </blockquote>
      <footer className="blockquote-footer"> {/* Author section */}
        - {props.currentQuote.author} {/* Display quote author */}
      </footer>
    </div>
  );
};
