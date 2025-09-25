import { GoodsCard } from "./GoodsCard";

export function Goods() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section id='Goods' className="scroll-mt-[0px] bg-primary bg-cover bg-center flex justify-evenly flex-wrap gap-10 p-5 pt-[100px] pb-40">
      <GoodsCard />
    </section>
  );
}
