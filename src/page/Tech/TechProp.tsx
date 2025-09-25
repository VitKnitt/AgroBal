import tree from '../../img/agro/icons/olive-tree.gif'

export function TechProp() {
  return (
    <article className="p-4 flex flex-wrap justify-evenly items-center">
      <img
      src={tree}
      alt='tractor'
      className='sm:max-w-[15rem] max-w-[8rem]'
      />
       <ul className="text-primaryFont">
        <li>Počet vrstev: 5</li>
        <li>Obsahuje speciální přísady pro UV filtr</li>
        <li>Zvýšená lepivost → vysoký lamino efekt</li>
        <li>Vytváří pevný a vzduchotěsný obal</li>
      </ul>
    </article>
  );
}
