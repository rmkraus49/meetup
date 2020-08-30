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
    if (lat && lon) {
      getEvents(lat, lon, this.state.eventCount).then(events => this.setState({ events, lat, lon }));
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events => this.setState({ events, eventCount: page }));
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.eventCount).then(events => this.setState({ events }));
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