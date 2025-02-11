import React, { useState } from 'react'
import { NavBarMenu } from '../mockData/data'
import { MdComputer,MdMenu } from 'react-icons/md'
import {motion , AnimatePresence} from 'framer-motion'
import ResponsiveMenu from './ResponsiveMenu';


const NavBar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <>
    <motion.div
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{duration:0.5,delay:0.5}}
    >
         <div className='container flex items-center justify-between py-6 '>
            {/* logo section */}
            <div className='flex items-center gap-2 text-2xl font-bold'>
                <MdComputer className='text-3xl text-secondary'/>
              <p>E-Tutor</p>
            </div>
            {/* menu section */}
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-6'>
                {
                    NavBarMenu.map(({id,title,link}) => {
                       return(
                        <li key={id}>
                        <a 
                        href={link}
                        className='inline-block px-2 py-1 text-sm font-semibold text-gray-600 xl:text-base xl:px-3 hover:text-secondary'
                        >{title}</a>
                    </li>
                       )
                    })
                }
              </ul>
            </div>
            {/* CTA Button section */}
            <div className='hidden space-x-6 lg:block'>
                <button className='font-semibold'>Sign in</button>
                <button className='px-6 py-2 font-semibold text-white rounded bg-gradient-to-r from-cyan-500 to-secondary' >Register</button>
            </div>
            {/* mobile Hamburger Menu */}
              <div className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                <MdMenu className='text-4xl'/>
              </div>

         </div>
    </motion.div>

     {/* Mobile Sidebar section */}
     <ResponsiveMenu isOpen={isOpen} />
    </>
  )
}

export default NavBar