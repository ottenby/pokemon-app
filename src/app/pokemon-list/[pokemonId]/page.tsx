"use client";
import { getPokemonById } from "@/api/pokemon-api";
import { capitalizeFirstLetter } from "@/utils/textUtils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
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

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: getPokemon,
  });

  return (
    <div>
      <h1>Name: {capitalizeFirstLetter(data?.name)}</h1>
      {data?.image && (
        <Image alt={data?.name} width={400} height={300} src={data?.image} />
      )}
      <p>Height: {data?.height}</p>
      <p>Weight: {data?.weight}</p>
      <div>
        Moves:
        {data?.moves.map((move, key) => (
          <p key={key}>{move}</p>
        ))}
      </div>
      <div>
        Moves:
        {data?.stats.map((stat, key) => (
          <div key={key}>
            <p>Base stat: {stat.baseStat}</p>
            <p>Effort: {stat.effort}</p>
            <p>Stat: {stat.stat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetailsPage;
