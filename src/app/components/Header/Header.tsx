import Link from "next/link";

export const Header = () => {
  return (
    <nav className="bg-purple-500">
      <ul className=" flex flex-row justify-center md:justify-end items-center gap-20 py-3 md:pr-10 text-3xl text-yellow-300 fixed top bg-purple-700 w-full tracking-wide">
        <Link href="/pokemon-list">POKEMON LIST</Link>
        <Link href={"/"}>HOME</Link>
      </ul>
    </nav>
  );
};
