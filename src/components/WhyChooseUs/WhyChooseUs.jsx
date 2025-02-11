import React from 'react'
import { GrYoga } from 'react-icons/gr'
import { FaDumbbell } from 'react-icons/fa'
import { GiGymBag } from 'react-icons/gi'
import {delay, motion} from 'framer-motion'
import { div } from 'motion/react-client'

const WhyChooseUs = () => {
    const WhyChooseUs = [
        {
            id:1,
            title:'one-on-one Teaching',
            desc:'All of our special education experts have a degree in special education',
            icon: <GrYoga/>,
            bgColor:'#0063ff',
            delay:0.3,
        },
        {
            id:2,
            title:'24/7 Tutor Availability',
            desc:'Our Teacher are always available to respond as quick as possible for you',
            link:'/',
            icon:<FaDumbbell/>,
            bgColor:'#73bc00',
            delay:0.6,
        },
        {
            id:3,
            title:'Interactive whiteboard',
            desc:'Your digital whiteboard equipped with audio and video chat features.',
            link:'/',
            icon:<GiGymBag/>,
            bgColor:'#fa6400',
            delay:0.9,
        }, {
            id:4,
            title:'Affordable Prices',
            desc:'choose an expert tutor based on your budget and per Hours',
            link:'/',
            icon:<GiGymBag/>,
            bgColor:'#fe6baa',
            delay:0.9,
        }
    ]
  return (
    <div className='bg-[#f9fafc]'>
      <div className="container py-24">
        {/* header section */}
        <div className='p-6 space-y-4 text-center max-w-[500px] mx-auto mb-5 '>
            <h1 className='font-semibold text-orange-600 uppercase'>Why Choose Us </h1>
            <p className='text-3xl font-semibold'>Benefits of online tutoring services with us</p>
        </div>
        {/* cards section */}
        <div  className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 '>
          {
            WhyChooseUs.map(({link,title,desc,id,icon,bgColor,delay}) =>{
              return(
                <motion.div
                key={id}
                 initial={{opacity: 0,x:100}}
                 whileInView={{opacity: 1,x:0}}
                 transition={{duration:1,delay:delay}}
                className='p-6 space-y-4 shadow-[0_0_22px_rgba(0,0,0,0.65)] rounded-xl'>
                  {/* icon section */}
                  <div style={{backgroundColor:bgColor}} className='flex items-center justify-center w-10 h-10 text-white rounded-lg'>
                    <div className='text-2xl'>
                      {icon}
                    </div>
                  </div>
                  <p className='font-semibold'>{title}</p>
                  <p className='text-sm text-gray-500'>{desc}</p>

                </motion.div>
              )
            } )
          }
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs