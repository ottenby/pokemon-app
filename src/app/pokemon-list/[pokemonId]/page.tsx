"use client";
import { getPokemonById } from "@/api/pokemon-api";
import LoadingAndErrorComponent from "@/app/components/LoadingAndErrorComponent/LoadingAndErrorComponent";
import { capitalizeFirstLetter } from "@/utils/textUtils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

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

  const returnPokemonId = (action: "minus" | "plus") => {
    if (action === "minus") {
      return pokemonId - 1;
    } else {
      return pokemonId + 1;
    }
  };

  if (isLoading) {
    return (
      <LoadingAndErrorComponent
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1>{capitalizeFirstLetter(data?.name)}</h1>
      <p>{data?.description}</p>
      <div className="flex flex-row justify-center gap-10 items-center">
        {pokemonId > 1 && (
          <Link href={`${returnPokemonId("minus")}`}>Prev</Link>
        )}
        {data?.image && (
          <Image alt={data?.name} width={300} height={300} src={data?.image} />
        )}
        <div className="p-10 bg-gray-200 rounded-md h-full">
          <p>Height: {data?.height}</p>
          <p>Weight: {data?.weight}</p>
        </div>
        {pokemonId < 150 && (
          <Link href={`${returnPokemonId("plus")}`}>Next</Link>
        )}
      </div>
    </div>
  );
};

export default PokemonDetailsPage;
