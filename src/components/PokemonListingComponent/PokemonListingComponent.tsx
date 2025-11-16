"use client";

import PokemonListItem from "@/components/PokemonListingComponent/PokemonListItem";
import { SearchPokemonInput } from "@/components/PokemonListingComponent/SearchPokemonInput/SearchPokemonInput";
import { PokemonListItemType } from "@/types";
import { useState } from "react";

type PokemonListingComponentProps = {
  pokemonList: PokemonListItemType[];
};

export const PokemonListingComponent = ({
  pokemonList,
}: PokemonListingComponentProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(pokemonList);

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
