import React from "react";
import NumberCounter from "./Numbercounter";

const data = [
  {
    value: 100,
    symbol: "+",
    text: "Project Done",
  },
  {
    value: 100,
    symbol: "+",
    text: "Happy Client",
  },
  {
    value: 4,
    symbol: "/5",
    text: "Ratings",
  },
  {
    value: 5000,
    symbol: "+",
    text: "Learning Interns",
  },
];

const Records = () => {
  return (
    <div className="bg-red p-4 m-2">
      <div className="p-8 flex flex-col justify-center gap-4 bg-black">
        <h2 className="text-4xl font-bebas font-bold text-red">Our Achievements</h2>
        <p className="text-lg text-white">We are proud of the milestones we have reached.</p>
        <div className="flex justify-around flex-col md:flex-row gap-6">
          {data.map((d, index) => (
            <div
              key={index}
              className="text-center text-white md:border-r-black md:border-r-[2px] px-6"
            >
              <div className="flex justify-center items-baseline gap-1">
                <NumberCounter start={0} end={d.value} duration={2500} />
                <span className="text-xl font-bold font-bebas">{d.symbol}</span>
              </div>
              <h4 className="mt-2 text-xl font-bebas">{d.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Records;
