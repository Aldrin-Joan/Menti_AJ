import Image from "next/image";
import Navbar from "./_component/Home/navbar";
import Hero from "./_component/Home/hero";
export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
    </section>
  );
}
