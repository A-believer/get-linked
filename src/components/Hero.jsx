"use client"

import Image from "next/image"
import chain from "../assets/heroChain.png"
import bomb from "../assets/bombHero.png"
import bulb from "../assets/heroLightBulb.png"
import star from "../assets/heroI.png"
import person from "../assets/heroII.png"
import Link from "next/link"

export default function Hero() {
  return (
      <section className="flex flex-col gap-y-7 lg:mt-8 mt-5 xl:pl-32 lg:pl-20  xl:pr-0 px-8 border-b border-[#fff]/20">
          <div className="relative flex flex-col self-end lg:mr-14 mr-5">
              <p className="font-monts font-bold italic lg:text-4xl text-base whitespace-nowrap">Igniting a Revolution in HR Innovation</p>
              <div className="lg:w-[253px] w-[115px] lg:h-[11px] h-[7px] self-end">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255 17" fill="none">
  <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5"/>
</svg>
              </div>
          </div>
          
          <div className="flex xl:flex-row flex-col lg:mt-10 mt-5 items-center">
              
              <div className="relative">
                  
                  <Image src={bulb} alt="bulb" className="lg:w-[53px] md:w-[35px] w-[18px] lg:h-[73px] md:h-[45px] h-[26px] object-contain absolute xl:-top-[35px] lg:-top-[45px] -top-[10px] xl:right-[50px] lg:right-[140px] md:right-[100px] right-[70px]" />
                  
                  <div className="text-center xl:text-left flex flex-col gap-y-2">
                      
                      <p className="xl:text-[80px] md:text-[64px] sm:text-[40px] text-[32px] font-clash font-bold whitespace-nowrap lg:-mb-8 ">getlinked Tech</p>
                      
                      <p className="lg:text-[80px] text-[32px] font-clash font-bold whitespace-nowrap">Hackathon{" "}
                    <span className="text-purII">1.0</span>
                    <Image src={chain} alt="chain" className="lg:w-[86px] w-8 lg:h-[86px] h-8 object-contain inline"/>
                    <Image src={bomb} alt="bomb" className="lg:w-[58px] w-[22px] lg:h-[58px] h-[22px] object-contain inline"/>
                  </p>
                  <p className="pb-6 font-monts lg:w-[59%] w-full">
                    Participate in getlinked tech Hackathon 2023 stand 
                    a chance to win a Big prize
                  </p>

                  <Link
                      href={`/register`}
                      className="btn-grad px-12 py-3.5 rounded w-fit font-monts lg:mx-0 mx-auto">
                      Register
                  </Link>

                  <div className="lg:mt-16 mt-4 flex gap-x-3 lg:mx-0 mx-auto">
                          <p className="font-unca lg:text-[64px] text-5xl">00
                              <span className="font-monts text-sm">H</span></p>
                          <p className="font-unca lg:text-[64px] text-5xl">00
                              <span className="font-monts text-sm">M</span></p>
                          <p className="font-unca lg:text-[64px] text-5xl">00
                              <span className="font-monts text-sm">S</span></p>
                  </div>
              </div>   
              </div>
              
              <div className="relative">
                  <Image src={person} alt="vr-person" className="lg:w-[828px] w-[420px] lg:h-[600px] h-[362px] object-contain"/>
                  <Image src={star} alt="stars" className="lg:w-[667px] w-[338px] lg:h-[641px] h-[324px] object-contain absolute top-0 z-[9999] opacity-80"/>
              </div>
          
          </div>
    </section>
  )
}
