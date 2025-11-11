"use client";
import { getAllGeneration1Pokemon } from "@/api/pokemon-api";
import { useQuery } from "@tanstack/react-query";
import PokemonListItem from "./PokemonListItem";

const Pokemons = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getAllGeneration1Pokemon,
  });

  console.log("data:", data);

  return (
    <div>
      <h1>List view</h1>
      {data?.map((pokemon, key) => (
        <PokemonListItem pokemon={pokemon} key={key} />
      ))}
    </div>
  );
};

export default Pokemons;
