"use client";
import { getAllGeneration1Pokemon } from "@/api/pokemon-api";
import { useQuery } from "@tanstack/react-query";
import PokemonListItem from "./PokemonListItem";
import LoadingAndErrorComponent from "../components/LoadingAndErrorComponent/LoadingAndErrorComponent";
import { useEffect, useState } from "react";

const Pokemons = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getAllGeneration1Pokemon,
  });

  const [filteredPokemons, setFilteredPokemon] = useState<
    PokemonType[] | undefined
  >([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    data && setFilteredPokemon(data);
  }, [data]);

  useEffect(() => {
    if (searchValue !== "") {
      setFilteredPokemon(
        data?.filter((pokemon) => pokemon.name.includes(searchValue))
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
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <div className="grid grid-cols-4 gap-8 bg-gray-200 p-8">
        {filteredPokemons?.map((pokemon, key) => (
          <PokemonListItem pokemon={pokemon} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
