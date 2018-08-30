// init storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();

// init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// init UI
const ui = new UI();
// get weather on DOM Load

document.addEventListener('DOMContentLoaded', getWeather);

// change location 

document.getElementById('w-change-btn').addEventListener('click', (e) =>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  
  // change location 
  weather.changeLocation(city , state);

  // set Location 
  storage.setLocationData(city , state);
  
  // get and display weather
  getWeather();
  //close modal
  $('#locModal').modal('hide');
})

// get weather 
function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paintData(results);
  })
  .catch(err => console.log(err));
}
