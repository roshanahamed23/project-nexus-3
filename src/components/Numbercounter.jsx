import React, { useState, useEffect } from 'react';

const Numbercounter = ({ start, end, duration }) => {
  const [number, setNumber] = useState(start);
  useEffect(() => {

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
  }, [start, end, duration]);

  return (
    <div className="text-3xl font-bebas font-bold text-red">
      {Math.round(number)}
    </div>
  );
};

export default Numbercounter;
