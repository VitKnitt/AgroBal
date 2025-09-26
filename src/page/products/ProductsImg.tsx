import products from '../../img/agro/products.jpg'

export default function ProductsImg() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Obrázek */}
      <img
        src={products}
        alt="products"
        className="w-full h-full object-cover"
      />

      {/* Překryv */}
      <div
        className="
          absolute bottom-4 left-1/2 -translate-x-1/2
          sm:left-8 sm:translate-x-0
          lg:left-[700px] lg:bottom-[40px]
          bottom-[-80px]
          bg-tercialy p-3 sm:p-4 rounded-lg shadow-lg
          max-w-[90%] sm:max-w-xs min-w-[250px]
        "
      >
        <h2 className="text-lg sm:text-xl font-bold">Produkty</h2>
        <p className="text-sm sm:text-base text-gray-700">
          Naše řada produktů přináší široký výběr hlavních obalových řešení pro agro průmysl.
        </p>
      </div>
    </div>
  );
}
