import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Scoreboard from './components/Scoreboard/Scoreboard';
import CardGrid from './components/CardGrid/CardGrid';

import { getPokemons } from './services/pokemonApi';
import { shuffle } from './utils/shuffle';

import './index.css'

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      const data = await getPokemons();

      setPokemons(shuffle(data));
    }

    loadPokemons();
  }, []);

  function handleCardClick(id) {
    if (clickedCards.includes(id)) {
      setBestScore((currentBest) => Math.max(currentBest, score));
      setScore(0);
      setClickedCards([]);
      setPokemons((prev) => shuffle(prev));
      return;
    }

    setClickedCards((prev) => [...prev, id]);
    setScore((prev) => prev + 1);
    setPokemons((prev) => shuffle(prev));
  }

  return (
    <>
      <Header />

      <Scoreboard score={score} bestScore={bestScore} />

      <CardGrid
        pokemons={pokemons}
        onCardClick={handleCardClick}
      />
    </>
  );
}

export default App;
