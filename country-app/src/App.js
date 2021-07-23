import React from 'react';
import './App.css';
// Components
import CountryCard from './components/CountryCard';
import Header from './components/Header';


function App() {

  return (
    <div className="App">
      <Header />
      <CountryCard />
    </div>
  );
}

export default App;
