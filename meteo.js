let weather={
	"apikey": "97b166e748d33ca752b293db287d570c",
	fetchWeather: function (city){
		fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
			+ city 
			+ "&units=metric&&appid=" 
			+ this.apikey)
			.then((response) => response
			.json()).then((data) => this.displayweather(data));
	},
	displayweather: function(data){
		const {name}=data;
		const {icon, description}=data.weather[0];
		const{temp,humidity}=data.main;
		const{speed}=data.wind;
		console.log(name,icon,description,temp,humidity,speed);
		document.querySelector(".city").innerText = "Weather in "+name;
		document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + "@2x.png";
		document.querySelector(".description").innerText=description;
		document.querySelector(".temp").innerText=temp+"°C";
		document.querySelector(".humidity").innerText="Humidité: "+humidity+"%";
		document.querySelector(".wind").innerText="Vitesse du Vent: "+speed+" km/h";
		document.querySelector(".weather").classList.remove("load");

	},
	search:function(){
		this.fetchWeather(document.querySelector(".search-bar").value);
	}
};
weather.fetchWeather("Dakar");
document.querySelector(".search button")
.addEventListener("click",function(){
	weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
if (event.key=="enter") {
	weather.search();
}
})