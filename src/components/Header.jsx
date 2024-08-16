import React, { useState } from "react";
import Image from "next/image";
import { logo } from "@/assets";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  return (
    <div className="bg-gradient-to-l from-red to-orange-900 p-4">
      <header className="flex flex-row sm:justify-around justify-between max-sm:px-3 items-center bg-black border border-dashed">
        <nav className="max-sm:hidden">
          <ul className="flex space-x-20">
            <li className="marvel">Home</li>
            <li className="marvel">Products/Service</li>
          </ul>
        </nav>

        <div className="flex flex-col justify-center items-center text-sm gap-1 p-1">
          <Image
            className="w-[50px] h-[50px]"
            src={logo}
            alt="logo"
            priority="true"
          />
          <h3 className="tracking-tight font-bebas font-black text-white">
            INFO
          </h3>
        </div>

        <nav className="max-sm:hidden">
          <ul className="flex space-x-20">
            <li className="marvel">Pool us</li>
            <li className="marvel">About us</li>
          </ul>
        </nav>

        <div className="sm:hidden">
          <button onClick={() => setmobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <XMarkIcon className="text-red size-10" />
            ) : (
              <Bars3Icon className="text-red size-10" />
            )}
          </button>
        </div>
      </header>

      {mobileMenu?<div className="border-l-black border-l-8 py-4 w-1/3 sm:hidden">
        <ul className="flex flex-col gap-3">
          <li className="text-white font-semibold font-bebas px-2 hover:text-black">Home</li>
          <li className="text-white font-semibold font-bebas px-2">Product/services</li>
          <li className="text-white font-semibold font-bebas px-2">Pool us</li>
          <li className="text-white font-semibold font-bebas px-2">About us</li>
        </ul>
      </div>:""}
    </div>
  );
};

export default Header;
