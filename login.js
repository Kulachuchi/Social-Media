const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

// Connect to MongoDB database
const url = 'mongodb://localhost:27017';
const dbName = 'blog';
const client = new MongoClient(url);
client.connect(function(err) {
  console.log("Connected successfully to MongoDB server");
});

// Define route for handling POST request from HTML form
app.post('/submit', (req, res) => {
  // Get data from form submission
  const data = req.body;

  // Insert data into MongoDB database
  const collection = client.db(blog).collection('francis-post');
  collection.insertOne(data, function(err, result) {
    if (err) throw err;
    console.log("Data inserted into MongoDB database");
    res.send('Data inserted into MongoDB database');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const username = "exampleuser";
      const password = "examplepassword";
      
      const form = document.querySelector('form');
      form.addEventListener('submit', function(event) {
          event.preventDefault();
          
          const inputUsername = document.querySelector('#username').value;
          const inputPassword = document.querySelector('#password').value;
          
          if (inputUsername !== username || inputPassword !== password) {
              alert("Wrong username or password.");
          } else {
              window.location.href="http://127.0.0.1:5500/SM%20Concept%20and%20frontend%20design/home.html";
          }
      });