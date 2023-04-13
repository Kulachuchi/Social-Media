const express = require('express');
const app = express();
const mongoose = require('mongoose');

const connectionString = "mongodb+srv://CCO6005-01:black.D0g@cluster0.lpfnqqx.mongodb.net/cluster0?authMechanism=DEFAULT";

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB database");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB database: ", error);
    });

// Define your routes here

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});