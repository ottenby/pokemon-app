type PokemonType = {
  name: string;
  id: number;
  shape: PokemonGenericAttributeType;
  color: PokemonGenericAttributeType;
  generation: PokemonGenericAttributeType;
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

type PokemonDetailsStatsType = {
  baseStat: number;
  effort: number;
  stat: string;
};

type PokemonDetailsTypeType = {
  slot: number;
  type: string;
};
