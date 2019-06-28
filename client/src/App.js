import React from 'react';
import './App.css';
import Drivers from './pages/drivers/drivers';
import Dashboard from '././pages/dashboard/dashboard';

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
  return <Dashboard />;
}

export default App;
