document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("user-input");

    inputElement.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const userInput = inputElement.value.trim();

            if (userInput === "1") {
                window.location.href = "mobile-about.html";
            } else if (userInput === "cd 1") {
                window.location.href = "mobile-about.html";
            } else if (userInput === "cd 2") {
                window.location.href = "mobile-projects.html";
            } else if (userInput === "cd 2.1") {
                window.location.href = "mobile-project1.html";
            } else if (userInput === "cd 2.2") {
                window.location.href = "mobile-project2.html";
            } else if (userInput === "cd 2.3") {
                window.location.href = "mobile-project3.html";
            } else if (userInput === "cd 2.4") {
                window.location.href = "mobile-project4.html";
            } else if (userInput === "cd 2.5") {
                window.location.href = "mobile-project5.html";
            } else if (userInput === "cd 2.6") {
                window.location.href = "mobile-project6.html";
            } else if (userInput === "cd 3") {
                window.location.href = "mobile-skills.html";
            } else if (userInput === "cd 4") {
                window.location.href = "mobile-goals.html";
            } else if (userInput === "cd 5") {
                window.location.href = "mobile-contact.html";
            } else if (userInput === "2") {
                window.location.href = "mobile-projects.html"; 
            } else if (userInput === "2.1") {
                window.location.href = "mobile-project1.html";
            } else if (userInput === "2.2") {
                window.location.href = "mobile-project2.html";
            } else if (userInput === "2.3") {
                window.location.href = "mobile-project3.html";
            } else if (userInput === "2.4") {
                window.location.href = "mobile-project4.html";
            } else if (userInput === "2.5") {
                window.location.href = "mobile-project5.html";
            } else if (userInput === "2.6") {
                window.location.href = "mobile-project6.html";
            } else if (userInput === "3") {
                window.location.href = "mobile-skills.html";
            } else if (userInput === "4") {
                window.location.href = "mobile-goals.html";
            } else if (userInput === "5") {
                window.location.href = "mobile-contact.html";
            } else if (userInput === "cd ..") {
                window.location.href = "mobile-projects.html";
            } else if (userInput === "Cd ..") {
                window.location.href = "mobile-projects.html";
            } else if (userInput === "CD ..") {
                window.location.href = "mobile-projects.html";
            } else if (userInput === "cD ..") {
                window.location.href = "mobile-index.html";
            } else if (userInput === "cd") {
                window.location.href = "mobile-index.html";
            } else if (userInput === "Cd") {
                window.location.href = "mobile- index.html";
            } else {
                alert("Please enter a number listed above: " + userInput); 
            }

            inputElement.value = "";
        }
    });
});
