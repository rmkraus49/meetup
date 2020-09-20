import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import moment from 'moment';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    eventCount: 30,
    lat: null,
    lon: null,
  }

  getData = () => {
    const next7Days = [];
    const currentDate = moment();
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days');
      const dateString = currentDate.format('YYYY-MM-DD');
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count });
    }
    return next7Days;
  }

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
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

        <ResponsiveContainer height={300}>
          <ScatterChart
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="category" dataKey="date" name="Date" />
            <YAxis type="number" dataKey="number" name="Number of events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

        <EventList className="EventList" events={this.state.events} />
      </div>
    );
  }
}

export default App;