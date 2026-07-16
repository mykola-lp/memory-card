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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPokemons() {
      try {
        const data = await getPokemons();

        setPokemons(shuffle(data));
      } catch {
        setError('Failed to load Pokémon.');
      } finally {
        setLoading(false);
      }
    }

    loadPokemons();
  }, []);

  function handleCardClick(id) {
    if (clickedCards.includes(id)) {
      setBestScore((current) => Math.max(current, score));
      setScore(0);
      setClickedCards([]);
      setPokemons((prev) => shuffle(prev));
      return;
    }

    const newScore = score + 1;

    if (newScore > bestScore) {
      setBestScore(newScore);
    }

    if (newScore === pokemons.length) {
      alert('🎉 You win!');

      setScore(0);
      setClickedCards([]);
      setPokemons((prev) => shuffle(prev));

      return;
    }

    setClickedCards((prev) => [...prev, id]);
    setScore((prev) => prev + 1);
    setPokemons((prev) => shuffle(prev));
  }

  if (loading) {
    return <h2>Loading Pokémon...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
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
