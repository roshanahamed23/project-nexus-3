import React from "react";
import Image from "next/image";

const ServiceInfo = ({ icon, title, description, buttonText, link }) => {
  return (
    <div className="border rounded-md shadow-sm text-center p-6 flex flex-col gap-4 justify-center items-center border-r-[35px] border-l-red border-r-red border-l-[35px] bg-black">
      <div className="rounded-md p-1 flex justify-center bg-black items-center w-24 h-18">
        <div className="flex justify-between gap-6 items-center">
        <div className="bg-white w-12 h-6 rounded-[100%/100%] rounded-b-2xl"></div>
          <div className="z-10" style={{ position: "relative", width: "200px", height: "200px" }}>
          <Image
            src={icon}
            alt="icon-service"
            fill
            style={{ objectFit: "contain" }}
            className="rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
          <div className="bg-white w-12 h-6 rounded-[100%/100%] rounded-b-2xl"></div>
        </div>
      </div>
      <h5 className="font-bebas font-semibold text-md text-white pt-2">{title}</h5>
      <p className="font-monserrat text-slate-300 max-w-sm">{description}</p>
      <a href={link}>
        <button className="border border-gray-400 px-5 py-3 rounded-lg text-white font-montserrat transition duration-300 ease-in-out transform cursor-pointer hover:scale-105">
          {buttonText}
        </button>
      </a>
    </div>
  );
};

export default ServiceInfo;