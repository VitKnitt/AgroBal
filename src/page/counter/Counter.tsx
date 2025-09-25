import CounterSection from "./CounterSection";

export function Counter() {
 //bg-fixed
 //bg-[url('/backGround/cccoil.svg')]
  return <section className="bg-primary bg-cover bg-center flex justify-evenly flex-wrap gap-10 p-5">
    <CounterSection target={20} text={"stálých zákazníků"} />
    <CounterSection target={15} text={"let zkušeností"} />
    <CounterSection target={100} text={"dodávek kamionů"} />
      </section>;
}
