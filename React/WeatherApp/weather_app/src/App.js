import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Row, Col } from "react-flexbox-grid";
import { createStore } from "redux";
import LocationList from "./components/LocationList";
import ExtendedForecast from "./components/ExtendedForecast";
import "./App.css";

const store = createStore(() => {}, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const cities = [
  "Culiacan,mx", 
  "Ourense,es", 
  "Boston,us", 
  "Bruselas,bel"
];

class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log("handleSelectedLocation");

    const action = { type: "setCity", value: city };
    store.dispatch(action);
  };

  render() {
    const { city } = this.state;

    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {!city ? (
                  <h2>No city selected</h2>
                ) : (
                  <ExtendedForecast city={city} />
                )}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
