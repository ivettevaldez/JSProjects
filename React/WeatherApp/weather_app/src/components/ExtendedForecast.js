import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import transformForecast from "../services/TransformForecast";
import { url_base_forecast, api_key } from "../constants/api_url";
import "./styles.css";

class ExtendedForecast extends Component {
  constructor() {
    super();
    this.state = { forecastData: null };
  }

  componentDidMount() {
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null });
      this.updateCity(nextProps.city);
    }
  };

  updateCity = city => {
    const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;
    fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);
        this.setState({ forecastData });
      });
  };

  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      />
    ));
  }

  renderProgress = () => {
    return <h3>Loading extended forecast...</h3>;
  };

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;

    return (
      <div>
        <h2 className="forecast-title">Extended Forecast for {city}</h2>
        {forecastData
          ? this.renderForecastItemDays(forecastData)
          : this.renderProgress()}
      </div>
    );
  }
}

ExtendedForecast.propTypes = {
  city: PropTypes.string.isRequired
};

export default ExtendedForecast;
