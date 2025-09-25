import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

/*
<SwitchElement>
    <section1 />
    <section2 />
    <section3 />
</SwitchElement>
*/

const Tech = ({ children }: Props): React.ReactNode => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = React.Children.toArray(children);

 const buttonName: string[] = ["Charakteristika", "Udržitelnost", "Vlastnosti"]

  return (
    <div id='Tech' className="scroll-mt-[0px] mx-5 md:mx-[10%] pt-[100px]">
      {/* Horní přepínače */}
      <div className="flex space-x-2 flex-wrap mb-4">
        {tabs.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-1 mb-3 py-2 px-4 rounded-lg font-medium transition mx-2 border-2 ${
              activeIndex === index
                ? "text-white"
                : "bg-primary"
            }`}
          >
            {buttonName[index]}
          </button>
        ))}
      </div>

      {/* Obsah */}
      <div className="border-t-8 border-secondary bg-primary h-[25rem] flex justify-center text-xl">
        {tabs[activeIndex]}
      </div>
    </div>
  );
};

export default Tech;
