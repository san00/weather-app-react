import React from 'react';
import './App.scss';
import Weather from './components/Weather';


function App() {
  return (
      <main role="main">
        <h1 className='header'>Whats the weather like?</h1>
        <Weather/>
      </main>
  )
}

export default App;
