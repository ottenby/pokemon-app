import { PokemonDetailsType, PokemonListItemType } from "@/types";
import { capitalizeFirstLetter } from "@/utils/textUtils";
import PokemonInformation from "./PokemonInformation/PokemonInformation";
import { PokemonStats } from "./PokemonStats/PokemonStats";
import PrevAndNextPokemonLink from "./PrevAndNextPokemonLink/PrevAndNextPokemonLink";
import Image from "next/image";

type PokemonDetailsComponentProps = {
  pokemonData?: PokemonDetailsType;
  pokemonId: number;
  allPokemons: PokemonListItemType[];
};

export const PokemonDetailsComponent = ({
  pokemonData,
  pokemonId,
  allPokemons,
}: PokemonDetailsComponentProps) => {
  return (
    <div className="px-2 py-20 md:pt-40">
      <div className="bg-gray-100 flex flex-col items-center px-4 border rounded-md mx-auto md:max-w-200">
        <div className="flex flex-row gap-10 mt-10 w-full justify-between">
          {pokemonId > 1 && (
            <PrevAndNextPokemonLink
              adjacentPokemon={allPokemons.find(
                (pokemon) => pokemon.id === Number(pokemonId) - 1
              )}
              action="minus"
            />
          )}
          {pokemonId < allPokemons.length && (
            <PrevAndNextPokemonLink
              adjacentPokemon={allPokemons.find(
                (pokemon) => pokemon.id === Number(pokemonId) + 1
              )}
              action="plus"
            />
          )}
        </div>
        <h1>{capitalizeFirstLetter(pokemonData?.name)}</h1>
        <div className="flex flex-col md:flex-row gap-3 lg:gap-14 items-center">
          {pokemonData?.image && (
            <Image
              loading="eager"
              className="max-w-50 w-full h-auto"
              alt={pokemonData?.name}
              width={0}
              height={0}
              src={pokemonData?.image}
            />
          )}
          <PokemonInformation pokemonData={pokemonData} />
        </div>
        <PokemonStats stats={pokemonData?.stats} />
      </div>
    </div>
  );
};
