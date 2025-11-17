import { render, screen } from "@testing-library/react";
import PrevAndNextPokemonLink from "./PrevAndNextPokemonLink";
import "@testing-library/jest-dom";
import { PokemonListItemType } from "@/types";

describe("PrevAndNextPokemonLink Component", () => {
  const mockAdjacentPokemon: PokemonListItemType = {
    id: 24,
    name: "bulbasaur",
    order: 24,
  };
  const mockActionMinus = "minus";
  const mockActionPlus = "plus";

  test("renders Pokemon link with left arrow for minus action", () => {
    render(
      <PrevAndNextPokemonLink
        adjacentPokemon={mockAdjacentPokemon}
        action={mockActionMinus}
      />
    );

    const leftArrowIcon = screen.getByTestId("left-arrow-icon");
    expect(leftArrowIcon).toBeInTheDocument();

    const textContent = screen.getByText("Bulbasaur", { exact: false });
    expect(textContent).toBeInTheDocument();

    expect(screen.queryByTestId("right-arrow-icon")).not.toBeInTheDocument();
  });

  test("renders Pokemon link with right arrow for plus action", () => {
    render(
      <PrevAndNextPokemonLink
        adjacentPokemon={mockAdjacentPokemon}
        action={mockActionPlus}
      />
    );

    const rightArrowIcon = screen.getByTestId("right-arrow-icon");
    expect(rightArrowIcon).toBeInTheDocument();

    const textContent = screen.getByText("Bulbasaur", { exact: false });
    expect(textContent).toBeInTheDocument();

    expect(screen.queryByTestId("left-arrow-icon")).not.toBeInTheDocument();
  });
});
