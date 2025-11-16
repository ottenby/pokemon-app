"use client";
import { getAllGeneration1Pokemon } from "@/api/pokemon-api";
import { useQuery } from "@tanstack/react-query";
import PokemonListItem from "./PokemonListItem";
import LoadingAndErrorComponent from "../components/LoadingAndErrorComponent/LoadingAndErrorComponent";
import { useEffect, useState } from "react";
import { SearchPokemonInput } from "./SearchPokemonInput/SearchPokemonInput";

const Pokemons = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getAllGeneration1Pokemon,
  });

  const [filteredPokemons, setFilteredPokemon] = useState<
    PokemonListItemType[] | undefined
  >([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    data && setFilteredPokemon(data.sort((a, b) => a.order - b.order));
  }, [data]);

  useEffect(() => {
    if (searchValue !== "") {
      setFilteredPokemon(
        data
          ?.filter((pokemon) => pokemon.name.includes(searchValue))
          .sort((a, b) => a.order - b.order)
      );
    } else {
      setFilteredPokemon(data);
    }
  }, [searchValue]);

  if (isLoading || isError) {
    return (
      <LoadingAndErrorComponent
        isError={isError}
        isLoading={isLoading}
        error={error}
      />
    );
  }
  return (
    <div>
      <SearchPokemonInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-14 md:mt-4 bg-gray-200 p-4 md:p-8">
        {filteredPokemons?.map((pokemon, key) => (
          <PokemonListItem pokemon={pokemon} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
