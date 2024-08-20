import Image from 'next/image'
import React from 'react'

const Qualitypart = ({link,head,text}) => {
  return (
    <div className=''>
        <div className="flex flex-col gap-2 justify-center items-center border-slate-500 shadow-md p-4 " >
            <Image src={link} alt="service" priority="true" className='w-[50px] h-[50px]'/>
            <h3 className='text-xl font-bebas font-bold text-red '>{head}</h3>
            <p className='text-md text-center max-w-sm'>{text}</p>
        </div>
    </div>
  )
}

export default Qualitypart