document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("user-input");

    inputElement.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const userInput = inputElement.value.trim();

            if (userInput === "1") {
                window.location.href = "about.html";
            } else if (userInput === "cd 1") {
                window.location.href = "about.html";
            } else if (userInput === "cd 2") {
                window.location.href = "projects.html";
            } else if (userInput === "cd 2.1") {
                window.location.href = "project1.html";
            } else if (userInput === "cd 2.2") {
                window.location.href = "project2.html";
            } else if (userInput === "cd 2.3") {
                window.location.href = "project3.html";
            } else if (userInput === "cd 2.4") {
                window.location.href = "project4.html";
            } else if (userInput === "cd 2.5") {
                window.location.href = "project5.html";
            } else if (userInput === "cd 2.6") {
                window.location.href = "project6.html";
            } else if (userInput === "cd 3") {
                window.location.href = "skills.html";
            } else if (userInput === "cd 4") {
                window.location.href = "goals.html";
            } else if (userInput === "cd 5") {
                window.location.href = "contact.html";
            } else if (userInput === "2") {
                window.location.href = "projects.html";
            } else if (userInput === "2.1") {
                window.location.href = "project1.html";
            } else if (userInput === "2.2") {
                window.location.href = "project2.html";
            } else if (userInput === "2.3") {
                window.location.href = "project3.html";
            } else if (userInput === "2.4") {
                window.location.href = "project4.html";
            } else if (userInput === "2.5") {
                window.location.href = "project5.html";
            } else if (userInput === "2.6") {
                window.location.href = "project6.html";
            } else if (userInput === "3") {
                window.location.href = "skills.html";
            } else if (userInput === "4") {
                window.location.href = "goals.html";
            } else if (userInput === "5") {
                window.location.href = "contact.html";
            } else if (userInput === "cd .." || userInput == "cd ~") {
                window.location.href = "projects.html"; 
            } else if (userInput === "CD ..") {
                window.location.href = "projects.html";
            } else if (userInput === "cD ..") {
                window.location.href = "projects.html";
            } else {
                alert("Please enter a number listed above: " + userInput); 
            }

            inputElement.value = "";
        }
    });
});
