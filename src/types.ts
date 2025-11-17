export type FetchedPokemonType = {
  name: string;
  id: number;
  order: number;
  shape: {
    name: string;
    url: string;
  };
  color: {
    name: string;
    url: string;
  };
  generation: {
    name: string;
    url: string;
  };
};

export type FetchedPokemonDetailsType = {
  name: string;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: PokemonDetailsTypeType;
      url: string;
    };
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
};

export type FetchedCharacteristicType = {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
    };
  }[];
};

export type PokemonListItemType = {
  name: string;
  id: number;
  order: number;
};

export type PokemonDetailsType = {
  name: string;
  height: number;
  weight: number;
  description?: string;
  types: PokemonDetailsTypeType[];
  image: string;
  stats: PokemonDetailsStatsType[];
};

export type PokemonDetailsStatsType = {
  baseStat: number;
  effort: number;
  statName: string;
};

export type PokemonDetailsTypeType =
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
