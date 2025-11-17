import { render, screen, fireEvent } from "@testing-library/react";
import { SearchPokemonInput } from "./SearchPokemonInput";
import "@testing-library/jest-dom";

describe("SearchPokemonInput Component", () => {
  test("renders input and handles search value change", () => {
    const mockSearchValue = "Pikachu";
    const mockSetSearchValue = jest.fn();

    render(
      <SearchPokemonInput
        searchValue={mockSearchValue}
        setSearchValue={mockSetSearchValue}
      />
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "Charmander" } });

    expect(mockSetSearchValue).toHaveBeenCalledTimes(1);
    expect(mockSetSearchValue).toHaveBeenCalledWith("Charmander");
  });
});
