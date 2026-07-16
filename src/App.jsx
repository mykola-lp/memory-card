import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Scoreboard from './components/Scoreboard/Scoreboard';
import CardGrid from './components/CardGrid/CardGrid';

import { getPokemons } from './services/pokemonApi';

import './index.css'

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      const data = await getPokemons();
      setPokemons(data);
    }

    loadPokemons();
  }, []);

  return (
    <>
      <Header />
      <Scoreboard />
      <CardGrid pokemons={pokemons} />
    </>
  );
}

export default App;
