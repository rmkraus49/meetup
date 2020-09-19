import React, { Component } from 'react';
import Event from './Event';
import './App.css';
import { InfoAlert } from './Alert';

class EventList extends Component {

  render() {
    return (
      <ul className="EventList">
        {!navigator.onLine &&
          <InfoAlert text='You are currently offline. The list of events may not be up to date.' />
        }
        {this.props.events.map((event) => (
          <li className="Event" key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;