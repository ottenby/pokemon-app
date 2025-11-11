"use client";
import { getPokemonById } from "@/api/pokemon-api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const PokemonDetailsPage = () => {
  const params = useParams();
  const pokemonId: number = Number(params.pokemonId);
  if (!pokemonId) {
    return;
  }
  console.log(pokemonId);

  const { data } = useQuery({
    queryKey: ["pokemonDetails"],
    queryFn: getPokemonById(pokemonId),
  });
  //   const { data, error, isLoading, isError } = useQuery({
  //     queryKey: ["pokemon"], //maybe should be id?
  //     queryFn: () => {
  //       getPokemonById(pokemonId);
  //     },
  //   });

  //   if (isLoading) {
  //     return <>...Loading</>;
  //   }

  //   if (isError) {
  //     console.log(error as Error);
  //     return <>...Error</>;
  //   }

  //   console.log("data:", data);

  return (
    <div>
      <p>details page</p>
    </div>
  );
};

export default PokemonDetailsPage;
