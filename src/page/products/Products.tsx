import ProductsImg from "./ProductsImg";

export function Products() {
 //bg-fixed
 //bg-[url('/backGround/cccoil.svg')]
  return <section id='Products' className="scroll-mt-[0px] bg-[url('/backGround/flux.svg')] bg-cover bg-center flex justify-evenly flex-wrap gap-10 p-5 pt-[100px] pb-[120px]">
        <ProductsImg />
      </section>;
}
