import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from 'prop-types';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from '../../../constants/Weathers'
import './styles.css'

const icons = {
  cloud: CLOUD,
  cloudy: CLOUDY,
  sunny: SUN,
  rain: RAIN,
  snow: SNOW,
  windy: WINDY
};

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];
  const sizeIcon = "4x";

  if (icon) {
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
  } else {
    return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />;
  }
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">{`ºC`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
