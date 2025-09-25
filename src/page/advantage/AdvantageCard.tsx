import adv1 from "../../img/agro/icons/earth.png";
import adv2 from "../../img/agro/icons/heart.png";
import adv3 from "../../img/agro/icons/leaf.png";
import adv4 from "../../img/agro/icons/wheat.png";

export function AdvantageCard() {
  const card = [
    {
      description1:
        "lehčí manipulace s senáží",
        description2:
        "úspornější skladování",
      path: adv1,
    },
    {
      description1:
        "menší nároky na skladování",
        description2:
        "vyšší kvalita krmiva",
      path: adv2,
    },
    {
      description1:
        "dlouhodobá udržení krmivové hodnoty",
        description2:
        "pohodlná manipulace s balíky",
      path: adv3,
    },
    {
      description1:
        "dlouhodobé uchování kvality balené siláže",
        description2:
        "fólie s garantovanou životností 12 měsíců",
      path: adv4,
    },


  ];

  return (
    <section
  aria-label="Features"
  className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center h-auto max-w-5xl mx-auto p-4"
>
  {card.map((feature, index) => (
    <article
      key={index}
      className="pt-5 bg-[#ffba4aff] flex flex-col justify-start items-center w-[250px] h-[250px] rounded-xl shadow-2xl shadow-shadow hover:translate-y-[-10px] transition-transform duration-300"
    >
      <img
        src={feature.path}
        alt="Product"
        className="w-[64px] h-[64px] object-cover"
      />
      <div className="p-5">
        <ul className="mt-2 text-lg">
          <li>{feature.description1}</li>
          <li>{feature.description2}</li>
        </ul>
      </div>
    </article>
  ))}
</section>

  );
}
