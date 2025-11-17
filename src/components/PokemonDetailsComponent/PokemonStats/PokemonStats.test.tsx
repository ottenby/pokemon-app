import { render, screen } from "@testing-library/react";
import { PokemonStats } from "./PokemonStats";
import { PokemonDetailsStatsType } from "@/types";
import "@testing-library/jest-dom";

describe("PokemonStats Component", () => {
  const mockStats: PokemonDetailsStatsType[] = [
    { statName: "hp", baseStat: 65, effort: 0 },
    { statName: "attack", baseStat: 85, effort: 0 },
    { statName: "defense", baseStat: 60, effort: 0 },
  ];

  test("renders Pokemon stats correctly", () => {
    render(<PokemonStats stats={mockStats} />);

    const hpStatLabel = screen.getByText("Hp");
    expect(hpStatLabel).toBeInTheDocument();

    const attackStatLabel = screen.getByText("Attack");
    expect(attackStatLabel).toBeInTheDocument();

    const defenseStatLabel = screen.getByText("Defense");
    expect(defenseStatLabel).toBeInTheDocument();
  });
});
