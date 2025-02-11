import React from 'react'
import HeroImage from '../../assets/hero.png'
import { FaPlay } from 'react-icons/fa'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <>
     <div className='container grid grid-cols-1 md:grid-cols-2
     min-h-[650px] relative'>
        {/* brand info */}
        <div className='flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-5'>
            <div className="space-y-6 text-center md:text-left">
                <motion.p
                 initial={{opacity:0,x:-100}}
                 animate={{opacity:1,x:0}}
                 transition={{duration:1,delay:0.4}}
                className='text-orange-600'>100% Satisfaction Guarantee</motion.p>
                <motion.h1
                  initial={{opacity:0,x:-100}}
                  animate={{opacity:1,x:0}}
                  transition={{duration:1,delay:0.6}}
                className='text-5xl font-semibold lg:text-6xl !leading-tight'>Find Your Perfect <span className='text-primary'>Tutor</span></motion.h1>
                <motion.p
                  initial={{opacity:0,x:-100}}
                  animate={{opacity:1,x:0}}
                  transition={{duration:1,delay:0.8}}
                >
                    We help you find perfect tutor for 1-on-1 lesson 
                    It is 
                    Completely free and private 
                </motion.p>
                {/* Button Section */}
               <motion.div
                 initial={{opacity:0,x:-100}}
                 animate={{opacity:1,x:0}}
                 transition={{duration:1,delay:1}}
               className='flex gap-8 justify-center md:justify-start
               !mt-8 items-center'>
               <button className='primary-btn'>Get Started</button>
                <button
               
                className='flex items-center justify-end gap-2 font-semibold'>
                    <motion.span
                     initial={{
                        scale:1
                    }}
                    animate={{
                        scale:[null,1,1.2,1.3]
                    }}
                    transition={{duration:1,delay:0.2,repeat:Infinity}}
                    className='flex items-center justify-center w-10 h-10 rounded-full bg-secondary/15'>
                    <FaPlay className='text-secondary'/> </motion.span>
                    See how it works</button>
               </motion.div>
            </div>
        </div>
        {/* Hero Image */}
        <div className='flex items-center justify-center'>
            <motion.img
            initial={{opacity: 0,x:200}}
            animate={{opacity:1,x:0}}
            transition={{type:'spring',stiffness:100 ,delay:0.2 ,duration:0.7}}
            src={HeroImage} alt="" className='w-[350px] md:w-[550px] xl:[700px]' />
        </div>
        </div>  
    </>
  )
}

export default Hero