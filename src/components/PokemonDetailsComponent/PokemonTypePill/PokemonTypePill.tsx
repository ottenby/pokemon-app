import { PokemonDetailsTypeType } from "@/types";
import { capitalizeFirstLetter } from "@/utils/textUtils";

type PokemonTypePillProps = {
  type: PokemonDetailsTypeType;
};

const PokemonTypePill = ({ type }: PokemonTypePillProps) => {
  const getTypeColor = (type: PokemonDetailsTypeType) => {
    const typeColors = {
      bug: "bg-green-500",
      dragon: "bg-purple-500",
      electric: "bg-yellow-400",
      fighting: "bg-red-600",
      fire: "bg-red-500",
      flying: "bg-blue-400",
      ghost: "bg-indigo-500",
      grass: "bg-green-400",
      ground: "bg-yellow-600",
      ice: "bg-blue-200",
      normal: "bg-gray-400",
      poison: "bg-purple-400",
      psychic: "bg-pink-500",
      rock: "bg-gray-600",
      water: "bg-blue-300",
    };

    if (typeColors[type]) {
      return typeColors[type];
    } else {
      return "bg-gray-300"; // Default color
    }
  };

  return (
    <div
      className={
        getTypeColor(type) +
        " rounded-4xl p-4 flex justify-center items-center min-w-20"
      }
    >
      <p>{capitalizeFirstLetter(type)}</p>
    </div>
  );
};

export default PokemonTypePill;
