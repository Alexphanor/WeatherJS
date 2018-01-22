class Weather {
  constructor(city, state) {
    this.apikey = "73bcfa0594746120";
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.wunderground.com/api/${this.apikey}/conditions/q/${this.state}/${this.city}.json`)

    const responseData = await response.json();

    return responseData.current_observation;
  }

  //Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;    
  }
}