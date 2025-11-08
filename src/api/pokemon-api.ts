import axios from "axios";

// Base URL of the PokeAPI
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// Function to fetch data for a specific Pokemon by ID
export const getPokemonById = async (id: number) => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return null;
  }
};

// Function to fetch data for all Generation 1 Pokemon
export const getAllGeneration1Pokemon = async () => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/generation/1`);
    const pokemonUrls = response.data.pokemon_species.map(
      (pokemon: any) => pokemon.url
    );
    const pokemonData = await Promise.all(
      pokemonUrls.map((url: string) => axios.get(url))
    );

    const translatedPokemons: PokemonType[] = pokemonData.map((pokemon) => {
      return {
        name: pokemon.data.name,
        id: pokemon.data.id,
        shape: pokemon.data.shape,
        color: pokemon.data.color,
        baseHappiness: pokemon.data.baseHappiness,
        captureRate: pokemon.data.captureRate,
        eggGroups: pokemon.data.eggGroups,
        evolutionChain: pokemon.data.evolutionChain,
        generation: pokemon.data.generation,
        growthRate: pokemon.data.growthRate,
      };
    });

    return translatedPokemons;
  } catch (error) {
    console.error("Error fetching Generation 1 Pokemon data:", error);
    return [];
  }
};
