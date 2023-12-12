const dayURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=6f890d0a59271c9f5a3cf6919b33d215';
const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=6f890d0a59271c9f5a3cf6919b33d215';


fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {

    console.log(jsObject);

    let current = jsObject.weather[0].main;
    let temp = ((jsObject.main.temp -273.15)*1.8)+32;
    let templow = ((jsObject.main.temp_min - 273.15)*1.8)+32;
    let temphigh = ((jsObject.main.temp_max - 273.15)*1.8)+32;

    document.getElementById('current').textContent = current;
    document.getElementById('temp').textContent = temp.toFixed(0);
    document.getElementById('humid').textContent =jsObject.main.humidity;
    document.getElementById('high').textContent = temphigh.toFixed(0);
    document.getElementById('low').textContent = templow.toFixed(0);
  });


  fetch(dayURL)
  .then((response) => response.json())
  .then((weatherObject) => {

    console.log(weatherObject);

    const days = weatherObject.list.filter(x => x.dt_txt.includes('18:00:00')); 
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = 0;    

    days.forEach(x =>{

      const d = new Date(x.dt_txt);

      document.getElementById(`days${day+1}`).textContent = weekdays[d.getDay()];
      document.getElementById(`image${day+1}`).src = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
      document.getElementById(`image${day+1}`).alt = x.weather[0].description;
      document.getElementById(`temp${day+1}`).textContent =  (((x.main.temp -273.15)*1.8)+32).toFixed(0);
      
      day++;

    });

  });