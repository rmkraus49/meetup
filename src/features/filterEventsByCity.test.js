import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
  test('By default, before a user searches for a city, show events based on their location', ({ given, when, then }) => {
    given('the user hasn\'t searched for a city', () => {

    });
    let AppWrapper;
    when('they open the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see a list of events for their city', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });
  });

  test('user should see suggestions when they start searching for a city', ({ given, when, then }) => {
    let CitySearchWrapper;
    given('the user is on the main page', () => {
      CitySearchWrapper = shallow(<CitySearch />);
    });

    when('the user starts typing to search for a city', () => {
      CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Munich' } });
    });

    then('they should receive a list of suggested cities', () => {
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    });
  });

  test('user can select a city from the suggestions list', ({ given, and, when, then }) => {
    let AppWrapper;
    given('the user was typing a city into the search box', () => {
      AppWrapper = mount(<App />);
      AppWrapper.find('.city').simulate('change', { target: { value: 'Munich' } });
    });

    and('the list of suggestions is showing', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
    });

    when('the user selects a suggested city', () => {
      AppWrapper.find('.suggestions li').at(0).simulate('click');
    });

    then('their city shoudl be changed to the selection', () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      expect(CitySearchWrapper.state('query')).toBe('Munich, Germany');
    });

    and('the user should be shown a list of events from that city', () => {
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });
  });

});