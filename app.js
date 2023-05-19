const apiKey = "3de44aea88f84a4514c0020d4819f771";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
  
const url = (city)=> `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;


async function getWeatherByLocation(city){
     
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '963ed98983msh4527d4d2a14e6f2p1ee3f3jsnfc9e6172c94b',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url(city), options);
        const result = await response.text();
        const obj = JSON.parse(result);
        console.log(obj["current"]["temp_c"]);
        addWeatherToPage(obj);
    } catch (error) {
        console.error(error);
    }
          
     }

      function addWeatherToPage(data){
          const temp = Ktoc(data["current"]["temp_c"]);

          const weather = document.createElement('div')
          weather.classList.add('weather');

          weather.innerHTML = `
          <h2>${temp}&#8451;</h2>
          
          `;


        //   cleanup 
          main.innerHTML= "";
           main.appendChild(weather);
      };


     function Ktoc(K){
         return K;
     }



     form.addEventListener('submit',(e) =>{
        e.preventDefault();

        const city = search.value;

        if(city){
            getWeatherByLocation(city)
        }

     });

