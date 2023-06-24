import React from 'react'
import { motion } from "framer-motion"
import profilePic from '../public/image.jpg'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{opacity: 1}}
    className=' h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-full
    px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
        text-2xl'>
            About
        </h3>

        <motion.img
        initial={{
            x: -200,
            opacity: 0
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        src='https://www.kibrispdr.org/data/30/clip-art-men-1.jpg'
        alt='user picture'
        className='mt-24 md:mb-0 flex-shrink-0 w-52 h-52 md:w-[300px] md:h-[300px]
        rounded-full object-cover md:rounded-lg 
        xl:w-[400px] xl:h-[400px] '
        />
        <div className='space-y-3 px-0 md:px-10'>
            <h4 className='text-xl font-semibold '>
                About <span className=' underline decoration-[#F7AB0A]/50'>
                Me</span>{" "}
            </h4>
            <p className='text-base'>Hi. I am Adona.
            A eager learner and motivated professional that thrives on challenges, honing news skills and motivating growth in those around me.
As a senior Web developer, I graduated with honors in Bachelor of computer science from 
After graduation, I have been always improving my technical and soft skills and being regarded as a go-to person in web development.
I can proudly say that no matter how difficult and huge the projects is, my high skills and rich experience will allow me to achieve my goal smoothly.
And I always share my destiny with my clients and strive to achieve their goals.
            </p>
        </div>
        

        
    </motion.div>
  )
}

export default About