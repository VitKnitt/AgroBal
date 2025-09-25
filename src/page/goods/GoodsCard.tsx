import adv1 from "../../img/agro/adv1.jpg";
import adv2 from "../../img/agro/adv2.jpg";
import adv3 from "../../img/agro/adv3.jpg";
import adv4 from "../../img/agro/adv4.jpg";

export function GoodsCard() {
  const card = [
    {
      title: "Síťoviny na balení",
      description1:
        "Nadstandardní pevnost a odolnost",
        description2:
        "Rozměry a náviny dle potřeby",
        description3:
        "Optimální pro balení sena a slámy",
      path: adv1,
    },
    {
      title: "Profesionální motouzy",
      description1:
        "Vysoká pevnost v tahu",
        description2:
        "Odolnost proti UV záření",
        description3:
        "Garantovaná délka návinu",
      path: adv2,
    },
    {
      title: "Senážní stretch fólie",
      description1:
        "Zvýšená odolnost proti protržení",
        description2:
        "Vylepšená lepivost",
        description3:
        "Vyšší výtěžnost balení",
      path: adv3,
    },
    {
      title: "Silážní fólie",
      description1:
        "Maximální ochrana siláže",
        description2:
        "Vylepšené bariérové vlastnosti",
        description3:
        "Dlouhá životnost",
      path: adv4,
    },
  
  ];

  return (
    <section
      aria-label="Features"
      className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
    >
      {/*  <article key={index} className="border-t-4 border-secondary rounded-xl overflow-hidden hover:shadow-lg hover:shadow-shadow hover:translate-y-[-10px] transition-transform duration-300" */}
      {card.map((feature, index) => (
         <article key={index} className="border-8 border-tercialy shadow-md shadow-shadow rounded-xl overflow-hidden hover:shadow-lg hover:shadow-shadow hover:translate-y-[-10px] transition-transform duration-300">
          <img
            src={feature.path}
            alt="Product"
            className="w-full h-40 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl">{feature.title}</h2>
            <ul>
            <li className="mt-2">{feature.description1}</li>
            <li className="mt-2">{feature.description2}</li>
            <li className="mt-2">{feature.description3}</li>
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
