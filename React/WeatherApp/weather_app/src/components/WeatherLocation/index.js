import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from "../../constants/Weathers";

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: 10
};

const data2 = {
  temperature: 5,
  weatherState: WINDY,
  humidity: 20,
  wind: 10
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Culiacan',
      data: data,
    };
  }
  
  handleUpdateClick = () => {
    console.log("updating...");
    this.setState({
      data: data2
    })
  }

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Update</button>
      </div>
    );
  }
}

export default WeatherLocation;
