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


})

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
    let yourName = localStorage.getItem("yourName");
    let favoriteBeer = localStorage.getItem("favoriteBeer");
  
    if (!yourName || !favoriteBeer) {
      return;
    }
  
    userNameSpan.textContent = yourName;
    userFavoriteSpan.textContent = favoriteBeer;
}


 submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    let yourName = document.querySelector("#yourName");
    let favoriteBeer = document.querySelector("#favoriteBeer");

if (yourName === "") {
    displayMessage("error", "You forgot to enter your name!");
} else if (favoriteBeer === "") {
    displayMessage("error", "You forgot to enter your favorite beer!");
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("yourName", yourName);
    localStorage.setItem("favoriteBeer", favoriteBeer);
    renderLastRegistered();
  }
});
