"use client";
import { getPokemonById } from "@/api/pokemon-api";
import LoadingAndErrorComponent from "@/app/components/LoadingAndErrorComponent/LoadingAndErrorComponent";
import { capitalizeFirstLetter } from "@/utils/textUtils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import PrevAndNextPokemonLink from "./PrevAndNextPokemonLink";
import PokemonInformation from "./PokemonInformation";
import { PokemonStats } from "./PokemonStats/PokemonStats";

const PokemonDetailsPage = () => {
  const params = useParams();
  const pokemonId: number = Number(params.pokemonId);
  if (!pokemonId) {
    return;
  }

  const getPokemon = async () => {
    return getPokemonById(pokemonId);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: getPokemon,
  });

  if (isLoading || isError) {
    return (
      <LoadingAndErrorComponent
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    );
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center px-4 border rounded-md mx-auto md:max-w-200">
      <h1>{capitalizeFirstLetter(data?.name)}</h1>
      <div className="flex flex-col md:flex-row gap-3 lg:gap-14 items-center">
        {data?.image && (
          <Image
            loading="eager"
            className="max-w-50 w-full h-auto"
            alt={data?.name}
            width={100}
            height={100}
            src={data?.image}
          />
        )}
        <PokemonInformation pokemonData={data} />
      </div>
      <PokemonStats stats={data?.stats} />
      <div className="flex flex-row gap-10 mt-10 w-full justify-between">
        {pokemonId > 1 && (
          <PrevAndNextPokemonLink currentPokemonId={pokemonId} action="minus" />
        )}
        {pokemonId < 151 && (
          <PrevAndNextPokemonLink currentPokemonId={pokemonId} action="plus" />
        )}
      </div>
    </div>
  );
};

export default PokemonDetailsPage;
