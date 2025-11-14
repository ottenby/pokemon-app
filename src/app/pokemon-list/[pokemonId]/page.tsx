"use client";
import { getPokemonById } from "@/api/pokemon-api";
import LoadingAndErrorComponent from "@/app/components/LoadingAndErrorComponent/LoadingAndErrorComponent";
import PokemonTypePill from "@/app/components/PokemonTypePill/PokemonTypePill";
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
        <div>
          <p>{data?.description}</p>
          <div className="flex flex-col items-center md:items-start p-4 lg:p-10 bg-white border rounded-md h-full w-full md:w-auto mt-10 whitespace-nowrap">
            <p>Height: {data?.height}</p>
            <p>Weight: {data?.weight}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6 mt-10">
        {data?.types.map((type, key) => (
          <PokemonTypePill key={key} type={type} />
        ))}
      </div>
      <div className="flex flex-row gap-10 mt-10">
        {pokemonId > 1 && (
          <Link href={`${returnPokemonId("minus")}`}>Prev</Link>
        )}
        {pokemonId < 150 && (
          <Link href={`${returnPokemonId("plus")}`}>Next</Link>
        )}
      </div>
    </div>
  );
};

export default PokemonDetailsPage;
