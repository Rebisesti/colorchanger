/*
const colors = ["#f1f5f8", "#00ff00", "#ff0000", "#ff00ff", "#0000ff", "#ffff00"];

const btn = document.getElementById("btn");

function randomize() {
    const randomNumber = getRandomNumber();

    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
    }

    document.body.style.backgroundColor = colors[randomNumber];
    document.getElementById("currentColor").innerHTML = colors[randomNumber];
}


oriignal code before I put it into ChatGPT to see if I was screwing it up


*/

// Array of colors
const colors = ["#f1f5f8", "#00ff00", "#ff0000", "#ff00ff", "#0000ff", "#ffff00"];

// Get button element
const btn = document.getElementById("btn");

// Randomize function
function randomize() {

    // Get random number
    const randomNumber = getRandomNumber();

    // Set background color
    document.body.style.backgroundColor = colors[randomNumber];

    // Display current color
    document.getElementById("currentColor").innerHTML = colors[randomNumber];
}

// Function to generate random number
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

