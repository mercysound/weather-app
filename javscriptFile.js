var myDays = new Date;
var todays = (myDays.getDay()+1);
function displayTime(){
  var myDay = new Date;
  let today = (myDay.getDay()+1)
  var sc = myDay.getSeconds().toString().padStart(2, "0")
  var mn = myDay.getMinutes().toString().padStart(2, "0")
  var hr = (myDay.getHours()).toString().padStart(2, "0")
  var mnth = (myDay.getMonth()+1).toString().padStart(2, "0")
  var yr = myDay.getFullYear()
  var allDatTim = (hr + ':' + mn + ':' + sc +  "  " + mnth + '-' + yr)
  datTime.innerText = allDatTim
}
// console.log(today);
// if(today == 1){
//   dayName.innerText = "Sunday"
//   var int = setInterval(()=>{
//   datTime.innerText = allDatTim
// }, 2000)
// }
let isLoading = true
const callTimeFunc = () =>{
  if(todays == 1){
          dayName.innerText = "Sunday"
        }else if (todays == 2){
          dayName.innerText = "Monday"
        }else if (todays == 3){
          dayName.innerText = "Tuesday"
        }else if (todays == 4){
          dayName.innerText = "Wednesday"
        }else if (todays == 5){
          dayName.innerText = "Thursday"
        }else if (todays == 6){
          dayName.innerText = "Friday"
        }else if (todays == 7){
          dayName.innerText = "Saturday"
        }
        setInterval(displayTime, 100)
}
const defaultWeb = async ()=>{
  var myKey = '3a9bfbff1f72ab21718f0227e59a487d'
  var myLocation = cityName.value
  var endPoint = `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=${myKey}&units=metric`

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
      let myLati = position.coords.latitude
      let myLong = position.coords.longitude
      let currentLocEndPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${myLati}&lon=${myLong}&appid=${myKey}&units=metric`
     cityName.value = ""
  // while loading the fetch info
      if(isLoading){
        bodyBg.style.display = "none"
        isLoad.innerHTML = "is Loading....."
      }

      fetch(currentLocEndPoint)
      .then((Response)=>
         Response.json()
      )
      .then((convertedResponse)=>{
  // for notice of done loading diplay content
        isLoading = false
        bodyBg.style.display = "block"
        isLoad.innerHTML = ""
        console.log(convertedResponse);
if(convertedResponse.main.temp >= 1 && convertedResponse.main.temp <= 5){
bodyBg.style.background = `url("./asset/1 to 5.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(convertedResponse.main.temp >= 5 && convertedResponse.main.temp <= 10){
bodyBg.style.background = `url("./asset/5 to 10.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(convertedResponse.main.temp >= 10 && convertedResponse.main.temp <= 15){
bodyBg.style.background = `url("./asset/10 to 15.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(convertedResponse.main.temp >= 15 && convertedResponse.main.temp <= 20){
bodyBg.style.background = `url("./asset/15 to 20.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(convertedResponse.main.temp >= 20 && convertedResponse.main.temp <= 25){
bodyBg.style.background = `url("./asset/10 to 15.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(convertedResponse.main.temp >= 25 && convertedResponse.main.temp <= 30){
bodyBg.style.background = `url("./asset/25 to 30.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(convertedResponse.main.temp >= 30 && convertedResponse.main.temp <= 35){
bodyBg.style.background = `url("./asset/30-35.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(convertedResponse.main.temp >= 35 && convertedResponse.main.temp <= 40){
bodyBg.style.background = `url("./asset/35-40.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else{
bodyBg.style.background = `url("./asset/else pic.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}
        // first col weather detail
        tempe.innerHTML = `<h1 class="display-1">${convertedResponse.main.temp}<span>&#176;</span>C</h1>`
        locations.innerHTML = `<h1>${convertedResponse.name}, ${convertedResponse.sys.country}</h1>`
        weatherDet.innerHTML = convertedResponse.weather[0].description
        // second col weather detail
        city.innerHTML = `<span style="padding-left: 100px;">${convertedResponse.name}</span>`
        country.innerHTML = `<span style="padding-left: 70px;">${convertedResponse.sys.country}</span>`
        longitude.innerHTML = `<span style="padding-left: 50px;">${convertedResponse.coord.lon}</span>` 
        latitude.innerHTML = `<span style="padding-left: 70px;">${convertedResponse.coord.lat}</span>`
        temperature.innerHTML = `<span style="padding-left: 40px;">${convertedResponse.main.temp}<span>&#176;</span>C</span>`
        weather.innerHTML = `<span style="padding-left: 80px;">${convertedResponse.weather[0].main}</span>`
        humidity.innerHTML = `<span style="padding-left: 80px;">${convertedResponse.main.humidity}%</span>`
        wind.innerHTML = `<span style="padding-left: 100px;">${convertedResponse.wind.deg} m/s</span>` 
        pressure.innerHTML = `<span style="padding-left: 70px;">${convertedResponse.main.pressure} <span>hPa</span></span>`
        callTimeFunc()
      }
      )
      .catch((err)=>{
        console.log(err);
      })
    },
    async ()=>{

  // while loading the fetch info
      if(isLoading){
          bodyBg.style.display = "none"
          isLoad.innerHTML = "is Loading....."
        }
      // console.log(error);
    //     fetch(endPoint)
    // .then((response)=>{console.log(response)})
    let myFetch = await fetch(endPoint)
    // console.log(myFetch);
    var cvtRes = await myFetch.json()
    // .catch((err)=>{
    //     console.log(err);
    //   })  
    alert("This site has been block from access your location, therefore you will have lagos, Nigerian as your default location");
        isLoading = false
        bodyBg.style.display = "block"
        isLoad.innerHTML = ""
        if(cvtRes.main.temp >= 1 && cvtRes.main.temp <= 5){
          bodyBg.style.background = `url("./asset/1 to 5.jpeg")`
          bodyBg.style.backgroundRepeat = `no-repeat`
          bodyBg.style.backgroundSize = `100% 100%`
          }else if(cvtRes.main.temp >= 5 && cvtRes.main.temp <= 10){
          bodyBg.style.background = `url("./asset/5 to 10.jpeg")`
          bodyBg.style.backgroundRepeat = `no-repeat`
          bodyBg.style.backgroundSize = `100% 100%`
          }else if(cvtRes.main.temp >= 10 && cvtRes.main.temp <= 15){
          bodyBg.style.background = `url("./asset/10 to 15.jpeg")`
          bodyBg.style.backgroundRepeat = `no-repeat`
          bodyBg.style.backgroundSize = `100% 100%`
          }else if(cvtRes.main.temp >= 15 && cvtRes.main.temp <= 20){
          bodyBg.style.background = `url("./asset/15 to 20.jpeg")`
          bodyBg.style.backgroundRepeat = `no-repeat`
          bodyBg.style.backgroundSize = `100% 100%`
          }else if(cvtRes.main.temp >= 20 && cvtRes.main.temp <= 25){
          bodyBg.style.background = `url("./asset/10 to 15.jpeg")`
          bodyBg.style.backgroundRepeat = `no-repeat`
          bodyBg.style.backgroundSize = `100% 100%`
          }else if(cvtRes.main.temp >= 25 && cvtRes.main.temp <= 30){
          bodyBg.style.background = `url("./asset/25 to 30.jpeg")`
          bodyBg.style.backgroundRepeat = `no-repeat`
          bodyBg.style.backgroundSize = `100% 100%`
          }else if(cvtRes.main.temp >= 30 && cvtRes.main.temp <= 35){
          bodyBg.style.background = `url("./asset/30-35.jpeg")`
          bodyBg.style.backgroundRepeat = `no-repeat`
          bodyBg.style.backgroundSize = `100% 100%`
          }else if(cvtRes.main.temp >= 35 && cvtRes.main.temp <= 40){
          bodyBg.style.background = `url("./asset/35-40.jpeg")`
          bodyBg.style.backgroundRepeat = `no-repeat`
          bodyBg.style.backgroundSize = `100% 100%`
          }else{
          bodyBg.style.background = `url("./asset/else pic.jpeg")`
          bodyBg.style.backgroundRepeat = `no-repeat`
          bodyBg.style.backgroundSize = `100% 100%`
          }

        tempe.innerHTML = `<h1 class="display-1" >${cvtRes.main.temp}<span>&#176;</span>C</h1>`
        locations.innerHTML = `<h1>${cvtRes.name}, ${cvtRes.sys.country}</h1>`
        weatherDet.innerHTML = cvtRes.weather[0].description
        // second col weather detail
        city.innerHTML = `<span style="padding-left: 100px;">${cvtRes.name}</span>`
        country.innerHTML = `<span style="padding-left: 70px;">${cvtRes.sys.country}</span>`
        longitude.innerHTML = `<span style="padding-left: 50px;">${cvtRes.coord.lon}</span>` 
        latitude.innerHTML = `<span style="padding-left: 70px;">${cvtRes.coord.lat}</span>`
        temperature.innerHTML = `<span style="padding-left: 40px;">${cvtRes.main.temp}<span>&#176;</span>C</span>`
        weather.innerHTML = `<span style="padding-left: 80px;">${cvtRes.weather[0].main}</span>`
        humidity.innerHTML = `<span style="padding-left: 80px;">${cvtRes.main.humidity}%</span>`
        wind.innerHTML = `<span style="padding-left: 100px;">${cvtRes.wind.deg} m/s</span>` 
        pressure.innerHTML = `<span style="padding-left: 70px;">${cvtRes.main.pressure} <span>hPa</span></span>`
        callTimeFunc()
      //   .catch((err)=>{
      //   console.log(err);
      // })
    } )
  }else{
    alert("your browser is not support geolocation")
  }
}
async function myWeather (){
  var myKey = '3a9bfbff1f72ab21718f0227e59a487d'
  var myLocation = cityName.value
  var endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${myLocation}&appid=${myKey}&units=metric`
  cityName.value = ""
  cityName.focus()
  // while loading the fetch info
  if(isLoading){
        bodyBg.style.display = "none"
        isLoad.innerHTML = "is Loading....."
      }
  // let myFetch = await fetch(endPoint)
  // // console.log(myFetch);
  // var cvtRes = await myFetch.json()
  myFetch = fetch(endPoint)
  .then((Response) => Response.json())
  .then((cvtRes) => {

    isLoading = false
    bodyBg.style.display = "block"
    isLoad.innerHTML = ""
if(cvtRes.main.temp >= 1 && cvtRes.main.temp <= 5){
bodyBg.style.background = `url("./asset/1 to 5.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(cvtRes.main.temp >= 5 && cvtRes.main.temp <= 10){
bodyBg.style.background = `url("./asset/5 to 10.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(cvtRes.main.temp >= 10 && cvtRes.main.temp <= 15){
bodyBg.style.background = `url("./asset/10 to 15.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(cvtRes.main.temp >= 15 && cvtRes.main.temp <= 20){
bodyBg.style.background = `url("./asset/15 to 20.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(cvtRes.main.temp >= 20 && cvtRes.main.temp <= 25){
bodyBg.style.background = `url("./asset/10 to 15.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(cvtRes.main.temp >= 25 && cvtRes.main.temp <= 30){
bodyBg.style.background = `url("./asset/25 to 30.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(cvtRes.main.temp >= 30 && cvtRes.main.temp <= 35){
bodyBg.style.background = `url("./asset/30-35.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else if(cvtRes.main.temp >= 35 && cvtRes.main.temp <= 40){
bodyBg.style.background = `url("./asset/35-40.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}else{
bodyBg.style.background = `url("./asset/else pic.jpeg")`
bodyBg.style.backgroundRepeat = `no-repeat`
bodyBg.style.backgroundSize = `100% 100%`
}

tempe.innerHTML = `<h1 class="display-1" >${cvtRes.main.temp}<span>&#176;</span>C</h1>`
    locations.innerHTML = `<h1>${cvtRes.name}, ${cvtRes.sys.country}</h1>`
    weatherDet.innerHTML = cvtRes.weather[0].description
    // second col weather detail
    city.innerHTML = `<span style="padding-left: 100px;">${cvtRes.name}</span>`
    country.innerHTML = `<span style="padding-left: 70px;">${cvtRes.sys.country}</span>`
    longitude.innerHTML = `<span style="padding-left: 50px;">${cvtRes.coord.lon}</span>` 
    latitude.innerHTML = `<span style="padding-left: 70px;">${cvtRes.coord.lat}</span>`
    temperature.innerHTML = `<span style="padding-left: 40px;">${cvtRes.main.temp}<span>&#176;</span>C</span>`
    weather.innerHTML = `<span style="padding-left: 80px;">${cvtRes.weather[0].main}</span>`
    humidity.innerHTML = `<span style="padding-left: 80px;">${cvtRes.main.humidity}%</span>`
    wind.innerHTML = `<span style="padding-left: 100px;">${cvtRes.wind.deg} m/s</span>` 
    pressure.innerHTML = `<span style="padding-left: 70px;">${cvtRes.main.pressure} <span>hPa</span></span>`
    callTimeFunc()
  })
  .catch((err)=>{
        console.log(err);
        alert('city name never exist')
      })
  // for notice of done loading diplay content
}