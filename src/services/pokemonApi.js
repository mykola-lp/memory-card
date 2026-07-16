const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokemons(limit = 12) {
  const response = await fetch(`${BASE_URL}?limit=${limit}`);
  const data = await response.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const details = await response.json();

      return {
        id: details.id,
        name: details.name,
        image: details.sprites.other['official-artwork'].front_default,
      };
    })
  );

  return pokemonDetails;
}