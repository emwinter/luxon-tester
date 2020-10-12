import React from 'react';
import { DateTime } from 'luxon';
import logo from './logo.svg';
import './App.css';
import LuxonUsage from './LuxonUsage';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <p>{DateTime.local().toString()}</p>
        <LuxonUsage />
      </header>
    </div>
  );
}

export default App;
