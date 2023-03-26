let weather={
	"apikey": "1794c4c70adb944c81852b6ea4b1859a",
	fetchWeather: function(city){
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q="+city+
			"&units=metric&appid="
			+this.apikey 
			)
		.then((response)=>response.json())
		.then((data)=>this.displayWeather(data));
	},
	displayWeather: function(data){
		const { name }=data;
		const{ icon,description}=data.weather[0];
		const{ temp,feels_like, humidity }=data.main;
		const{speed}=data.wind;
		
		console.log(name,icon,description,temp,feels_like,humidity,speed);
		document.querySelector(".city").innerText="Weather in "+ name;
		document.querySelector(".icon").src=
		"https://openweathermap.org/img/wn/"+ icon + ".png";
		document.querySelector(".temp").innerText="Temperature: "+temp+"°C";
		document.querySelector(".description").innerText=description;
		
		document.querySelector(".feels_like").innerText="Feels-like: "+feels_like;
		document.querySelector(".humidity").innerText="Humidity: " +humidity+"%";
		document.querySelector(".wind").innerText="Wind Speed: " +speed+"km/h";
	
	
	},
	search: function(){
		this.fetchWeather(document.querySelector(".search-bar").value);
	}
};
document.querySelector(".search button").addEventListener("click",function(){
	weather.search();
})