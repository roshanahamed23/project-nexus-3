import React from 'react'
import ServiceInfo from './ServiceInfo';
import { service1, service2, service3 } from '@/assets';

const cartInfo = [
    {
      icon: service1,
      title: "Digital Marketing",
      description: "Boost your online presence and connect with more people using our smart digital marketing strategies.",
      buttonText: "Explore",
      link:"/service/digital-marketing"
    },
    {
      icon: service2,
      title: "Web Development",
      description: "We make attractive, easy-to-use websites that represent your brand well and help you reach more customers online.",
      buttonText: "Explore",
      link:"/service/web-development"
    },
    {
      icon: service3,
      title: "Graphic Design",
      description: "We create eye-catching designs that make your brand stand out and leave a lasting impression",
      buttonText: "Explore",
      link:"/service/graphic-design"
    }
  ];

  const Service = () => {
    return (
      <div className="flex flex-col lg:flex-row m-2 gap-2 justify-center items-center p-1">
        {cartInfo.map((info, index) => (
          <ServiceInfo key={index} {...info} />
        ))}
      </div>
    );
  };
  
  export default Service;
  