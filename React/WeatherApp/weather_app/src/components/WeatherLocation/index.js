import React, { Component } from "react";
import transformWeather from "../../services/TransformWeather";
import { api_weather } from "../../constants/api_url";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import { SUN } from "../../constants/Weathers";

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Culiacan",
      data: null
    };
    console.log("constructor");
  }

  componentDidMount = () => {
    console.log("componentDidMount");
    this.handleUpdateClick();
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate");
  };

  handleUpdateClick = () => {
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        console.log("handleUpdateClick");

        const newWeather = transformWeather(data);
        console.log(newWeather);

        this.setState({
          data: newWeather
        });
      });
  };

  render() {
    console.log("render");
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? 
          <WeatherData data={data} /> :
          "Loading..."
        }
      </div>
    );
  }
}

export default WeatherLocation;
