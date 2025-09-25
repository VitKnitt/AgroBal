import { AdvantageCard } from "./AdvantageCard";

export function Advantage() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section id='Advantage' className="scroll-mt-[0px] bg-[url('/backGround/advantage.svg')] bg-cover bg-center flex flex-col justify-center items-center flex-wrap gap-10 p-5 mt-20 pt-[180px]">
      <h2 className="text-4xl">HLAVNÍ VÝHODY</h2>
      <AdvantageCard />
    </section>
  );
}
