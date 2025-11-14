type PokemonType = {
  name: string;
  id: number;
  shape: PokemonGenericAttributeType;
  color: PokemonGenericAttributeType;
  generation: PokemonGenericAttributeType;
  order: number;
};

type PokemonGenericAttributeType = {
  name: string;
  url: string;
};

type PokemonEvolutionChainType = {
  url: string;
};

type PokemonDetailsType = {
  name: string;
  height: number;
  weight: number;
  description?: string;
  types: PokemonDetailsTypeType[];
  image: string;
};

type PokemonDetailsTypeType =
  | "bug"
  | "dragon"
  | "electric"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "water";
