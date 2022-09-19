// setting up the initial background color of the page
document.body.style.backgroundColor = "#000000";

// text selector
let text = document.getElementById('text');

// function to change the content
function changeContent() {
    text.innerHTML = allCaseString()
    button.innerHTML = 'reset'
}

// input selector
let inputText = document.getElementsByClassName('inputText');

// start button
let button = document.querySelector('.startButton')
button.addEventListener('click', changeContent)


// Keypress event
const input = document.querySelector('.inputText')
input.addEventListener('change', (textInput) => {
    console.log(textInput.target.value);
    console.log(text.innerHTML);
    if (text.innerHTML === textInput.target.value) {
        changeContent();
        textInput.target.value = ''
        document.querySelector('.inputText').style.backgroundColor = "green"
    }
    else {
        textInput.target.value = ''
        document.querySelector('.inputText').style.backgroundColor = "red"
    }
});


// Function to generate random strings
function allCaseString() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
