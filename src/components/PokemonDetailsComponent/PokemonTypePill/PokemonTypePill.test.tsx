import { render, screen } from "@testing-library/react";
import PokemonTypePill from "./PokemonTypePill";
import "@testing-library/jest-dom";

describe("PokemonTypePill Component", () => {
  const mockType = "fire";

  test("renders Pokemon type pill correctly", () => {
    render(<PokemonTypePill type={mockType} />);

    const typePill = screen.getByText("Fire"); // Check for the capitalized type
    expect(typePill).toBeInTheDocument();

    const typeColor = screen.getByTestId("pokemon-type-pill");
    expect(typeColor).toHaveClass("bg-red-500"); // Assumes the type 'fire' uses the red color
  });
});
