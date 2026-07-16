function Card({ pokemon, onClick }) {
  return (
    <article
      className="card"
      onClick={() => onClick(pokemon.id)}
    >
      <img src={pokemon.image} alt={pokemon.name} />

      <h3>{pokemon.name}</h3>
    </article>
  );
}

export default Card;