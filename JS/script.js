
// let weather = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=`

// fetch(weather), {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "4cc9d71f4cmshe439fe3bbdd9ceap165ef9jsn35073870fe94",
//         "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
//     }
//         .then(response => response.json())
//         .then(data => console.log(data))
// }

// document.addEventListener('DOMContentLoaded', () => {
//     alert("YOU ARE NOW ENTERING MY PHASE 1 PROJECT")
//     console.log("hi")
// })

// li.addEventListener("DOMContentLoaded", () => {
//     let randomColorNumber = Math.floor(Math.random()*16777215).toString(16);
//     let randomColor= `#${randomColorNumber}`
//     background.style.color = randomColor

let searchButton = document.querySelector("#search-button")
let zipCode = document.getElementsByClassName("search-box".innerText)
console.log(searchButton)

searchButton.addEventListener("click", (e) => {
    e.preventDefault()
    fetchWeather(weather)
})

//function 

function fetchWeather() {
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=`)
        .then(response => response.json())
        .then((data) =>
            data.message
        )
}

let weather = {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "4cc9d71f4cmshe439fe3bbdd9ceap165ef9jsn35073870fe94",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    }
}
