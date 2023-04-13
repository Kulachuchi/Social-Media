 const express = require('express');
 const MongoClient = require('mongodb').MongoClient;

    const uri = "mongodb+srv://CCO6005-01:black.D0g@cluster0.lpfnqqx.mongodb.net/blog?retryWrites=true&w=majorit";
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    
    async function connect() {
        try {
            await client.connect();
            console.log("Connected to MongoDB");
        } catch (err) {
            console.log(err);
        }
    }
    connect();