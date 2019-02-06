import React, { Component } from "react";
import LocationList from "./components/LocationList";
import "./App.css";

const cities = ["Culiacan,mx", "Sidney,aus", "Beijing,chi", "Ourense,es"];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  };

  render() {
    return (
      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    );
  }
}

export default App;
