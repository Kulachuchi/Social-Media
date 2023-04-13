function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var xhr = new XMLHttpRequest ();
    xhr.open("POST", "login.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            window.location.href = "home.html";
        } else if (xhr.readyState === 4 && xhr.status === 401) {
            document.getElementById("error").innerHTML = "Invalid username or password.";
        }
    };
    xhr.send("username=" + username + "&password=" + password);
}