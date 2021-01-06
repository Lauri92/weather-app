import './App.css';
import {useState, useEffect} from 'react';

import WeatherEngine from './components/WeatherEngine'

function App() {
  return (
      <div className="App">
        <WeatherEngine location={'Helsinki, FI'}/>
      </div>
  );
}

export default App;
