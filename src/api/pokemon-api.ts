import {
  FetchedCharacteristicType,
  FetchedPokemonDetailsType,
  PokemonDetailsType,
  PokemonListItemType,
} from "@/types";
import axios from "axios";

// Base URL of the PokeAPI
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// Function to fetch data for a specific Pokemon by ID
export const getPokemonById = async (
  id: number
): Promise<PokemonDetailsType | undefined> => {
  try {
    // Fetch data from the Pokemon API for the specific Pokemon ID
    const pokemonResponse = await axios.get(
      `${POKEAPI_BASE_URL}/pokemon/${id}`
    );
    const pokemonData: FetchedPokemonDetailsType = pokemonResponse.data;

    let characteristicData: FetchedCharacteristicType | undefined;
    if (id < 31) {
      // The api only has charactaristics for the first 30 pokemon for some reason.
      const characteristicResponse = await axios.get(
        `${POKEAPI_BASE_URL}/characteristic/${id}`
      );
      characteristicData = characteristicResponse.data;
    } else characteristicData = undefined;
    return {
      name: pokemonData.name,
      height: pokemonData.height,
      weight: pokemonData.weight,
      description: characteristicData
        ? characteristicData.descriptions.find(
            (description) => description.language.name === "en"
          )?.description
        : undefined,
      types: pokemonData.types.map((type) => type.type.name),
      image: pokemonData.sprites.other.dream_world.front_default,
      stats: pokemonData.stats.map((stat) => {
        return {
          baseStat: stat.base_stat,
          effort: stat.effort,
          statName: stat.stat.name,
        };
      }),
    };
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return undefined;
  }
};

// Function to fetch data for all Generation 1 Pokemon
export const getAllGeneration1Pokemon = async () => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/generation/1`);
    const pokemonUrls = response.data.pokemon_species.map(
      (pokemon: { name: string; url: string }) => pokemon.url
    );
    const pokemonData = await Promise.all(
      pokemonUrls.map((url: string) => axios.get(url))
    );

    const translatedPokemons: PokemonListItemType[] = pokemonData.map(
      (pokemon) => {
        return {
          name: pokemon.data.name,
          id: pokemon.data.id,
          order: pokemon.data.order,
        };
      }
    );

    return translatedPokemons;
  } catch (error) {
    console.error("Error fetching Generation 1 Pokemon data:", error);
    return [];
  }
};
