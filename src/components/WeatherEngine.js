import React, {useState, useEffect} from 'react';

import WeatherCard from './WeatherCard/component';
import PulseLoader from 'react-spinners/PulseLoader';

const WeatherEngine = ({location}) => {

  // Initialize state variables
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

// Data fetch
  const getWeather = async (q) => {
    setQuery('');
    setLoading(true);
    try {
      const apiRes = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=${process.env.REACT_APP_OWM_API_KEY}`);
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
        <div style={{color: 'black'}}>
          There has been an error!<br/>
          <button onClick={() => setError(false)}>RESET!</button>
        </div>
    );
  }

  if (loading) {
    return (
        <div style={{
          display: 'flex',
          width: '200px',
          height: '250px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <PulseLoader size={15} color={'black'}/>
        </div>
    );
  }

  return (
      <WeatherCard
          temp={weather.temp}
          condition={weather.condition}
          city={weather.city}
          country={weather.country}
          getWeather={getWeather}
      />
  );
};

export default WeatherEngine;