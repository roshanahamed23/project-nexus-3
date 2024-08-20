import { pool4 } from "@/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";


const Formpart = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [subject, setSub] = useState("");
  const [comment, setCommet] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const payload={name,email,subject,comment};
    axios.post('/api/hello', payload)
    .then((res) => {
      toast.success("message was sent successfully");    
      setName("");
      setMail("")
      setSub("")
      setCommet("")
    })
    .catch((err) => {
      toast.error("error occured");
    });
  }

  return (
    <div className=" relative w-full m-2 flex flex-col lg:flex-row justify-center items-start bg-orange-100 p-10 gap-6">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="font-bebas font-bold flex flex-col gap-4 text-4xl max-md:2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <div className="w-20 h-2 bg-red rounded-md"></div>
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio
          reprehenderit, dolore deleniti ex accusamus molestias inventore
          voluptatibus reiciendis dicta soluta deserunt nobis cupiditate,
          nesciunt praesentium ipsum quibusdam unde atque.
        </p>
        <div >
          <Image src={pool4} alt="deadpool" priority="true" className="w-72 h-72"/>
        </div>
      </div>

      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 p-6 rounded-xl bg-white font-bebas w-full "
        >
          <div className="flex flex-col gap-3 items-start justify-center">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="flex flex-col gap-3 items-start justify-center">
            <label>Email:</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              className="input"
              onChange={(e) => setMail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-3 items-start justify-center">
            <label>Subject:</label>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              className="input"
              onChange={(e) => setSub(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-3 items-start justify-center">
            <label>Comments:</label>
            <textarea
              type="text"
              placeholder="Write a comment"
              className="input"
              value={comment}
              onChange={(e) => setCommet(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red text-white px-4 py-2 rounded-md "
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formpart;
