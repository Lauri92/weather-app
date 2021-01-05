import './App.css';
import {useState, useEffect} from 'react';

import WeatherEngine from './components/WeatherEngine'

function App() {
  return (
      <div className="App">
        <WeatherEngine location={'Sydney, au'}/>
        <WeatherEngine location={'taipei, tw'}/>
        <WeatherEngine location={'Espoo, FI'}/>
      </div>
  );
}

export default App;
