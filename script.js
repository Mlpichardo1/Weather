if (navigator.geolocation) {
    //Return the user's longitude and latitude on page load using HTML5 geolocation API
    window.onload = function () {
    var currentPosition;
    function getCurrentLocation (position) {
        currentPosition = position;
        latitude = currentPosition.coords.latitude;
        longitude = currentPosition.coords.longitude;
        