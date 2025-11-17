type SearchPokemonInputProps = {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
};

export const SearchPokemonInput = ({
  searchValue,
  setSearchValue,
}: SearchPokemonInputProps) => {
  return (
    <div className="flex flex-row justify-start bg-purple-500 md:bg-purple-700 md:bg-transparent sticky top-14 md:top-3 pl-6 py-2 md:ml-8 w-full md:w-fit">
      <label className="text-white" htmlFor="search-input">
        Search:
        <input
          id="search-input"
          className="border ml-2 pl-2 bg-white text-black"
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </label>
    </div>
  );
};
