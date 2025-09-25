export function AboutUsCard() {
  const card = [
    {
      title: "Naše produkty vynikají kvalitou a inovativními vlastnostmi:",
      description1:
        "Dosáhnout lepší kvality konzervace píce",
        description2:
        "Snížit ztráty při skladování",
        description3:
        "Zefektivnit balicí proces",
        description4:
        "Ušetřit čas i náklady",
      badge: "",
    },
    {
      title: "Díky dlouhodobým zkušenostem v oboru poskytujeme:",
      description1:
        "Odborné poradenství",
        description2:
        "Komplexní zákaznickou podporu",
        description3:
        "Řešení na míru vašim potřebám",
        description4:
        "Spolehlivé dodávky po celé ČR",
      badge: "",
    },
  ];

  return (
    <section
      aria-label="Features"
      className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-[10%] gap-6  bg-secondary pb-16"
    >
      {card.map((feature, index) => (
        <article key={index} className="border-8 bg-primary p-3 border-tercialy shadow-lg shadow-shadow rounded-xl overflow-hidden hover:shadow-lg hover:shadow-shadow hover:translate-y-[-10px] transition-transform duration-300">
          <div className="flex items-center justify-start pb-8">
            <h2 className="text-xl md:text-2xl">{feature.title}</h2>
            {feature.badge &&
            <p className="bg-tercialy p-2 rounded-2xl text-xs">
              {feature.badge}
            </p>}
          </div>
          <ul>
            <li>{feature.description1}</li>
            <li>{feature.description2}</li>
            <li>{feature.description3}</li>
            <li>{feature.description4}</li>
            </ul>
        </article>
      ))}
    </section>
  );
}
