type PokemonListItemType = {
  name: string;
  id: number;
  order: number;
};

type PokemonDetailsType = {
  name: string;
  height: number;
  weight: number;
  description?: string;
  types: PokemonDetailsTypeType[];
  image: string;
  stats: PokemonDetailsStatsType[];
};

type PokemonDetailsStatsType = {
  baseStat: number;
  effort: number;
  statName: string;
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
