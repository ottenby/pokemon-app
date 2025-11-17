import { render, screen } from "@testing-library/react";
import { PokemonDetailsComponent } from "./PokemonDetailsComponent";
import "@testing-library/jest-dom";
import { PokemonDetailsType, PokemonListItemType } from "@/types";

describe("PokemonDetailsComponent", () => {
  const mockPokemonData: PokemonDetailsType = {
    name: "charizard",
    image: "https://example.com/charizard.png",
    height: 8,
    weight: 8,
    description: "He is fire",
    types: ["fire"],
    stats: [{ baseStat: 5, effort: 4, statName: "Hp" }],
  };
  const mockPokemonId = 6;
  const mockAllPokemons: PokemonListItemType[] = [
    { id: 5, name: "charmeleon", order: 5 },
    { id: 6, name: "charizard", order: 6 },
    { id: 7, name: "squirtle", order: 7 },
  ];

  test("renders Pokemon details correctly", () => {
    render(
      <PokemonDetailsComponent
        pokemonData={mockPokemonData}
        pokemonId={mockPokemonId}
        allPokemons={mockAllPokemons}
      />
    );

    const pokemonName = screen.getByRole("heading", {
      name: `Charizard`,
    });
    expect(pokemonName).toBeInTheDocument();

    const pokemonImage = screen.getByAltText("charizard") as HTMLImageElement;
    expect(pokemonImage).toBeInTheDocument();
  });
});
