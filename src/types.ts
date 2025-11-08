type PokemonType = {
  name: string;
  id: number;
  shape: PokemonGenericAttributeType;
  color: PokemonGenericAttributeType;
  baseHappiness: number;
  captureRate: number;
  eggGroups: PokemonGenericAttributeType[];
  evolutionChain: PokemonEvolutionChainType;
  generation: PokemonGenericAttributeType;
  growthRate: PokemonGenericAttributeType;
};

type PokemonGenericAttributeType = {
  name: string;
  url: string;
};

type PokemonEvolutionChainType = {
  url: string;
};
