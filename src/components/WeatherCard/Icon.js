import React from 'react';
import styled from '@emotion/styled';
import reactImg from '../../img/logo192.png';
import mostlyCloudy from '../../img/mostly-cloudy.png';
import mostlySunny from '../../img/mostly-sunny.png';
import drizzle from '../../img/drizzle.png';
import dusty from '../../img/dust.png';
import foggy from '../../img/fog.png';
import haily from '../../img/hail.png';
import hazy from '../../img/haze.png';
import misty from '../../img/mist.png';
import rainy from '../../img/rain.png';
import snowy from '../../img/snow.png';
import thunderstorm from '../../img/thunderstorm.png';
import tornado from '../../img/tornado.png';

const Icon = ({condition}) => {

  const Icon = styled.img`
    width: 40%;
  `;

  let icon = '';
  switch (condition) {
    case 'Clouds':
      icon = mostlyCloudy;
      break;
    case 'Clear':
      icon = mostlySunny;
      break;
    case 'Haze':
      icon = hazy;
      break;
    case 'Hail':
      icon = haily;
      break;
    case 'Fog':
      icon = foggy;
      break;
    case 'Tornado':
      icon = tornado;
      break;
    case 'Dust':
      icon = dusty;
      break;
    case 'Mist':
      icon = misty;
      break;
    case 'Snow':
      icon = snowy;
      break;
    case 'Rain':
      icon = rainy;
      break;
    case 'Drizzle':
      icon = drizzle;
      break;
    case 'Thunderstorm':
      icon = thunderstorm;
      break;
    default:
      icon = foggy;
      break;
  }
  ;

  return (
      <Icon src={icon} alt="Weather-img"/>
  );
};

export default Icon;
