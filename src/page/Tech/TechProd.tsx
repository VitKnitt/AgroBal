import wheat from '../../img/agro/icons/wheat.gif'

export function TechProd() {
  return (
    <article className="p-4 flex flex-wrap justify-evenly items-center">
      <img
      src={wheat}
      alt='tractor'
      className='sm:max-w-[15rem] max-w-[8rem]'
      />
       <ul className="text-primaryFont">
        <li>Vyrobena z polyethylenu (LLD)</li>
        <li>Využívá suroviny nejvyšší kvality s ohledem na životní prostředí</li>
        <li>Dutinka (jádro) z recyklovaných materiálů</li>
        <li>Vhodné pro venkovní skladování minimálně 1 rok</li>
      </ul>
    </article>
  );
}
