import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Image from "next/image";
import { service } from "@/assets";
import Formpart from "@/components/Formpart";
const Service = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [serviceData, setServiceData] = useState({});

  useEffect(() => {
    if (slug) {
      const data = service.find((ser) => ser.slug === slug);
      setServiceData(data || {}); 
    }
  }, [slug]);

  if (!serviceData) {
    return (
      <Layout>
        <div className="p-6 flex justify-center items-center">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col items-start justify-center mt-2 gap-8 bg-black text-white p-6">
        <h2 className="font-merriweather text-xl font-bold">
          {serviceData.title || "Service Title"}
        </h2>
        <button className="border border-slate-500 px-5 py-3 bg-red rounded-lg text-white font-montserrat transition duration-300 ease-in-out transform cursor-pointer hover:scale-105">
          <a href="#form"> Book Now</a>
        </button>
      </div>
     
      <div className="p-6 flex flex-col gap-6">
        <div className="relative rounded-lg border flex items-center justify-center w-auto h-96">
          {serviceData.image && (
            <Image
              src={serviceData.image}
              fill
              style={{ objectFit: 'contain' }}
              alt="service"
              className="rounded-xl"
            />
          )}
        </div>
        <h3 className="font-merriweather font-semibold text-xl">
          Information about {serviceData.title || "this service"}
        </h3>
        <p className="font-montserrat text-gray-500 text-lg leading-relaxed">
          {serviceData.description || "No description available."}
        </p>
        <h3 className="font-merriweather font-semibold text-xl">
          Forms of payment accepted
        </h3>
        <ul className="flex flex-row max-md:flex-col gap-3 text-md">
          <li className="ml-2 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            Cash
          </li>
          <li className="ml-2 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            Bank Transfer
          </li>
          <li className="ml-2 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            Cheque
          </li>
        </ul>
        <div id="form">
            <Formpart/>
        </div>
      </div>
    </Layout>
  );
};

export default Service;
