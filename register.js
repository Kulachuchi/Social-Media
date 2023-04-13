const express = require('express');
    const { MongoClient } = require('mongodb');
    const uri = "mongodb+srv://CCO6005-01:black.D0g@cluster0.lpfnqqx.mongodb.net/blog?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect((err) => {
        if (err) throw err;

        const database = client.db("blog")
    });

    function validateRegistration(event) {
        event.preventDefault(); // Prevent form submission
    
        // Get form values
        const username = document.getElementById("reg-username").value;
        const password = document.getElementById("reg-password").value;
        const confirm_password = document.getElementById("confirm-password").value;

        // Validate form fields

        if (username === "") {
            alert("Please enter a username.");
            return false;
        }

        if (password === "") {
            alert("Please enter a password.");
            return false;
        }

        if (confirm_password === "") {
            alert("Please confirm your password.");
            return false;
        }

        if (password !== confirm_password) {
            alert("Passwords do not match. Please try again.");
            return false;
        }

        // If all fields are valid, submit the form
        if (document.forms[0].submit() !== onclick) {
            alert("Register Successful");
            window.location.href="http://127.0.0.1:5500/SM%20Concept%20and%20frontend%20design/login.html";
            const credentialsCollection = database.collection("francis-post");
            const credentials = { username: 'user1', password: 'password123'};
            credentialsCollection.insertOne(credentials, (err, result) => {
            if (err) throw err;
            console.log('${result.insertedCount} credentials saved');
            client.close();
        })
        }

        
    }
    