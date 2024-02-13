import Image from "next/image";
import Hero from "./(pages)/Hero";
import Award from "./(pages)/Award";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="">
        <Award/>
      </div>
    </main>
  );
}
