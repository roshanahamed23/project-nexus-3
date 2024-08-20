import React from 'react';
import { motion } from 'framer-motion';
import Records from '@/components/Records';
import Layout from '@/components/Layout';
import { flag, graduation, offer, plane } from '@/assets';
import Qualitypart from '@/components/Qualitypart';

const data = [
    {
        link: flag,
        head: "Best Quality",
        text: "We ensure the best quality is always our first priority"
    },
    {
        link: plane,
        head: "Fast Service",
        text: 'We follow the quote "Fast is Good and Slow is Bad"'
    },
    {
        link: offer,
        head: "Best Offers",
        text: 'Best offers on possible products are always as standard'
    },
    {
        link: graduation,
        head: "Career Buildings",
        text: "Best career building opportunities are in our mission"
    }
];

const AboutUs = () => {
    return (
        <Layout>
            <div className='flex flex-col gap-3 justify-center items-center w-full h-[400px] bg-gradient-to-r from-red via-yellow to-white'>
                <h3 className='text-red font-bebas font-bold text-4xl md:text-6xl'>About us</h3>
                <p className='text-lg max-w-lg text-center'>We are not just building companies. We are in the process of redirecting the hidden potentials for the good will!</p>
            </div>
            <div className="relative flex flex-row max-lg:flex-col gap-2 m-2">
                <motion.div
                    animate={{ y: [0, -30, 0, -30, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative p-32 transition max-sm:text-4xl whitespace-nowrap transform hover:scale-105 duration-300 ease-linear flex flex-0 items-center justify-center font-merriweather text-6xl text-red"
                >
                    Why Choose Us
                </motion.div>

                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 0.95 }}
                        transition={{ duration: 1 }}
                        className="bg-white shadow-md rounded-lg p-2 mb-6 font-merriweather"
                    >
                        <h2 className="text-lg font-semibold mb-4">
                            Expert Team
                        </h2>
                        <p className="text-gray-700">
                            Our team consists of seasoned professionals with years of experience in their respective fields. Their expertise, combined with a passion for innovation, guarantees that you receive the best possible outcomes for your projects.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 0.95 }}
                        transition={{ duration: 1 }}
                        className="bg-white shadow-md rounded-lg p-2 mb-6"
                    >
                        <h2 className="text-lg font-semibold mb-4 font-merriweather text-red">
                            Tailored Solutions
                        </h2>
                        <p className="text-gray-700">
                            Every client is unique, and so are our solutions. We work closely with you to understand your specific needs, offering personalized services that are perfectly aligned with your goals and vision.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 0.95 }}
                        transition={{ duration: 1 }}
                        className="bg-white shadow-md rounded-lg p-2 mb-6"
                    >
                        <h2 className="text-lg font-semibold mb-4 font-merriweather">
                            Unmatched Quality
                        </h2>
                        <p className="text-gray-700">
                            We prioritize excellence in every detail, from the ingredients we use to the final presentation. Our commitment to delivering the highest quality ensures that every product and service we offer exceeds expectations.
                        </p>
                    </motion.div>
                </div>
            </div>

            <Records />
            <div className='flex max-md:flex-col flex-row justify-center items-center gap-2 p-4 m-4'>
                {
                    data.map((item, index) =>
                        <Qualitypart key={index} {...item} />
                    )
                }
            </div>
        </Layout>
    );
}

export default AboutUs;
