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
