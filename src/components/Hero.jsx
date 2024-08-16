import React, { useState, useEffect } from "react";
import Image from "next/image";
import { pool1, pool2, pool3 } from "@/assets";

let array = [
  {
    text: '"Oh hey, you found me! Welcome to Deadpool Info."',
    icon: pool1,
  },
  {
    text: `"We build software so smooth, even I can't make it look bad... and trust me, I've tried!"`,
    icon: pool2,
  },
  {
    text: '"So, what are you waiting for? Let’s break some code and the fourth wall together."',
    icon: pool3,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen relative">
      <div className="separate"></div>

      <div className="absolute inset-0 bg-red p-4 flex flex-row gap-4">
        <div className="bg-black w-1/2 max-md:w-full h-[96vh] flex justify-center items-center flex-col gap-10">
          <h2 className="text-red text-6xl font-black max-md:text-3xl text-center p-6 max-md:max-w-2xl">
            Building Awesome Software with a{" "}
            <span className="text-white">Twist</span>
          </h2>

          <div className=" md:hidden flex justify-center items-center">
            <Image
              src={array[currentIndex].icon}
              alt="pool"
              priority={true}
              className="w-20"
            />
          </div>

          <h2 className="text-yellow-300 font-bebas text-4xl max-md:text-lg p-6 shadow-lg shadow-red max-md:max-w-lg border-dashed border-[3px]">
            {array[currentIndex].text}
          </h2>
          <div className="flex items-end">
            <button className="text-black bg-red font-bold text-xl max-md:text-md bg-red-500 rounded-lg px-6 py-3 hover:bg-red hover:text-white transition-transform duration-1000 ease-in-out transform hover:scale-110">
              Pool us
            </button>
          </div>
        </div>

        <div className="bg-black w-1/2 h-[96vh] flex justify-center items-center max-md:hidden">
          <Image
            src={array[currentIndex].icon}
            alt="pool"
            priority={true}
            className="max-w-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
