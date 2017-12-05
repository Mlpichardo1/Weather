/* global  Geo navigator APIKEY $*/

var geo = {};
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success,error);
}
else {
    alert('Geolocation is not supported');
}

function error() {
    alert("That's weird! We couldn't find you!");
}

function success(position) {
    Geo.lat = position.coords.latitude;
    Geo.lng = position.coords.longitude;
}

var key = APIKEY
var Weather = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}"

$.ajax({
url : Weather,
dataType : "Json",
success : function(data) {
// get all the information
var location =data['location']['city'];
var temp = data['current_observation']['temp_f'];
var img = data['current_observation']['icon_url'];
var desc = data['current_observation']['weather'];
var wind = data['current_observation']['wind_string'];
}
});