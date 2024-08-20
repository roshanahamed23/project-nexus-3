import React from "react";
import Image from "next/image";
import { logo } from "@/assets";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Linkedin from "./icons/Linkedin";
import Whatsapp from "./icons/Whatsapp";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import {PhoneIcon} from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-red to-orange-900 p-4">
      <div className="bg-black p-4 border border-dashed border-white flex flex-row justify-between max-md:flex-col max-lg:gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1 items-center">
            <Image
              src={logo}
              alt="logo"
              className="w-[65px] h-[65px]"
              priority="true"
            />
            <span className="text-xl tracking-tight font-bebas font-black text-white">
              INFO
            </span>
          </div>
          <p className="text-md text-white max-w-sm">
            We craft websites that bring your vision to life and catapult your
            business into the digital spotlight, Deadpool style
          </p>
          <h3 className="text-xl tracking-tight font-black text-red font-bebas">
            We are Social
          </h3>
          <div className="flex flex-row gap-2 items-center">
            <Facebook />
            <Instagram />
            <Whatsapp />
            <Linkedin />
          </div>
        </div>

        <div>
          <h3 className="text-xl tracking-tight font-black text-red font-bebas">
            Company
          </h3>
          <ul>
            <li className="text-white text-md hover:text-red p-2">
              <a href="/about-us">About us</a>
            </li>
            <li className="text-white text-md hover:text-red p-2">
              <a href="#">Consultant</a>
            </li>
            <li className="text-white text-md hover:text-red p-2">
              <a href="/contact">Pool us</a>
            </li>
            <li className="text-white text-md hover:text-red p-2">
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl tracking-tight font-bebas font-black text-red font-bebas">
            Services
          </h3>
          <ul>
            <li className="text-white text-md hover:text-red p-2">
              <a href="/service/digital-marketing">Digital Marketing</a>
            </li>
            <li className="text-white text-md hover:text-red p-2">
              <a href="/service/web-development">Website Development</a>
            </li>
            <li className="text-white text-md hover:text-red p-2">
              <a href="#">Consultancy</a>
            </li>
            <li className="text-white text-md hover:text-red p-2">
              <a href="/service/graphic-design">Creative Design</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 py-2"> 

          <div className="flex flex-row gap-2 items-center">
            <EnvelopeIcon className="size-9 hover:text-white text-red"/>
            <div className="flex flex-col">
              <h4 className="text-red text-lg">Still Need Help?</h4>
              <p className="text-white">contact@nexusinfo.in</p>
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <PhoneIcon className="size-9 hover:text-white text-red"/>
            <div className="flex flex-col">
              <h4 className="text-red text-lg">Direct Phone Call</h4>
              <p className="text-white cursor-pointer"><a href="tel:+918778993293">+91 87789 93293</a></p>
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <ChatBubbleOvalLeftIcon className="size-9 hover:text-white text-red"/>
            <div className="flex flex-col">
              <h4 className="text-red text-lg">Chat With Us</h4>
              <p className="text-white"><a href="https://wa.me/+918778993293">+91 87789 93293</a></p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
