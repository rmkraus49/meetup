import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {
  state = {
    events: [],
  }

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({ events }));
  }

  render() {
    return (
      <div className="App">
        <CitySearch className="CitySearch" updateEvents={this.updateEvents} />
        <NumberOfEvents />
        <EventList className="EventList" events={this.state.events} />
      </div>
    );
  }
}

export default App;