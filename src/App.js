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
  }

  updateEvents = (lat, lon, page) => {
    getEvents(lat, lon, page).then(events => this.setState({ events }));
  }

  updateCount = (count) => {
    this.setState({ eventCount: count });
  }

  componentDidMount() {
    this.updateEvents();
  }

  render() {
    return (
      <div className="App">
        <CitySearch className="CitySearch" updateEvents={this.updateEvents} />
        <NumberOfEvents className="NumberOfEvents" updateCount={this.updateCount} />
        <EventList className="EventList" events={this.state.events} />
      </div>
    );
  }
}

export default App;