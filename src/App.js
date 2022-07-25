import React from 'react';
import './App.css';
import CitySearch from './CitySearch';
import EventList from './EventList';

function App() {
  return (
    <div className="App">
      <EventList />
      <CitySearch />
    </div>
  );
}

export default App;
