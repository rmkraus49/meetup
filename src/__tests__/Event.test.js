import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('Event component - collapsed', () => {
  let EventWrapper;
  const event = {
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
    "description": "Workshop PAY ATTENTION!",
    "visibility": "public",
    "member_pay_fee": false
  };

  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  beforeEach(() => {
    EventWrapper.setState({ expanded: false });
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
  const event = {
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
    "description": "Workshop PAY ATTENTION!",
    "visibility": "public",
    "member_pay_fee": false
  };

  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
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