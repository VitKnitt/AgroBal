import { AboutUs } from "./page/aboutUs/AboutUs";
import { Advantage } from "./page/advantage/Advantage";
import { Counter } from "./page/counter/Counter";

import FadeIn from "./page/FadeIn";
import { FAQ } from "./page/FAQ/FAQ";
import Footer from "./page/Footer";
import { Goods } from "./page/goods/Goods";
import Header from "./page/Header";
import { Introduction } from "./page/Introduction/Introduction";
import { Products } from "./page/products/Products";
import Tech from "./page/Tech/Tech";
import { TechChar } from "./page/Tech/TechChar";
import { TechProd } from "./page/Tech/TechProd";
import { TechProp } from "./page/Tech/TechProp";
import { UseIt } from "./page/use/UseIt";

function App() {
  return (
    <div className="bg-primary">
      <Header />
      <FadeIn children={<Introduction />} />
      <FadeIn children={<AboutUs />} />
      <FadeIn children={<Products />} />
      <FadeIn children={<Goods />} />
      <FadeIn children={<Tech>
        <TechChar />
        <TechProd />
        <TechProp />
      </Tech>} />
      <FadeIn children={<Advantage />} />
      <FadeIn children={<UseIt />} />
      <FadeIn children={<Counter />} />      
      <FadeIn children={<FAQ />} />
      <Footer />
    </div>
  );
}

export default App;
