import React from "react";

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div>
    <span>{`${humidity}% h | `}</span>
    <span>{`${wind} m/s w`}</span>
  </div>
);

export default WeatherExtraInfo;
