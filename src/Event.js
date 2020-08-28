import React, { Component } from 'react';
import './App.css';

class Event extends Component {
  state = {
    event: {},
    expanded: false
  }

  handleExpandClick = () => {
    this.setState({ expanded: true })
  };

  handleCollapseClick = () => {
    this.setState({ expanded: false })
  };

  render() {
    const { event } = this.props;
    if (this.state.expanded === false) return (
      <div className="event-collapsed">
        <h1 className="event-name">{event.name}</h1>
        <button className="expand-button" onClick={this.handleExpandClick}>Expand</button>
      </div>
    );
    if (this.state.expanded === true) return (
      <div className="event-expanded">
        <h1 className="event-name">{event.name}</h1>
        <p className="event-date">{event.local_date}</p>
        <p className="event-time">{event.local_time}</p>
        <p className="event-address">{event.venue.address_1}</p>
        <p className="event-city-state">{event.group.localized_location}</p>
        <p className="event-link">{event.link}</p>
        <button className="collapse-button" onClick={this.handleCollapseClick}>Collapse</button>
      </div>
    )
  }
}

export default Event;