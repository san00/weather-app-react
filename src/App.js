import React from 'react';
import './App.scss';
import Weather from './components/Weather';


function App() {
  return (
    <main role="main">
      <h1 className="header">Whats the weather like?</h1>
      <Weather />
      <footer className="footer">
        <p>Made by<a className="footer__text" href="https://github.com/san00">sancodes</a></p>
      </footer>
    </main>
  )
}

export default App;
