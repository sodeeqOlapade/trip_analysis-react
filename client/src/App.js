import React from 'react';
import Header from './components/header/header';
import './App.css';

fetch('/api/trips')
  .then(data => {
    return data.json();
  })
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

function App() {
  return <Header />;
}

export default App;
