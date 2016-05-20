(function(){
	var weather = {
		latitude: 0,
		longitude: 0,
		responseObj: '',
		imgURL: "http://openweathermap.org/img/w/",

		init: function(){
			//open the spinner , fade the bg
			weather.openModal();

			if(navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(function(position){
						//get the user's location
						weather.latitude = position.coords.latitude,
						weather.longitude = position.coords.longitude;

					var xhrObject = new XMLHttpRequest(),
						URL = "http://api.openweathermap.org/data/2.5/weather?q=San%20Jose,us&units=imperial&appid=c5c6bb70be286751dec0f8620564fefe&lat="+weather.latitude+"&long="+weather.longitude;

						//imgURL = "http://openweathermap.org/img/w/";

					//reponse handling function : that will receive the data sent from the server
					xhrObject.onreadystatechange = function() {
					  if (xhrObject.readyState === 4) {
					    if (xhrObject.status === 200 || xhrObject.status === 304) {
					      weather.closeModal();

					      weather.responseObj = JSON.parse(xhrObject.responseText);
					      weather.setWeather();
					    }
					  }
					};

					//send the request : specify the URL
					xhrObject.open(
					  "GET",
					  URL,
					  true
					);
					//send off the request
					xhrObject.send();
				}) //getCurrentPosition()
			}//if geolocation
			else {
				document.body.innerHTML = "Sorry, your browser does not support geolocation"
			}
		},//init method
	setWeather: function(){
		var obj = weather.responseObj,
			tempEl = document.getElementById("temp"),
			descEl = document.getElementById("desc"),
			imgEl = document.getElementById("img"),
			//store the temp data(from the response) as an object
			tempObj = {
				fahrenheit: (obj.main.temp).toFixed(0) + " " +"&#8457;",
				centigrade: ((obj.main.temp - 32) * 5/9).toFixed(0) + " " +"&#8451;"
			};

		//get the HTML elements and set the values from the JSON object
		descEl.innerHTML = obj.weather[0].description;
		tempEl.innerHTML = tempObj.fahrenheit;
		imgEl.src = weather.imgURL+obj.weather[0].icon+".png";

		var tempF = (obj.main.temp).toFixed(0);


		//rain,cloudy,sunny,snowy,hazy weather conditions : load different bg images
		//reference : http://openweathermap.org/weather-conditions
		weather.loadBgImages(obj);

		document.getElementById("temp").onclick = function() {
			//grab the data attribute that holds the temp. unit
			var data_temp = tempEl.getAttribute("data-temp");

			if(data_temp == "fahrenheit") {
				tempEl.innerHTML = tempObj.centigrade;
				tempEl.setAttribute('data-temp','centigrade');
			} else {
				tempEl.innerHTML = tempObj.fahrenheit;
				tempEl.setAttribute('data-temp','fahrenheit');
			}
		}
	},//setWeather()
	loadBgImages: function(obj) {
		var weatherId = obj.weather[0].id;

		if(weatherId >=701 && weatherId <=781) {
			document.body.style.backgroundImage = "url('images/weatherApp/hazy.jpg')";
		} else if(weatherId === 800) {
			document.body.style.backgroundImage = "url('images/weatherApp/clearsky.jpg')";
		} else if(weatherId >=801 && weatherId <=804) {
			document.body.style.backgroundImage = "url('images/weatherApp/cloudy.jpg')";
		}
		else if(weatherId >=900 && weatherId <=906) {
			document.body.style.backgroundImage = "url('images/weatherApp/tornado.jpg')";
		}
		else if(weatherId >=500 && weatherId <=504) {
			document.body.style.backgroundImage = "url('images/weatherApp/rain.jpg')";
		}
	},
	openModal: function() {
		document.getElementById("modal").style.display = 'block';
		document.getElementById("fade").style.display = 'block';
		document.getElementById("data").style.display = 'none';

	},
	closeModal: function() {
		document.getElementById("modal").style.display = 'none';
		document.getElementById("fade").style.display = 'none';
		document.getElementById("data").style.display = 'block';
	}
}//weather

weather.init();

})(); //IIFE