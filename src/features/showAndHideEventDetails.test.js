import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';


const feature = loadFeature('./src/features/showAndHideEventDetails.feature');

defineFeature(feature, test => {
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

  test('By default, when an event element loads, the event details are collapsed', ({ given, when, then }) => {
    given('an event has loaded', () => {
      EventWrapper = shallow(<Event event={event} />);
    });
    when('the user does not take any action', () => {
    });
    then('the event details should be collapsed', () => {
      expect(EventWrapper.find('.event-collapsed')).toHaveLength(1);
    });
  });

  test('A user can expand an event item to see its details', ({ given, when, then }) => {
    given('an event element is collapsed', () => {
      EventWrapper = shallow(<Event event={event} />);
      expect(EventWrapper.find('.event-collapsed')).toHaveLength(1);
    });
    when('a user clicks the expand button', () => {
      EventWrapper.find('.expand-button').simulate('click');
    });
    then('then the event details should expand', () => {
      expect(EventWrapper.find('.event-expanded')).toHaveLength(1);
    });
  });

  test('A user can collapse an event to hide its details', ({ given, when, then }) => {
    given('an event element is expanded', () => {
      EventWrapper = shallow(<Event event={event} />);
      EventWrapper.setState({ expanded: true });
      expect(EventWrapper.find('.event-expanded')).toHaveLength(1);
    });
    when('a user clicks the collapse button', () => {
      EventWrapper.find('.collapse-button').simulate('click');
    });
    then('the event details should collapse', () => {
      expect(EventWrapper.find('.event-collapsed')).toHaveLength(1);
    });
  });
});