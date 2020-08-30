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
});

describe('integration testing', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('change state when input changes', () => {
    NumberOfEventsWrapper.find('.event-count-input').simulate('change', { target: { value: 10 } });
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(10);
  });
})


