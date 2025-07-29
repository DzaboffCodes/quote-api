// Express & Server Set up
const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

// Routes Set up

// Get Random Quote
app.get("/api/quotes/random", (req, res, next) => {
  // Use the utils function to get random element in array to send as response
  const randomQuote = getRandomElement(quotes);
  console.log("Random Quote Selected:", randomQuote);
  res.json({ quote: randomQuote.quote, person: randomQuote.person });
});

// Get All Quotes and Quotes by Author
app.get("/api/quotes", (req, res, next) => {
  const { person } = req.query;

  if (person) {
    // Filter quotes by exact person match (case-insensitive)
    const filteredQuotes = quotes.filter(
      (quote) => quote.person.toLowerCase() === person.toLowerCase()
    );
    res.json({ quotes: filteredQuotes });
  } else {
    // Return all quotes
    res.json({ quotes: quotes });
  }
});

// Post Request to Add New Quote
app.post("/api/quotes", (req, res, next) => {
  const { person, quote } = req.query;

  if (person && quote) {
    quotes.push({
      quote: quote,
      person: person,
    });
    res.status(201).json({ quote: { quote, person } });
  } else {
    res.status(400).json({ error: "Both person and quote are required." });
  }
});
