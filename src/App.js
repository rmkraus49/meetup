import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {

  state = {
    events: [{
      "created": 1594127800000,
      "duration": 14400000,
      "fee": {
        "accepts": "cash",
        "amount": 40,
        "currency": "EUR",
        "description": "",
        "label": "Price",
        "required": false
      },
      "id": "271771314",
      "name": "ImprovSTAR is proud to host Noah Levin in Munich with his workshop PAY ATTENTION",
      "rsvp_limit": 16,
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1598461200000,
      "local_date": "2020-08-26",
      "local_time": "19:00",
      "updated": 1597095762000,
      "utc_offset": 7200000,
      "waitlist_count": 2,
      "yes_rsvp_count": 16,
      "venue": {
        "id": 26760672,
        "name": "Landsberger Str. 521",
        "lat": 48.146484375,
        "lon": 11.460190773010254,
        "repinned": true,
        "address_1": "Landsberger Str. 521",
        "city": "München",
        "country": "de",
        "localized_country_name": "Germany"
      },
      "is_online_event": false,
      "group": {
        "created": 1579537687000,
        "name": "ImprovSTAR English Intermediate Improv Theater Group",
        "id": 33224143,
        "join_mode": "open",
        "lat": 48.13999938964844,
        "lon": 11.579999923706055,
        "urlname": "ImprovSTAR",
        "who": "improvisers",
        "localized_location": "München, Germany",
        "state": "",
        "country": "de",
        "region": "en_US",
        "timezone": "Europe/Berlin"
      },
      "link": "https://www.meetup.com/ImprovSTAR/events/271771314/",
      "description": "<p>Workshop PAY ATTENTION!</p> <p>Use callbacks, reincorporation, and using patterns to be brilliant. When an audience member “gets it,” it is a cathartic moment, a surprise, a relief, a laugh. Recognition of a pattern is hard-wired into our human brains and we can use it on stage. Learn techniques to make patterns and use callbacks, tickle those hard to reach right frontal lobes and delight your audiences.<br/>Minimum Level: General<br/>Max Sts: 16</p> <p>Noah Levin hails from Ketchum, Idaho, USA and grew up performing theatre in schools and summer camps until earning a degree in Theatre and Education from the University of California in San Diego. Noah taught and performed improv, theatre and stand up comedy, and received formal improv training, at the famous PIT and UCB theatres in New York. Living in Barcelona since 2011, Noah has rapidly expanded his interests performing, teaching, and organizing BIG (Barcelona Improv Festival) as well as the European improv collective Ohana. He also acts in plays, produces live comedy shows, hosts a weekly radio show (Nick and Noah Need Help), and travels around Europe teaching and performing improv.</p> <p>For more info visit",
      "visibility": "public",
      "member_pay_fee": false
    },
    ],
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