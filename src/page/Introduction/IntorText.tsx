export function IntroText() {
  return (
    <article
      className="
        max-w-prose p-3 sm:p-4 md:p-6 
        text-start flex flex-col justify-center self-center 
        bg-secondary bg-opacity-[80%] 
        max-h-64 sm:max-h-[100%] md:max-h-[100%]
      "
    >
      <p className="text-sm sm:text-base md:text-lg text-primary">
        NEJLEPŠÍ DODAVATEL
      </p>

      <h1 className="text-lg text-tercialy sm:text-xl md:text-5xl lg:text-7xl lg:pb-10 text-white font-bold mb-2 sm:mb-3 leading-tight md:leading-[1.2] lg:leading-[1.2]">
        OBALOVÝCH MATERIÁLŮ
      </h1>

      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white italic leading-relaxed">
        Ať už se jedná o začínajícího zahradníka, zkušeného zemědělce nebo
        začínajícího zemědělského nadšence, specializované materiály společnosti
        AgroBal jsou navrženy tak, aby byly efektivním řešením agroobalů.
      </p>
    </article>
  );
}
