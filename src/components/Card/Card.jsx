function Card({ pokemon, onClick }) {
  return (
    <article onClick={() => onClick(pokemon.id)}>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        width="180"
      />

      <h3>{pokemon.name}</h3>
    </article>
  );
}

export default Card;