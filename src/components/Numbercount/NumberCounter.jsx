import React from 'react'
import CountUp from 'react-countup';
const NumberCounter = () => {
  return (
    <div className='py-12 text-white bg-gradient-to-t to-secondary from-[#080546]'>
        <div className='container grid grid-cols-2 gap-8 md:grid-cols-4'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                     start={0} 
                     end={898} 
                     enableScrollSpy={true}
                     scrollSpyOnce={true}
                     />
                </p>
                <p>Export Tutor</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p  className='text-3xl font-semibold'>
                    <CountUp
                    end={2000}
                    separator=','
                    suffix='+'
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    />
                </p>
                <p>Hours content</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p  className='text-3xl font-semibold'>
                    <CountUp
                    end={298}
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    />
                </p>
                <p> Subject and courses</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p  className='text-3xl font-semibold'>
                <CountUp
                    end={72878}
                    separator=','
                    suffix='+'
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    />
                </p>
                <p>Active student</p>
            </div>
        </div>
    </div>
  )
}

export default NumberCounter