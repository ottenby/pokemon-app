import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  PokemonListingComponent,
  PokemonListingComponentProps,
} from "./PokemonListingComponent";
import { PokemonListItemType } from "@/types";

const mockPokemonList: PokemonListItemType[] = [
  { name: "Pikachu", order: 25, id: 25 },
  { name: "Bulbasaur", order: 1, id: 25 },
];

jest.mock("./PokemonListItem/PokemonListitem", () => {
  return function MockPokemonListItem({
    pokemon,
  }: {
    pokemon: PokemonListItemType;
  }) {
    return <div data-testid="pokemon-item">{pokemon.name}</div>;
  };
});

describe("PokemonListingComponent", () => {
  test("renders filtered Pokemon list correctly", () => {
    const props: PokemonListingComponentProps = {
      pokemonList: mockPokemonList,
    };

    render(<PokemonListingComponent {...props} />);

    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
  });
});
