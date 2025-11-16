import PokemonTypePill from "@/components/PokemonDetailsComponent/PokemonTypePill/PokemonTypePill";
import { PokemonDetailsType } from "@/types";

type PokemonInformationProps = {
  pokemonData?: PokemonDetailsType | null;
};

const PokemonInformation = ({ pokemonData }: PokemonInformationProps) => {
  return (
    <div>
      <p className="text-center md:text-left">{pokemonData?.description}</p>
      <div className="flex flex-col items-center md:items-start p-4 lg:p-8 bg-white border rounded-md h-full w-full md:w-auto mt-10 whitespace-nowrap">
        <p>Height: {pokemonData?.height}</p>
        <p>Weight: {pokemonData?.weight}</p>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <h4>Type:</h4>
        <div className="flex flex-row gap-2">
          {pokemonData?.types.map((type, key) => (
            <PokemonTypePill key={key} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonInformation;
