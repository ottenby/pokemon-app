"use cache";

import { getAllGeneration1Pokemon, getPokemonById } from "@/api/pokemon-api";
import { PokemonDetailsComponent } from "@/components/PokemonDetailsComponent/PokemonDetailsComponent";

const getPokemonDetails = async (id: number) => {
  return await getPokemonById(id);
};

const getAllPokeon = async () => {
  return getAllGeneration1Pokemon();
};

const PokemonDetailsPage = async ({
  params,
}: {
  params: Promise<{ pokemonId: number }>;
}) => {
  const { pokemonId } = await params;
  const pokemonData = await getPokemonDetails(pokemonId);
  const allPokemons = await getAllPokeon();

  return (
    <PokemonDetailsComponent
      allPokemons={allPokemons}
      pokemonId={pokemonId}
      pokemonData={pokemonData}
    />
  );
};

export default PokemonDetailsPage;
