import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import HeroesDisplay from './HeroesDisplay';

function App() {
 //setting all heroes into an array
 const [heroes, setHeroes] = useState([])
useEffect(() => {
  fetch("https://api.opendota.com/api/heroStats")
  .then(r => r.json())
  .then(data => setHeroes(data))
},[]
)

console.log(heroes)




  return (
    <div className="App">
      <HeroesDisplay heroes = {heroes}/>
    </div>
  );
}

export default App;
