import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import EventList from '../EventList';
import NumberOfEvents from '../NumberOfEvents';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');
defineFeature(feature, test => {
  let NumberOfEventsWrapper;
  let EventListWrapper;
  let AppWrapper;
  const events = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 }, { id: 28 }, { id: 29 }, { id: 30 },];

  test('By default, show 30 events', ({ given, and, when, then }) => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    EventListWrapper = shallow(<EventList events={events} />);
    given('the events list has loaded', () => {
      expect(EventListWrapper.find('.EventList')).toHaveLength(1);
    });
    and('the number of events input has loaded', () => {
      expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
    });
    when('the user has not specified a number of events', () => {
    });
    then('30 events should be shown', () => {
      expect(EventListWrapper.find('.Event')).toHaveLength(30);
    });
  });

  test('A user can change the number of events shown', ({ given, and, when, then }) => {
    AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    given('the events list has loaded', () => {
      expect(AppWrapper.find(EventList)).toHaveLength(1);
    });
    and('the number of events input has loaded', () => {
      expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
    when('the user changes the number of events input', () => {
      AppWrapper.find('.event-count-input').simulate('change', { target: { value: 10 } });
    });
    then('the events will be updated using the input as the page number', () => {
      expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(null, null, 10);
    });
  });

});