import { Link } from "react-scroll";
import logo from '../img/agro/logo.jpg'

const Footer = () => {
  return (
    <footer
      id="Kontakt"
      className="scroll-mt-[70px] bg-secondary text-gray-300 py-10"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + krátký text */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-16 mb-3"
          />
          <p className="text-sm">
            Moderní a udržitelná řešení pro zemědělství. Pomáháme přírodě i vám.
          </p>
        </div>

        {/* Navigace */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navigace</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="AboutUs"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                O nás
              </Link>
            </li>
            <li>
              <Link
                to="Products"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                Produkty
              </Link>
            </li>
            <li>
              <Link
                to="Goods"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                Specifikace
              </Link>
            </li>
            <li>
              <Link
                to="Tech"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                Technologie
              </Link>
            </li>
            <li>
              <Link
                to="Advantage"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                Využití
              </Link>
            </li>
            <li>
              <Link
                to="FAQ"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-white font-semibold mb-3">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: agrobal@agrobal.cz</li>
            <li>IČ: 14132125</li>
            <li>Spisová značka: C 126785/KSBR Krajský soud v Brně</li>
            <li>Web: www.agrobal.cz</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Adresa</h3>
          <ul className="space-y-2 text-sm">
            <li>mpbm s.r.o.</li>
            <li>Lidická 700/19</li>
            <li>60200 Brno</li>
          </ul>
        </div>
      </div>

      {/* spodní lišta */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} mpbm s.r.o. Všechna práva vyhrazena.</p>
        <div className="flex flex-row justify-center items-center gap-5">
          <p>firma AgroBal je hrdým mecenášem umění a podporuje: </p>
          <a href="https://www.edgetale.com/#/">
            <img
              src="https://www.edgetale.com/static/media/logo.94a5b1388ad9fc57a29c.png"
              className="w-[5rem] h-[5rem]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
