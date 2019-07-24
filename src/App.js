import React from 'react';
import './App.scss';
import Weather from './components/Weather';


function App() {
  return (
    <div>
      <div>
        <h1 className='header'>Whats the weather like?</h1>
        <Weather />
      </div>
    </div>
  )
}

export default App;
