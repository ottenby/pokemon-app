import axios from "axios";

// Base URL of the PokeAPI
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// Function to fetch data for a specific Pokemon by ID
export const getPokemonById = async (
  id: number
): Promise<PokemonDetailsType | null> => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${id}`);

    return {
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      moves: response.data.moves.map((move: any) => move.move.name),
      stats: response.data.stats.map((stat: any) => {
        return {
          baseStat: stat.base_stat,
          effort: stat.effort,
          stat: stat.stat.name,
        };
      }),
      types: response.data.types.map((type: any) => {
        return {
          slot: type.slot,
          type: type.type.name,
        };
      }),
      image: response.data.sprites.other.dream_world.front_default,
    };
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
        generation: pokemon.data.generation,
      };
    });

    return translatedPokemons;
  } catch (error) {
    console.error("Error fetching Generation 1 Pokemon data:", error);
    return [];
  }
};
