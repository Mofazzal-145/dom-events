
// second way 

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// another way to set onclick funtion-------third way
const blueButton = document.getElementById('blue-button');

// just set the name of the function
blueButton.onclick = makeBlue;


function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}