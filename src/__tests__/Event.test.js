import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('Event component - collapsed', () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event />);
    EventWrapper.setState({
      event: {
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
      }
    })
  });

  beforeEach(() => {
    EventWrapper.setState({ expanded: false });
  });

  test('place correct event object in state', () => {
    const event = EventWrapper.state('event');
    expect(event).toEqual(
      expect.objectContaining({
        created: expect.any(Number),
        duration: expect.any(Number),
        id: expect.any(String),
        name: expect.any(String),
        date_in_series_pattern: expect.any(Boolean),
        status: expect.any(String),
        time: expect.any(Number),
        local_date: expect.any(String),
        local_time: expect.any(String),
        updated: expect.any(Number),
        utc_offset: expect.any(Number),
        waitlist_count: expect.any(Number),
        yes_rsvp_count: expect.any(Number),
        venue: expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          lat: expect.any(Number),
          lon: expect.any(Number),
          repinned: expect.any(Boolean),
          address_1: expect.any(String),
          city: expect.any(String),
          country: expect.any(String),
          localized_country_name: expect.any(String),
          zip: expect.any(String),
          state: expect.any(String)
        }),
        is_online_event: expect.any(Boolean),
        group: expect.objectContaining({
          created: expect.any(Number),
          name: expect.any(String),
          id: expect.any(Number),
          join_mode: expect.any(String),
          lat: expect.any(Number),
          lon: expect.any(Number),
          urlname: expect.any(String),
          who: expect.any(String),
          localized_location: expect.any(String),
          state: expect.any(String),
          country: expect.any(String),
          region: expect.any(String),
          timezone: expect.any(String)
        }),
        link: expect.any(String),
        description: expect.any(String),
        visibility: expect.any(String),
        member_pay_fee: expect.any(Boolean)
      })
    );
  });

  test('display collapsed event card by default', () => {
    expect(EventWrapper.find('.event-collapsed')).toHaveLength(1);
  });

  test('display event name if expand is false', () => {
    expect(EventWrapper.find('.event-name')).toHaveLength(1);
  });

  test('display expand button if expand is false', () => {
    expect(EventWrapper.find('.expand-button')).toHaveLength(1);
  });

  test('hide expanded event card by default', () => {
    expect(EventWrapper.find('.event-expanded')).toHaveLength(0);
  });

  test('change state to expanded:true on expand click', () => {
    EventWrapper.find('.expand-button').simulate('click');
    expect(EventWrapper.state('expanded')).toBe(true);
  });

  test('hide event date by default', () => {
    expect(EventWrapper.find('.event-date')).toHaveLength(0);
  });

  test('hide event time by default', () => {
    expect(EventWrapper.find('.event-time')).toHaveLength(0);
  });

  test('hide event city and state by default', () => {
    expect(EventWrapper.find('.event-city-state')).toHaveLength(0);
  });

  test('hide event address by default', () => {
    expect(EventWrapper.find('.event-address')).toHaveLength(0);
  });

  test('hide event link by default', () => {
    expect(EventWrapper.find('.event-link')).toHaveLength(0);
  });

  test('hide collapse button by default', () => {
    expect(EventWrapper.find('.collapse-button')).toHaveLength(0);
  });

});

describe('event component - expanded', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  beforeEach(() => {
    EventWrapper.setState({ expanded: true });
  });

  test('display expanded detail if expand is true', () => {
    expect(EventWrapper.find('.event-expanded')).toHaveLength(1);
  });

  test('hide collapsed event card if expand is true', () => {
    expect(EventWrapper.find('.event-collapsed')).toHaveLength(0);
  });

  test('display event name if expand is true', () => {
    expect(EventWrapper.find('.event-name')).toHaveLength(1);
  });

  test('display event date if expand is true', () => {
    expect(EventWrapper.find('.event-date')).toHaveLength(1);
  });

  test('display event time if expand is true', () => {
    expect(EventWrapper.find('.event-time')).toHaveLength(1);
  });

  test('display event city and state if expand is true', () => {
    expect(EventWrapper.find('.event-city-state')).toHaveLength(1);
  });

  test('display event address if expand is true', () => {
    expect(EventWrapper.find('.event-address')).toHaveLength(1);
  });

  test('display event link if expand is true', () => {
    expect(EventWrapper.find('.event-link')).toHaveLength(1);
  });

  test('display collapse button if expand is true', () => {
    expect(EventWrapper.find('.collapse-button')).toHaveLength(1);
  });

  test('hide expand button if expand is true', () => {
    expect(EventWrapper.find('.expand-button')).toHaveLength(0);
  });

  test('change state to expanded:false on collapse click', () => {
    EventWrapper.find('.collapse-button').simulate('click');
    expect(EventWrapper.state('expanded')).toBe(false);
  });


})