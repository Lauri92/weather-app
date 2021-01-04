import './App.css';
import Component from './components/WeatherCard/component';
import WeatherCard from './components/WeatherCard/component';

function App() {
  return (
      <div className="App">
        <WeatherCard temp={-5} condition={'Clear'} city={'Sydney'} country={'AU'}/>
        <WeatherCard temp={15} condition={'Clouds'} city={'Melbourne'} country={'AU'}/>
        <WeatherCard temp={35} condition={'Dust'} city={'London'} country={'GB'}/>
      </div>
  );
}

export default App;
