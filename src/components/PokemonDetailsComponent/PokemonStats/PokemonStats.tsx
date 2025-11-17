import { PokemonDetailsStatsType } from "@/types";
import { capitalizeFirstLetter } from "@/utils/textUtils";

type PokemonStatsProps = {
  stats?: PokemonDetailsStatsType[];
};
const numberOfStatRows = 15;

export const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <div className="flex flex-row mt-10">
      {stats?.map((stat, key) => {
        const roundedInt = Math.round(stat.baseStat / 10);
        return (
          <div key={key} className="flex flex-col p-1 justify-start">
            <div className="flex flex-col gap-1">
              {Array.from(
                { length: numberOfStatRows - roundedInt },
                (_, index) => (
                  <div
                    key={`row-${index}`}
                    className="bg-gray-200 h-1 w-full"
                  ></div>
                )
              )}
              {Array.from({ length: roundedInt }, (_, index) => (
                <div
                  key={`blue-row-${index}`}
                  className="bg-blue-200 h-1 w-full"
                ></div>
              ))}
            </div>
            <p className="tracking-tigt mt-1 divide-solid">
              {capitalizeFirstLetter(stat.statName)}
            </p>
          </div>
        );
      })}
    </div>
  );
};
