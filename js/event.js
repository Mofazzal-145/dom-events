
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


// handle event using anonymous function-----fourth way

const greenButton = document.getElementById('green-button');
// greenButton.onclick = function makeGreen() {

// anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}


// handle event using eventlistener  ---fifth

const goldenRod = document.getElementById('golden-rod');
goldenRod.addEventListener('click', makeGoldenRoad);

function makeGoldenRoad() {
    document.body.style.backgroundColor = 'goldenrod';
}


// add event listener       ---sixth
const hotPink = document.getElementById('hot-pink');
console.log(hotPink);
hotPink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})


// add event listener ---seven

document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})
