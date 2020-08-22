import React, { Component } from 'react';

class Event extends Component {
  state = {
    event: {
      "created": 1200000,
      "duration": 7200000,
      "id": "267301966",
      "name": "Coffee & Career Conversations -  members  only event ",
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1600205400000,
      "local_date": "2020-09-15",
      "local_time": "17:30",
      "updated": 1576784688000,
      "utc_offset": -14400000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "venue": {
        "id": 25714547,
        "name": "MakeOffices",
        "lat": 39.953250885009766,
        "lon": -75.16804504394531,
        "repinned": true,
        "address_1": "1635 Market Street, Suite 1600",
        "city": "Philadelphia",
        "country": "us",
        "localized_country_name": "USA",
        "zip": "19103",
        "state": "pa"
      },
      "is_online_event": false,
      "group": {
        "created": 1424199087000,
        "name": "The ITEM",
        "id": 18441738,
        "join_mode": "approval",
        "lat": 39.959999084472656,
        "lon": -75.19999694824219,
        "urlname": "THEITEM",
        "who": "ITEMS",
        "localized_location": "Philadelphia, PA",
        "state": "PA",
        "country": "us",
        "region": "en_US",
        "timezone": "US/Eastern"
      },
      "link": "https://www.meetup.com/THEITEM/events/267301966/",
      "description": "<p>Coffee Provided, Bring your Questions</p> <p>Career Professionals: TBD</p> <p>Follow us on Twitter &amp; Instagram @THEITEMPHILLY and Facebook (www.facebook.com/theitemphilly)</p> ",
      "visibility": "public",
      "member_pay_fee": false
    },
    expanded: false
  }

  handleExpandClick = () => {
    this.setState({ expanded: true })
  };

  handleCollapseClick = () => {
    this.setState({ expanded: false })
  };

  render() {
    if (this.state.expanded === false) return (
      <div className="event-collapsed">
        <h1 className="event-name">{this.state.event.name}</h1>
        <button className="expand-button" onClick={this.handleExpandClick}>Expand</button>
      </div>
    );
    if (this.state.expanded === true) return (
      <div className="event-expanded">
        <h1 className="event-name">{this.state.event.name}</h1>
        <p className="event-date">{this.state.event.local_date}</p>
        <p className="event-time">{this.state.event.local_time}</p>
        <p className="event-address">{this.state.event.venue.address_1}</p>
        <p className="event-city-state">{this.state.event.group.localized_location}</p>
        <p className="event-link">{this.state.event.link}</p>
        <button className="collapse-button" onClick={this.handleCollapseClick}>Collapse</button>
      </div>
    )
  }
}

export default Event;