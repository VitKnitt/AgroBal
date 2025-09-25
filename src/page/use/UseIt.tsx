import agroPencil from "../../img/agro/agropencil.jpg";

export function UseIt() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section id='UseIt' className="scroll-mt-[-110px] bg-[url('/backGround/use.svg')] bg-cover bg-center h-[850px] md:pr-20 flex flex-row sm:justify-center items-center flex-wrap gap-20 p-5 pr-10">
      <img
        src={agroPencil}
        alt="usage"
        className="rounded-[50%] border-8 border-secondary w-[250px] h-[250px]"
      />
      <div className="w-96">
        <div>
          <h2 className="text-2xl font-bold mb-3 border-b-8 border-tercialy">VYUŽITÍ</h2>
          <p className="text-base leading-relaxed">
            Naše balicí fólie jsou vhodné pro širokou škálu balicích strojů,
            baliček a ovíječek, včetně strojů od značky McHale. Při ovíjení
            balíků doporučujeme provést minimálně 4 oviny, a v některých
            situacích dokonce až 6 ovití. Každá snaha o úsporu fólie může vést k
            nežádoucímu průniku vzduchu a vzniku plísní.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3 border-b-8 border-tercialy">CHARAKTERISTIKY FÓLIÍ</h2>
          <p className="text-base leading-relaxed">
            Naše standardní fólie jsou dodávány v bílé barvě a také ve světlé a
            tmavé zelené, případně černé barvě na zvláštní objednávku. Použití
            barevných fólií je zejména vhodné v provozech, kde je žádoucí
            minimalizovat sluneční záření nebo upoutat pozornost na obsah
            palety.
          </p>
        </div>
      </div>
    </section>
  );
}
