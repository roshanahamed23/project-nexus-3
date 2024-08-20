import { pool4 } from '@/assets';
import Googelmap from '@/components/Googelmap';
import Layout from '@/components/Layout';
import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { useState } from 'react';



const contact = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [sub, setSub] = useState("");
    const [comment, setCommet] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Layout>
            <div className=" relative w-full m-2 flex flex-col lg:flex-row justify-center items-start bg-orange-100 p-10 gap-6">
                <div className="flex flex-col gap-6 justify-center items-center flex-1">
                    <h2 className="font-bebas font-bold flex flex-col gap-4 text-4xl max-md:2xl">
                        Say Hello.
                        <div className="w-20 h-2 bg-red rounded-md"></div>
                    </h2>
                    <p className="text-lg">
                        Don’t hesitate to give a call. We are looking forward to help you.
                    </p>
                    <div className='flex flex-col gap-2'>
                      <a href=''><p className='flex flex-row gap-2'><span><MapIcon className="size-5 hover:text-white text-red"/></span>33, First Floor, Alagesan Street, Tambaram West, Chennai -45</p></a>
                      <a href='mailto:contact@nexusinfo.in'><p className='flex flex-row gap-2'><span><EnvelopeIcon className="size-5 hover:text-white text-red"/></span>contact@nexusinfo.in</p></a>
                      <a href='tel:+918778993293'><p className='flex flex-row gap-2'><span><PhoneIcon className="size-5 hover:text-white text-red"/></span>+91 87789 93293</p></a>
                    </div>
                    <div >
                        <Image src={pool4} alt="deadpool" priority="true" className="w-72 h-72" />
                    </div>
                </div>

                <div className="w-full flex-1">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6 p-6 rounded-xl bg-white font-bebas w-full "
                    >
                        <h2 className='text-3xl font-bebas text-red font-bold'>Ask Your Queries</h2>
                        <div className="flex flex-col gap-3 items-start justify-center">
                         
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

                            <input
                                type="text"
                                placeholder="Email"
                                value={mail}
                                className="input"
                                onChange={(e) => setMail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-center">
                           
                            <input
                                type="text"
                                placeholder="Subject"
                                value={sub}
                                className="input"
                                onChange={(e) => setSub(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-center">
                            
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
            <div>
                <Googelmap/>
            </div>
        </Layout>
    )
}

export default contact