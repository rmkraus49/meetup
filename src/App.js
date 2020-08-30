import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    eventCount: 30,
    lat: null,
    lon: null,
  }

  updateEvents = (lat, lon, page) => {
    console.log('starting with lat ' + lat + ' and lon ' + lon + ' and page ' + page);
    if (lat && lon) {
      console.log('updating with lat ' + lat + ' and lon ' + lon + ' and page ' + page);
      getEvents(lat, lon, this.state.eventCount).then(events => this.setState({ events, lat, lon }));
      console.log('ran with lat ' + lat + ' and lon ' + lon + ' and page ' + page);
    } else if (page) {
      console.log('updating with lat ' + lat + ' and lon ' + lon + ' and page ' + page);
      getEvents(this.state.lat, this.state.lon, page).then(events => this.setState({ events, eventCount: page }));
      console.log('ran with lat ' + lat + ' and lon ' + lon + ' and page ' + page);
    } else {
      console.log('updating with lat ' + lat + ' and lon ' + lon + ' and page ' + page);
      getEvents(this.state.lat, this.state.lon, this.state.eventCount).then(events => this.setState({ events }));
      console.log('ran with lat ' + lat + ' and lon ' + lon + ' and page ' + page);
    }
  }

  componentDidMount() {
    this.updateEvents();
  }

  render() {
    return (
      <div className="App">
        <CitySearch className="CitySearch" updateEvents={this.updateEvents} />
        <NumberOfEvents className="NumberOfEvents" updateEvents={this.updateEvents} />
        <EventList className="EventList" events={this.state.events} />
      </div>
    );
  }
}

export default App;