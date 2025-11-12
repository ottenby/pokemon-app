"use client";
import { getAllGeneration1Pokemon } from "@/api/pokemon-api";
import { useQuery } from "@tanstack/react-query";
import PokemonListItem from "./PokemonListItem";

const Pokemons = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getAllGeneration1Pokemon,
  });

  return (
    <div className="grid grid-cols-4 gap-8 bg-gray-200 p-8">
      {data?.map((pokemon, key) => (
        <PokemonListItem pokemon={pokemon} key={key} />
      ))}
    </div>
  );
};

export default Pokemons;
