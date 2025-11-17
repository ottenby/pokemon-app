import { render, screen } from "@testing-library/react";
import PokemonInformation from "./PokemonInformation";
import "@testing-library/jest-dom";
import { PokemonDetailsType } from "@/types";

describe("PokemonInformation Component", () => {
  const mockPokemonData: PokemonDetailsType = {
    name: "charizard",
    image: "https://example.com/charizard.png",
    height: 8,
    weight: 8,
    description: "He is fire",
    types: ["fire"],
    stats: [{ baseStat: 5, effort: 4, statName: "Hp" }],
  };

  test("renders Pokemon information correctly", () => {
    render(<PokemonInformation pokemonData={mockPokemonData} />);

    const descriptionElement = screen.getByText("He is fire");
    expect(descriptionElement).toBeInTheDocument();

    const heightElement = screen.getByText("Height: 8");
    expect(heightElement).toBeInTheDocument();

    const weightElement = screen.getByText("Weight: 8");
    expect(weightElement).toBeInTheDocument();

    const typeElement1 = screen.getByText("Fire");
    expect(typeElement1).toBeInTheDocument();
  });
});
