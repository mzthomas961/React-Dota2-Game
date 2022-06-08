import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import HeroesDisplay from './HeroesDisplay';

function App() {
  const [heroes, setHeroes] = useState([])
console.log(heroes)
 //setting all heroes into an array
useEffect(() => fetch("https://api.opendota.com/api/heroStats").then(r => r.json()).then(data => setHeroes(data)))

  return (
    <div className="App">
      <HeroesDisplay/>
    </div>
  );
}

export default App;
