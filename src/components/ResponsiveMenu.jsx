import React from 'react'
import {motion ,AnimatePresence} from 'framer-motion'

const ResponsiveMenu = ({isOpen}) => {
  return (
   <AnimatePresence mode='wait'>
  {
    isOpen && <motion.div
    initial={{opacity:0,y:-100}}
    animate={{opacity:1,y:50}}
    exit={{opacity:0,y:-100}}
    transition={{duration:0.3}}
    className='absolute top-0 left-0 z-20 w-full h-screen lg:hidden '
    >
      <div className='py-10 m-6 text-xl font-semibold text-white uppercase bg-gradient-to-b from-yellow-200 to-orange-400 rounded-3xl'>
      <ul className='flex flex-col items-center justify-center gap-10'>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
      </div>
    </motion.div>
  }
   </AnimatePresence>
  )
}

export default ResponsiveMenu