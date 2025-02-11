import React from 'react'
import {motion} from 'framer-motion'
const Banner = ({image,title,subtitle,link,tag,reverse}) => {
  return (
    <div className='bg-[#f9f9f9] pb-14'>
    <div className='container'>
   <div className='grid grid-cols-1 space-y-6 md:grid-cols-2 md:space-y-0'>
   {/* banner image section*/}
   <div className={`flex justify-start items-center ${reverse && 'md:order-last md:justify-end'}`}>
    <motion.img
    initial={{opacity: 0,scale:0.5}}
    whileInView={{opacity:1,scale:1}}
    transition={{type:'spring',stiffness:100,delay:0.2}}
    src={image} alt="" className='w-[400px] h-full object-cover' />
   </div>
   {/* banner text section */}
   <div className='flex flex-col justify-center text-center md:text-left
   space-y-4 lg:max-w-[500px]'>
    <motion.p
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
   transition={{duration:1,delay:0.5}}
    className='text-sm font-semibold text-orange-600 capitalize'>{tag}</motion.p>
    <motion.p
     initial={{opacity:0,y:100}}
     whileInView={{opacity:1,y:0}}
    transition={{duration:1,delay:0.7}}
    className='text-xl font-semibold capitalize lg:text-2xl'>{title}</motion.p>
    <motion.p
     initial={{opacity:0,y:100}}
     whileInView={{opacity:1,y:0}}
    transition={{duration:1,delay:0.9}}
    className='text-sm text-slate-500'>{subtitle}</motion.p>
    <motion.div
     initial={{opacity:0,y:100}}
     whileInView={{opacity:1,y:0}}
    transition={{duration:1,delay:1.1}}
    className='flex justify-center md:justify-start'>
        <button className='primary-btn !mt-5'>Get start</button>
    </motion.div>
   </div>
   </div>
    </div>
    </div>
  )
}

export default Banner