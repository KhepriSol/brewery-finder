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

createSubmit.addEventListener("click", function () {
    let firstName = createInput.value;
    
    if (firstName === '') {
        //if they did not enter anything, they will get a pop up on the screen saying they forgot to enter, and will have the opportunity again
        alert("You forgot to enter your name!");
        //if they did enter something, it will start to record their initials and their score, or how much time is left
    } else {
        let finalScore = {
            firstName: firstName,
        }
        //this is me checking to make sure final score is being collected
        //stores that score to local storage
        let users = localStorage.getItem("users");
        if (users === null) {
            users = [];
        } else {
            users = JSON.parse(users);
        }
        users.push(users);
        let favBeers = JSON.stringify(users);
        localStorage.setItem("users", favBeers);
    }
});
