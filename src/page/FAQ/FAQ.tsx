import QA from "./QA";

export function FAQ() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section id='FAQ' className="scroll-mt-[0px] bg-primary bg-cover bg-center flex justify-center content-center flex-wrap gap-5 p-5 pb-20 pt-[100px]">
      <div className="flex flex-col gap-5">
        <QA
          question={"Jsou vaše fólie kompatibilní s různými balicími stroji?"}
          answer={
            "Ano, naše balicí fólie jsou navrženy pro použití s různými typy balicích strojů, baliček a ovíječek. Můžete je bez obav používat i s balicími stroji od značky McHale."
          }
        />
        <QA
          question={"Jaký je doporučený počet ovíjení při balení senáže?"}
          answer={
            "Doporučujeme provést minimálně 4 oviny při balení senáže. V některých situacích je vhodné provést až 6 ovití, aby byla zajištěna optimální ochrana krmiva."
          }
        />
        <QA
          question={"Jak dlouho je garantována životnost AgroBal fólie?"}
          answer={
            "Naše fólie mají garantovanou životnost 12 měsíců. To znamená, že můžete spolehnout na jejich kvalitu a ochranu i po delší dobu skladování."
          }
        />
      </div>
      <div className="flex flex-col gap-5">
        <QA
          question={"Jsou u vás dostupné různé barevné varianty fólií?"}
          answer={
            "Ano, naše standardní fólie jsou dodávány v bílé, světle a tmavě zelené barvě. Na zvláštní objednávku je také možné získat fólie v černé barvě. Barevné fólie se často používají pro ochranu před slunečním zářením nebo pro estetické účely."
          }
        />
        <QA
          question={
            "Jaká je minimální doba skladování fólie a jaké jsou její skladovací požadavky?"
          }
          answer={
            "Naše fólie lze skladovat venku alespoň po dobu jednoho roku. Je důležité zajistit, aby byly fólie skladovány na suchém a chráněném místě, abychom zaručili jejich optimální kvalitu při použití."
          }
        />
        <QA
          question={"Jak mohu získat AgroBal fólie a další informace?"}
          answer={
            "Pro nákup našich fólií a získání dalších informací nás můžete kontaktovat prostřednictvím našeho kontaktního formuláře na webové stránce. Rádi vám poskytneme veškeré potřebné informace a poradíme vám s výběrem správného produktu pro vaše potřeby."
          }
        />
      </div>
    </section>
  );
}
