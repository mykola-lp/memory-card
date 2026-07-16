import Card from '../Card/Card';

function CardGrid({ pokemons, onCardClick }) {
  return (
    <section>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokemon={pokemon}
          onClick={onCardClick}
        />
      ))}
    </section>
  );
}

export default CardGrid;