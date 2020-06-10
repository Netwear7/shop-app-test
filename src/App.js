import React from 'react';
import Section from './Components/Section/Section';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header p-3">
        <p className="Bold">Shop app test</p>
        <button className="btn btn-white ml-auto " >Panier</button>
      </header>
      <Section />
    </div>
  );
}

export default App;
