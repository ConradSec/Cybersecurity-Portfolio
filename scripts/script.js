document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("user-input");

    inputElement.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const userInput = inputElement.value.trim();

            if (userInput === "1") {
                window.location.href = "about.html";  // Go to About Me
            } else if (userInput === "2") {
                window.location.href = "projects.html";  // Go to Projects
            } else if (userInput === "2.1") {
                window.location.href = "project1.html";  // go to project 1
            } else if (userInput === "2.2") {
                window.location.href = "project2.html"; // go to project 2
            } else if (userInput === "2.3") {
                window.location.href = "project3.html"; // go to project 3
            } else if (userInput === "2.4") {
                window.location.href = "project4.html"; // go to project 4
            } else if (userInput === "2.5") {
                window.location.href = "project5.html";
            } else if (userInput === "2.6") {
                window.location.href = "project6.html";
            } else if (userInput === "3") {
                window.location.href = "skills.html";  // Go to Skills
            } else if (userInput === "4") {
                window.location.href = "goals.html";  // Go to Goals
            } else if (userInput === "5") {
                window.location.href = "contact.html";  // Go to Contact Info
            } else if (userInput === "cd .." || userInput == "cd ~") {
                window.location.href = "index.html";  //go back to the homepage
            } else {
                alert("Please enter a number listed above: " + userInput);
            }

            inputElement.value = "";
        }
    });
});
