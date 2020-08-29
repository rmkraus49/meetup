import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render input box to control number of events shown', () => {
    expect(NumberOfEventsWrapper.find('.event-count-input')).toHaveLength(1);
  });

  test('check that default number of events is 30', () => {
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(30);
  });

  test('render input value correctly', () => {
    const events = NumberOfEventsWrapper.state('eventCount');
    expect(NumberOfEventsWrapper.find('.event-count-input').prop('value')).toBe(events);
  });

  test('change state when input changes', () => {
    const eventObject = { target: { value: 60 } };
    NumberOfEventsWrapper.find('.event-count-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(60);
  });

});