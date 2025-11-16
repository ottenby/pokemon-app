import { getAllGeneration1Pokemon } from "@/api/pokemon-api";
import { PokemonListingComponent } from "../../components/PokemonListingComponent/PokemonListingComponent";

const getPokemons = async () => {
  return await getAllGeneration1Pokemon();
};

const PokemonListPage = async () => {
  const pokemonData = await getPokemons();

  return <PokemonListingComponent pokemonList={pokemonData} />;
};

export default PokemonListPage;
