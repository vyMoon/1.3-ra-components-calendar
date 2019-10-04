import React from 'react';

import './App.css';
import Calendar from './Calendar.js';

function App() {
  return (
    <Calendar date={new Date()} />
  );
}

export default App;