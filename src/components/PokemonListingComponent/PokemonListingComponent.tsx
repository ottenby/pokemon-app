"use client";

import PokemonListItem from "@/components/PokemonListingComponent/PokemonListItem/PokemonListItem";
import { SearchPokemonInput } from "@/components/PokemonListingComponent/SearchPokemonInput/SearchPokemonInput";
import { PokemonListItemType } from "@/types";
import { useState } from "react";

export type PokemonListingComponentProps = {
  pokemonList: PokemonListItemType[];
};

export const PokemonListingComponent = ({
  pokemonList,
}: PokemonListingComponentProps) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredPokemons = pokemonList
    .filter((pokemon) => pokemon.name.includes(searchValue))
    .sort((a, b) => a.order - b.order);

  return (
    <div>
      <SearchPokemonInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-14 md:mt-4 bg-gray-200 p-4 md:p-8">
        {filteredPokemons.map((pokemon, key) => (
          <PokemonListItem key={key} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
