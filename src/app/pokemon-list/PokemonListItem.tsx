"use client";
import Link from "next/link";

type PokemonListItemType = {
  pokemon: PokemonType;
};

const PokemonListItem = ({ pokemon }: PokemonListItemType) => {
  return (
    <div className="flex flex-row gap-10">
      <p>{pokemon.name}</p>
      <p>{pokemon.color.name}</p>
      <Link href={`pokemon-list/${pokemon.id}`}>go to</Link>
    </div>
  );
};

export default PokemonListItem;
