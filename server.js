/* global  Geo navigator APIKEY $*/
$(document).ready(function() {
	var long;
	var lat;
	var fTemp;
	var cTemp;
	var tempSwap = true;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			long = position.coords.longitude;
			lat = position.coords.latitude;
			$("#data").html("latitude: " + lat + "<br>longitude: " + long);
			$.ajax({
				method: 'GET',
				dataType: "json",
				url: "https://api.openweathermap.org/data/2.5/weather",
				data: {
					lat: lat,
					lon: long,
					appid: APIKEY
				},
				success: function(data) {
					console.log(data)
					var weatherType = data.weather[0].description;
					var kelvin = data.main.temp;
					var windSpeed = data.wind.speed;
					var city = data.name;
					fTemp = ((kelvin) * (9 / 5) - 459.67).toFixed(1);
					cTemp = (kelvin - 273).toFixed(1);
					$("#city").html(city);
					$("#weatherType").html(weatherType);
					$("#fTemp").html(fTemp + " &#x2109;");
					windSpeed = (2.237 * (windSpeed)).toFixed(1);
					$("#windSpeed").html(windSpeed + " mph");
					$("#fTemp").click(function() {
						if (tempSwap === false) {
							$("#fTemp").html(fTemp + " &#x2109;");
							tempSwap = true;
						} else {
							$("#fTemp").html(cTemp + " &#x2103;");
							tempSwap = false;
						}
					});
					if (fTemp > 80) {
						$('body').css('background-image','url(https://images.unsplash.com/photo-1474777044674-fd10bad21542?auto=format&fit=crop&w=1351&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
					} else if (fTemp > 70) {
						$('body').css('background-image','url(https://images.unsplash.com/photo-1480498073050-4c6abeee90c1?auto=format&fit=crop&w=1352&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
					} else if (fTemp > 55) {
						$('body').css('background-image','url(https://images.unsplash.com/photo-1445855743215-296f71d4b49c?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
					} else if (fTemp > 35) {
						$('body').css('background-image','url(https://images.unsplash.com/photo-1483694583352-6af4091a9498?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
					} else {
						$('body').css('background-image','url(https://images.unsplash.com/photo-1477601263568-180e2c6d046e?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
					}
				}
			});
		});
	}
})