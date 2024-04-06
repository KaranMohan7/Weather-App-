const apimain = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key = "94242f7646e9f90ad50b2fab4a4e9bd8";
let tempo = document.querySelector("#temp");
let cityname = document.querySelector("#cityname");
let humid = document.querySelector("#h-percent");
let wind = document.querySelector("#w-percent");
let img = document.querySelector("#imagesmain");
let btn = document.querySelector("#Search-btn");
let input = document.querySelector(".inputfield");
let imagep = document.querySelector(".imagepanel");
let err = document.querySelector(".error");

async function MainApiCall(city){
    let response = await fetch(apimain + city + `&appid=${key}`);
    let Maindata = await response.json();
    if(response.status===404){
        input.value = "";
        err.style.display = "block";
        imagep.style.display = "none";
       }else{
        err.style.display = "none";
       }
   
    tempo.innerText = Math.round(Maindata.main.temp)+"°C";
    cityname.innerText = Maindata.name;
    humid.innerText = Maindata.main.humidity+"%";
    wind.innerText = Maindata.wind.speed+"km/hr";

   if(Maindata.weather[0].main==="Clear"){
     img.src = "images/clear.png";
   }else if(Maindata.weather[0].main==="Rain"){
    img.src = "images/rain.png";
   }else if(Maindata.weather[0].main==="Mist"){
    img.src = "images/mist.png";
   }else if(Maindata.weather[0].main==="Clouds"){
    img.src = "images/clouds.png";
   }else if(Maindata.weather[0].main==="Snow"){
    img.src = "images/snow.png";
   }else if(Maindata.weather[0].main==="Haze"){
    img.style.width = "9rem"
    img.src = "images/fog.png";
   }else if(Maindata.weather[0].main==="Smoke"){
    img.src = "images/smoke.png";
   }
   imagep.style.display = "flex";

}
btn.addEventListener("click",()=>{
    
  city = input.value;
  MainApiCall(city);
  input.value = "";

});