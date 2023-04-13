function sharePost() {
    var post = document.getElementById("post").value;
    var platform = document.getElementById("platform").value;

    switch (platform) {
        case "home":
            window.open("http://127.0.0.1:5500/SM%20Concept%20and%20frontend%20design/home.html" + encodeURIComponent(post));
            break;
    }
}