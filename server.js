/* global  Geo navigator APIKEY $*/

$(document).ready(function() {
    var long;
    var lat;
    var fTemp;
    var cTemp;
    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      
    $("#data").html("latitude: " + lat + "<br>longitude: " + long);
      
      $.ajax({
    method: 'GET',
    dataType: "json",
    url: "https://api.openweathermap.org/data/2.5/weather",
    data: {lat:lat, lon:long, appid:APIKEY},
    success: function(data) {
        console.log(data)
      var weatherType = data.weather[0].description;
      var kelvin = data.main.temp; 
      var windSpeed = data.wind.speed;
      var city = data.name;
      
      ftemp = (kelvin)*(9/5)-459.67;
      cTemp = kelvin-273;
      
      $("#city").html(city);
      $("#weatherType").html(weatherType);
    }
});
      
  });
}

})