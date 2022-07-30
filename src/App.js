import React, { Component } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';
import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import './nprogress.css';
import { WarningAlert } from './Alert';

class App extends Component {
  // componentDidMount
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    if (!navigator.onLine) {
      this.setState({
        warningText: "Your're offline! The data was loaded from the cache."
      });
    } else {
      this.setState({
        warningText: ''
      });
    }
  }

  //componentWillUnmount
  componentWillUnmount() {
    this.mounted = false;
  }

  // update events
  updateEvents = (location, eventCount) => {
    if (location === undefined) {
      location = this.state.seletedLocation;
    }
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    }
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);

      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        seletedLocation: location
      });
    });
  };

  //states
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    seletedLocation: 'all',
    warningText: ''
  };

  render() {
    return (
      <div className="App">
        <WarningAlert text={this.state.warningText}></WarningAlert>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
