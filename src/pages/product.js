import Layout from '@/components/Layout'
import Service from '@/components/Service'
import React from 'react'

const product = () => {
  return (
    <Layout>
        <div className='p-4 bg-black'>
        <div className='bg-white p-4'>
        <div className='text-red p-6 text-center m-2 text-3xl font-bebas font-bold'>
            Service / Product
        </div>
        <Service/>
        </div>
        </div>
    </Layout>
  )
}

export default product