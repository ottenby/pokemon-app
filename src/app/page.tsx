import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-20 flex flex-col items-center p-4">
      <h1>Welcome to Pokemon App</h1>
      <Image
        width={0}
        height={0}
        className="w-full h-auto max-w-100"
        alt="pikachu"
        src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/25.svg"
      />
    </div>
  );
}
