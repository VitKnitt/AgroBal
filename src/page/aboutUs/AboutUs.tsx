import { AboutUsCard } from "./AboutUsCard";
import { AboutUsText } from "./AboutUsText";

export function AboutUs() {
      //bg-fixed
      //bg-[url('/backGround/ssshape.svg')]
  return <section id="AboutUs" className="scroll-mt-[70px] bg-secondary bg-cover bg-center flex justify-start flex-wrap gap-10 p-5 pt-20 lg:pl-20">
        <AboutUsText />
        <AboutUsCard />
      </section>;
}
