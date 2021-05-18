let searchButton = document.querySelector("#search-button")
let cityElement = document.querySelector(".city")
let tempElement = document.querySelector(".temp")
let humidElement = document.querySelector(".humidity")
let windElement = document.querySelector(".wind")
let searchBarElement = document.querySelector(".search-bar")
let uvElement = document.querySelector(".uv-index")
let iconElement = document.querySelector(".icon")
let header = document.querySelector("#header-style")
let tempCheck = 'fahrenheit' //setting default value of fahrenheit
let windCheck = 'mp/h' //setting default value of mp/h
let weather = { //get request and key for API
    "method": "GET",
    "headers": {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    }
}

header.addEventListener("click", () => {
    console.log("hi")
    let randomColorNumber = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor = `#${randomColorNumber}`
    header.style.color = randomColor
}
)

searchButton.addEventListener("click", () => {
    let zipCode = document.querySelector(".search-bar").value //event listener for search button which gets the value of the Zip Code entered in the search bar
    fetchWeather(zipCode) //fetch weather function grabbing Zip Code
})

function fetchWeather(zipCode) {
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${zipCode}`, weather) //string interpolates the zipcode to the end of the API URL, Key is in second parameter 
        .then(response => response.json()) //converts response to json
        .then((data) => { //converts data into the information displayed
            console.log(data)
            const name = data.location.name; //sets variable equal to location in API of Name of Town or City
            //const { location: {name}} = data
            //const { name } = data.location;
            cityElement.innerText = "Weather in " + name; //changes the text to the city that you enter the zipcode of
            const temp_f = data.current.temp_f; //sets variable equal to location in API of the current temp in the Zipcode you entered
            tempElement.innerText = temp_f + "° F"; //changes the text to the current temp in the zip code you entered
            const humidity = data.current.humidity; //sets variable equal to location in API of the current humidity in the zipcode entered
            humidElement.innerText = "Humidity: " + humidity + "%" //changes text to equal the current humidity in the zip code entered
            const wind_mph = data.current.wind_mph; //sets variabl equal to locaiton in API of the curent wind speed in MPH in the zipcode entered
            windElement.innerText = "Windspeed: " + wind_mph + " mp/h" //changes the text to the current windspeed in MPH in the zip code entered
            const uv = data.current.uv; //sets variable equal to location in API of the current UV of the zipcode entered
            uvElement.innerText = "UV Index: " + uv
            let icon = data.current.condition.icon;
            icon = "http:" + icon;
            iconElement.src = icon;
            tempElement.addEventListener("click", tempElementHandler) //event listener and if statement that changes temp from F to C, and from C to F
            function tempElementHandler() {
                if (tempCheck === 'fahrenheit') {
                    const temp_c = data.current.temp_c;
                    tempElement.innerText = temp_c + "° C"
                    tempCheck = 'celsius'
                } else {
                    tempElement.innerText = temp_f + "° F";
                    tempCheck = 'fahrenheit'
                }
            }
            windElement.addEventListener("click", windEventHandler) //event listener and if statement that changes wind from mp/h to kp/h, and from kp/h to mp/h
            function windEventHandler() {
                if (windCheck === 'mp/h') {
                    const wind_kph = data.current.wind_kph;
                    windElement.innerText = "Windspeed: " + wind_kph + " kp/h"
                    windCheck = 'kp/h'
                } else {
                    windElement.innerText = "Windspeed: " + wind_mph + " mp/h"
                    windCheck = 'mp/h'
                }
            }
        })
        .catch(error => {
            console.log(error);
        })
}
