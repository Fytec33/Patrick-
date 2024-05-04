document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var userName = document.getElementById("nameInput").value;

    // Check if the name is correct
    if (userName === "pat") {
        window.location.href = "index.html"; // Redirect to index2.html if the name is correct
    } else {
        document.getElementById("message").innerText = "hahaha, " + userName + ", madi."; // Display error message
    }
});
