function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var registrationData = {
        username: username,
        password: password
    };

    localStorage.setItem("registrationData", JSON.stringify(registrationData));

    window.location.href = "login.html";
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    var registrationData = JSON.parse(localStorage.getItem("registrationData"));

    
    if (registrationData && username === registrationData.username && password === registrationData.password) {
        
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }
}