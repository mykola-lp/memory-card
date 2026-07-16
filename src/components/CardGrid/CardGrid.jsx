import Card from '../Card/Card';

function CardGrid({ pokemons }) {
  return (
    <section>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </section>
  );
}

export default CardGrid;