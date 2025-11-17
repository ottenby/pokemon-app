"use client";
import { LeftArrowIcon } from "@/components/icons/LeftArrowIcon";
import { RightArrowIcon } from "@/components/icons/RightArrowIcon";
import { PokemonListItemType } from "@/types";
import { capitalizeFirstLetter } from "@/utils/textUtils";
import Link from "next/link";

type PrevAndNextPokemonLinkProps = {
  adjacentPokemon?: PokemonListItemType;
  action: ActionType;
};
type ActionType = "minus" | "plus";

const PrevAndNextPokemonLink = ({
  adjacentPokemon,
  action,
}: PrevAndNextPokemonLinkProps) => {
  return (
    <Link
      className="flex flex-row items-center text-purple-900"
      href={`/pokemon-list/${adjacentPokemon?.id}`}
    >
      {action === "minus" && <LeftArrowIcon />}
      {capitalizeFirstLetter(adjacentPokemon?.name)}
      {action === "plus" && <RightArrowIcon />}
    </Link>
  );
};

export default PrevAndNextPokemonLink;
