const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Create Express app
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Parse JSON bodies
app.use(bodyParser.json());

// Set up routes
app.get("/api/posts", (req, res) => {
  // Fetch posts from social media APIs

  // Send response
  res.json({ posts });
});

// Set up route to handle POST requests to /api/posts
app.post("/api/posts", (req, res) => {
    // Handle POST request
  });

  
// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
