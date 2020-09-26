import React, { Component } from 'react';
import './App.css';
import {
  PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend
} from 'recharts';

class Event extends Component {
  state = {
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
    const rsvpCount = event.yes_rsvp_count;
    const rsvpLimit = event.rsvp_limit
    const availableSlots = rsvpLimit - rsvpCount;
    const colors = ['#8884d8', '#82ca9d']

    const pieData = [
      { name: 'Attending', value: rsvpCount },
      { name: 'Available Slots', value: availableSlots },
    ];

    if (!event) {
      return <div>Asking your future friends what's happening...</div>
    }
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
        <p className="event-address">Venue: {event.venue && event.venue.address_1}</p>
        <p className="event-city-state">City: {event.group.localized_location}</p>
        <p className="event-link">{event.link}</p>
        <p className="rsvp-count">Currently Attending: {rsvpCount}</p>

        <div className="rsvp-chart-area">
          {rsvpLimit > 0 &&
            <ResponsiveContainer width={300} height={250}>
              <PieChart width={300} height={200}>
                <Pie dataKey="value" data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label >
                  {
                    pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))
                  }
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          }
        </div>

        <button className="collapse-button" onClick={this.handleCollapseClick}>Collapse</button>
      </div >
    )
  }
}

export default Event;