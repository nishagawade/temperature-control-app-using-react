import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor , setTemperatureColor] = useState("cold")

  const increament = () =>{

      if(temperatureValue === 30) return;
      const newTemp = temperatureValue + 1;
      setTemperatureValue(newTemp);

      if(temperatureValue >=15){
        setTemperatureColor("hot")
      }
  }

  const decrement = () =>{

    if(temperatureValue === 0) return
    const newTemp = temperatureValue - 1;
    setTemperatureValue(newTemp);

    if(temperatureValue < 20){
      setTemperatureColor("cold")
    }
  }
  return (
    <div className="app-container">
       <div className = "temperature-display-container">
        <div className = {`temperature-display ${temperatureColor}`}>{temperatureValue} °C</div>
       </div>

       <div className= 'button-container'>
        <button onClick={increament}>+</button>
        <button onClick={decrement}>-</button>
       </div>
    </div>
  );
}

export default App;
