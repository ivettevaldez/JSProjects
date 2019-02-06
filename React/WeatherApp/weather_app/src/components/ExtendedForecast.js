import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";

class ExtendedForecast extends Component {
  render() {
    const { city } = this.props;
    return <h2 className="forecast-title">Extended Forecast for {city}</h2>;
  }
}

ExtendedForecast.propTypes = {
  city: PropTypes.string.isRequired
};

export default ExtendedForecast;
