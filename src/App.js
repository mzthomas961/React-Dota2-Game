import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import HeroesDisplay from './HeroesDisplay';
import data from "./heroes.json"


function App() {
const heroes = data.heroes

console.log(heroes)




  return (
    <div className="App">
      <HeroesDisplay heroes = {heroes}/>
    </div>
  );
}

export default App;
