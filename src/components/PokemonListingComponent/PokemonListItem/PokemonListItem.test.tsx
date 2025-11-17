import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PokemonListItemType } from "@/types";
import { capitalizeFirstLetter } from "@/utils/textUtils";
import PokemonListItem from "./PokemonListItem";

describe("PokemonListItem Component", () => {
  const mockPokemon: PokemonListItemType = {
    id: 25,
    name: "pikachu",
    order: 25,
  };

  test("renders Pokemon details correctly", () => {
    render(<PokemonListItem pokemon={mockPokemon} />);

    const pokemonName = screen.getByText(
      capitalizeFirstLetter(mockPokemon.name),
      { exact: false }
    );
    expect(pokemonName).toBeInTheDocument();

    const pokemonImage = screen.getByAltText(
      mockPokemon.name
    ) as HTMLImageElement;
    expect(pokemonImage).toBeInTheDocument();
  });
});
