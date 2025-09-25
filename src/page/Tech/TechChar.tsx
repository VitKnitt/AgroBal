import tractor from '../../img/agro/icons/tractor.gif'

export function TechChar() {
  return (
    <article className="p-4 flex justify-evenly flex-wrap items-center text-xl">
      <ul className="text-primaryFont">
        <li >Nejvyhledávanější agrární obalový materiál v Evropě</li>
        <li>Senážní fólie vhodná pro kulaté i hranaté balíky</li>
        <li>Poskytuje nejlepší možnou ochranu pro uchovávání konzervované píce</li>
      </ul>
      <img
      src={tractor}
      alt='tractor'
      className='sm:max-w-[15rem] max-w-[8rem]'
      />
    </article>
  );
}
