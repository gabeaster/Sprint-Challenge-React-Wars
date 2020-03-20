import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import StarCard from './components/StarCard';

const App = () => {
  const [cards, setCards] = useState([]);
  const [species, setSpecies] =useState([])

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then (response => {
        console.log(response.data.results);
        setCards(response.data.results);
      })
      .catch(error => {
        console.log(`we have a people error`,error);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars VIPs</h1>
      {cards.map((starData, index) => {
        console.log(starData);
        return (
          <StarCard className="starCard"
            key={index}
            name={starData.name}
            birthYear={starData.birth_year}
          />
        )
      })}
    </div>
  );
}

export default App;