import React from 'react';
import './App.css';
import Header from './clock/Header';
import FlipClock from './clock/FlipClock';

function App() {

  return (
    <div id="app">
      <Header />
      <FlipClock />
    </div>
  );
}

export default App;
