// Importing the words array
import * as arr from './words.js'

// setting up the initial background color of the page
document.body.style.backgroundColor = "#000000";

// setting up the initial input field to disabled
document.getElementById("inputText").disabled = true;

// text selector
let text = document.getElementById('text');

// function to change the content
function changeContent() {
    text.innerHTML = allCaseString()
    button.innerHTML = 'reset'
    document.getElementById("inputText").focus();
    document.body.style.backgroundColor = "#000000"
    document.getElementById("inputText").disabled = false;
    document.querySelector('.inputText').style.backgroundColor = "white";
}

// input selector
let inputText = document.getElementsByClassName('inputText');

// start/reset button
let button = document.querySelector('.startButton')
button.addEventListener('click', changeContent)

// Keypress event
const input = document.querySelector('.inputText')
input.addEventListener('change', (textInput) => {
    if (text.innerHTML === textInput.target.value) {
        changeContent();
        textInput.target.value = ''
        document.body.style.backgroundColor = "#8ee388"
        text.style.color = "#000000"
    }
    else {
        textInput.target.value = ''
        document.body.style.backgroundColor = "#e44343"
        text.style.color = "#000000"
    }
});

// Function to generate random strings
function allCaseString() {
    var text = "";
    text = arr.words[Math.floor(Math.random() * arr.words.length)];
    return text;
}