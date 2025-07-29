# Quote API

A small Express.js web API to store and serve different quotes about computers, coding, and technology.

## Project Overview

This project is a RESTful API that manages a collection of inspirational quotes from famous people in the tech industry. It provides endpoints to retrieve all quotes, get random quotes, filter quotes by author, and add new quotes to the collection.

## Features

- **Get All Quotes**: Retrieve the complete collection of quotes
- **Get Random Quote**: Get a randomly selected quote from the collection
- **Filter by Author**: Find all quotes by a specific person
- **Add New Quotes**: Add new quotes to the collection via POST requests
- **Static File Serving**: Includes a web interface for interacting with the API

## API Endpoints

### GET `/api/quotes`
Returns all quotes in the collection.

**Query Parameters:**
- `person` (optional): Filter quotes by author name

**Examples:**
- `GET /api/quotes` - Returns all quotes
- `GET /api/quotes?person=Grace Hopper` - Returns all quotes by Grace Hopper

**Response:**
```json
{
  "quotes": [
    {
      "quote": "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
      "person": "Anonymous"
    }
  ]
}
```

### GET `/api/quotes/random`
Returns a single random quote from the collection.

**Response:**
```json
{
  "quote": "Java is to JavaScript as ham is to hamster.",
  "person": "Jeremy Keith"
}
```

### POST `/api/quotes`
Adds a new quote to the collection.

**Query Parameters:**
- `quote` (required): The quote text
- `person` (required): The person who said the quote

**Example:**
```
POST /api/quotes?quote=Example quote text&person=Author Name
```

**Response:**
```json
{
  "quote": {
    "quote": "Example quote text",
    "person": "Author Name"
  }
}
```

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DzaboffCodes/quote-api.git
   cd quote-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Access the application:**
   - API: `http://localhost:4001/api/quotes`
   - Web Interface: `http://localhost:4001`

## Project Structure

```
quote-api/
├── server.js          # Main Express server file
├── data.js           # Quote data storage
├── utils.js          # Utility functions (random element selector)
├── package.json      # Project dependencies
├── public/           # Static files for web interface
│   ├── index.html    # Main web interface
│   ├── add-quote.html # Form to add new quotes
│   ├── script.js     # Frontend JavaScript
│   ├── add-quote.js  # Add quote functionality
│   └── styles.css    # Styling
└── README.md         # This file
```

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **HTML/CSS/JavaScript** - Frontend interface

## Sample Quotes

The API comes pre-loaded with quotes from notable figures in technology including:
- Grace Hopper
- Ada Lovelace
- Bill Gates
- Ellen Ullman
- And many more!

## Contributing

Feel free to fork this project and submit pull requests to add more quotes or improve functionality.

## License

This project is open source and available under the [ISC License](LICENSE).
