import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className=" bg-slate-200 dark:bg-gray-950">
      <Header />
      <Hero />
    </div>
  );
}
