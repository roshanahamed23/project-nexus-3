import React, { useState, useEffect, useRef } from 'react';

const Numbercounter = ({ start, end, duration }) => {
  const [number, setNumber] = useState(start);
  const counterRef = useRef(null);

  useEffect(() => {
    const handleVisibility = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        startCounter();
      }
    };

    const observer = new IntersectionObserver(handleVisibility, { threshold: 0.1 });
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounter = () => {
    const increment = (end - start) / (duration / 100);
    const interval = setInterval(() => {
      setNumber((prevNumber) => {
        const newNumber = prevNumber + increment;
        if (newNumber >= end) {
          clearInterval(interval);
          return end;
        }
        return newNumber;
      });
    }, 100);

    return () => clearInterval(interval);
  };

  return (
    <div ref={counterRef} className="text-3xl font-bebas font-bold text-red">
      {Number.isInteger(end) ? Math.round(number) : number.toFixed(1)}
    </div>
  );
};

export default Numbercounter;
