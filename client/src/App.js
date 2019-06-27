import React from 'react';
import Header from './components/header/header';
import './App.css';
import Drivers from './pages/drivers/drivers';

// fetch('/api/trips')
//   .then(data => {
//     return data.json();
//   })
//   .then(resp => {
//     console.log(resp);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

function App() {
  return <Drivers />;
}

export default App;
