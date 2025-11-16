import { getAllGeneration1Pokemon } from "@/api/pokemon-api";
import { LeftArrowIcon } from "@/app/components/icons/LeftArrowIcon";
import { RightArrowIcon } from "@/app/components/icons/RightArrowIcon";
import { capitalizeFirstLetter } from "@/utils/textUtils";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

type PrevAndNextPokemonLinkProps = {
  currentPokemonId: number;
  action: ActionType;
};
type ActionType = "minus" | "plus";

const PrevAndNextPokemonLink = ({
  currentPokemonId,
  action,
}: PrevAndNextPokemonLinkProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getAllGeneration1Pokemon,
  });

  if (isLoading || isError) {
    return <></>;
  }

  const returnPokemonId = (action: ActionType) => {
    const modifier = action === "minus" ? -1 : 1;
    return currentPokemonId + modifier;
  };

  const returnPokemonName = () => {
    const targetPokemonId =
      action === "minus" ? currentPokemonId - 1 : currentPokemonId + 1;
    const targetPokemon = data?.find(
      (pokemon) => pokemon.id === targetPokemonId
    );
    return targetPokemon?.name;
  };

  if (data) {
    return (
      <Link
        className="flex flex-row items-center text-purple-900"
        href={`/pokemon-list/${returnPokemonId(action)}`}
      >
        {action === "minus" && <LeftArrowIcon />}
        {capitalizeFirstLetter(returnPokemonName())}
        {action === "plus" && <RightArrowIcon />}
      </Link>
    );
  }
};

export default PrevAndNextPokemonLink;
