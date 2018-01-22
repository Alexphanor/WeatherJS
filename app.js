// Initialize storage
const storage = new Storage();

//get Stored location data
const weatherLocation = storage.getLocationData();

// Initialize wetaher object
const weather = new Weather (weatherLocation.city, weatherLocation.state);

//Init UI

const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

//Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  //change location
  weather.changeLocation(city, state);

  //set location in LS
  storage.setLocationData(city, state);

  // get and display weather
  getWeather();
  

  //close Modal
  $("#locModal").modal("hide");
});




function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}