import Card from '../Card/Card';

function CardGrid({ pokemons, onCardClick }) {
  return (
    <section className="card-grid">
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