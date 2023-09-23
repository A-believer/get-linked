import React from 'react'
import TimelineMobile from './TimelineMobile'
import TimelineDesktop from './TimelineDesktop'

export default function TimeLine() {
  return (
      <section className='font-monts flex flex-col justify-center items-center w-full mb-20'>
          <div className='flex justify-center flex-col items-center lg:my-20 my-10 lg:w-[30%] w-[60%] text-center'>
              <h3 className='md:text-[30px] text-xl font-bold'>Timeline</h3>
              <p className=''>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
          </div>

          {/* Desktop View  */}
          <div className='lg:flex hidden items-center flex-col gap-5 lg:mx-[90px]'>
              <TimelineDesktop/>
          </div>

          
          {/* Mobile view  */}
          <div className='block lg:hidden space-y-10 md:mx-[230px] mx-[20px]'>
              <TimelineMobile/>
          </div>
    </section>
  )
}
