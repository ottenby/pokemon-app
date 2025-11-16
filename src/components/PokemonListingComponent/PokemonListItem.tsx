"use client";
import { capitalizeFirstLetter } from "@/utils/textUtils";
import Image from "next/image";
import Link from "next/link";

type PokemonListItemProps = {
  pokemon: PokemonListItemType;
};

const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  return (
    <div className="flex items-center flex-col bg-white p-8 rounded-md">
      <Link
        href={`pokemon-list/${pokemon.id}`}
        className=" h-full flex flex-col gap-10"
      >
        <h3 className="text-center font-semibold">
          {capitalizeFirstLetter(pokemon.name)}
        </h3>
        <Image
          className="w-full h-auto"
          loading="eager"
          alt={pokemon.name}
          height={100}
          width={100}
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        />
      </Link>
    </div>
  );
};

export default PokemonListItem;
