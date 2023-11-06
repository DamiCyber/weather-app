const search = async () => {
   let sun = city.value
   let apiKey = 'b48ab05993c8b2eecfac3f53910d5530'
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${sun}&appid=${apiKey}`
   let response = await fetch(url)
   let all = await response.json()
   console.log(all)
   if (sun == "") {
      error.innerHTML = `</p style = "color:white;">I am not yet filled</p>`
   } else {
      error.innerHTML = ``
      let cityAll = all.name
      let temp = Math.round(all.main.temp - 273)
      let weather = all.weather[0].main
      let country = all.sys.country
      document.getElementById('displayWeather').innerHTML = `
            <img src="./img/cloud_-_Google_Drive-removebg-preview.png" />
            <div id="flex2">
                <h1 class="checkout">${cityAll}</h1>
                <h1 class="checkout">${temp}°C</h1>
                <h1 class="checkout">${country}</h1>
                <h1 class="checkout">${weather}</h1>
            </div>  
      
      `
       let sky = all.clouds.all
       let callme = all.cod
       let  lati= all.coord.lat.toFixed(0)
       let longi = all.coord.lon.toFixed(0)
       let  corn= all.sys.country
       let  feel =  Math.round(all.main.feels_like - 273)
       let  hum= all.main.humidity
       let  press= all.main.pressure
       let  see= all.main.sea_level
       let  saw= all.wind.speed
       document.getElementById('border').innerHTML = `
             <div id="flex3" class="go">
             <h1>Weather Details</h1>
             </div>  
             <div id="flex3">
             <span>Clouds:</span><h4 class="checkout">${sky}</h4>
             </div>  
             <div id="flex3">
             <span>Cod:</span><h4 class="checkout">${callme}</h4>
             </div>  
             <div id="flex3">
             <span>Lattitude:</span><h4 class="checkout">${ lati}°N</h4>
             </div>  
             <div id="flex3">
             <span>Longitude:</span><h4 class="checkout">${ longi}°E</h4>
             </div>  
             <div id="flex3">
             <span>Country:</span><h4 class="checkout">${corn}</h4>
             </div>  
             <div id="flex3">
             <span>Feels like:</span><h4 class="checkout">${feel}°C</h4>
             </div>  
             <div id="flex3">
             <span>Humidity:</span><h4 class="checkout">${hum}</h4>
             </div>  
             <div id="flex3">
             <span>Presures:</span><h4 class="checkout">${press}</h4>
             </div>  
             <div id="flex3">
             <span>Sea level:</span><h4 class="checkout">${see}</h4>
             </div>  
             <div id="flex3">
             <span>Wind speed:</span><h4 class="checkout">${saw}</h4>
             </div>  
       `
      
   }


}
