import './App.css';
import { useState } from 'react';
const apiKey = `beb0b19afb95c7c29f3a66e9e62e70af`;

function App() {
  const [city, setCity] = useState('')
  const [result, setResult] = useState('')

  function submitHandler(e){
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(response => response.json()).then(data => {
      const kelvin = data.main.temp;
      const celsius = kelvin - 273.15
      setResult('Temperature at '+ city + '\n' + Math.round(celsius) + '°C')
      setCity('')
    }).catch(err => setResult('City not found or an error occurred. Please try again.'));

  }
  return (
    <center>
      <div className='card' style={{width:'25rem'}}>
        <div card-body>
        <h1 card-title>Weather App</h1>
        <form onSubmit={submitHandler}>
          <input name='city' required type='text' placeholder='Enter your city...' value={city} onChange={(e) => {setCity(e.target.value)}} />
          <input type='submit' value='Get Temperature' required />
        </form>
        <h3>{result}</h3>
        </div>
      </div>
    </center>
  );
}
export default App;