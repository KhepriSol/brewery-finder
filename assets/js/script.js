let userNameSpan = document.querySelector("#yourName");
let userFavoriteSpan = document.querySelector("#favoriteBeer");
let submitButton = document.querySelector("#submitButton");
let msgDiv = document.querySelector("#msg");



//random beer genorator api
document.addEventListener('DOMContentLoaded', () => {
const startBtn = document.querySelector('.beer-button')
const randomBeer= document.querySelector('.random-beer')
const descriptionDisplay = document.querySelector('.description')

function getData() {
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        const name = data[0].name
        console.log(name)
        const description = data[0].description
        console.log(description)
        const {volume} = data[0]
    const volumeValue= volume.value
    const volumeUnit = volume.unit
    console.log(volumeUnit)
    console.log(volumeValue)
    
    randomBeer.innerHTML = name + ' ' + volumeValue + volumeUnit 
    descriptionDisplay.innerHTML = description
    
})

}

startBtn.addEventListener('click', getData)

const submitButton = document.querySelector("#submitButton");
const yourName = document.querySelector("#yourName");
const favoriteBeer = document.querySelector("#favoriteBeer");
const userNameSpan = document.querySelector("#userName");
const userFavoriteSpan = document.querySelector("#userFavorite");
const msgDiv = document.querySelector("#msg");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (yourName.value === "") {
    displayMessage("error", "You forgot to enter your name!");
  } else if (favoriteBeer.value === "") {
    displayMessage("error", "You forgot to enter your favorite beer!");
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("yourName", yourName.value);
    localStorage.setItem("favoriteBeer", favoriteBeer.value);
    renderLastRegistered();
  }
});

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  const yourName = localStorage.getItem("yourName");
  const favoriteBeer = localStorage.getItem("favoriteBeer");

  if (!yourName || !favoriteBeer) {
    return;
  }

  userNameSpan.textContent = yourName;
  userFavoriteSpan.textContent = favoriteBeer;
}

renderLastRegistered();
});


