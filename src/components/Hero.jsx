"use client"

import Image from "next/image"
import chain from "../../public/heroChain.png"
import bomb from "../../public/bombHero.png"
import bulb from "../../public/heroLightBulb.png"
import star from "../../public/heroI.png"
import perso from "../../public/heroII.png"
import Link from "next/link"

export default function Hero() {
  return (
      <section className="flex flex-col gap-y-7 lg:mt-8 mt-5 mx-0 xl:pl-32 lg:pl-20 px-8 border-b border-[#fff]/20 relative">
          <div className="relative flex flex-col md:self-end self-auto lg:mr-14 mr-0">
              <p className="font-monts font-bold italic lg::text-4xl md:text-lg text-xs lg:whitespace-nowrap whitespace-normal">Igniting a Revolution in HR Innovation</p>
              <div className="lg:w-[253px] w-[115px] lg:h-[11px] h-[7px] self-end">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255 17" fill="none">
  <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" strokeWidth="5"/>
</svg>
              </div>
          </div>
          
          <div className="flex xl:flex-row flex-col lg:mt-10 mt-5 items-center">
              
              <div className="relative">
                  
                  <Image loading="lazy" src={bulb} alt="bulb" className="lg:w-[53px] md:w-[35px] w-[18px] lg:h-[73px] md:h-[45px] h-[26px] object-contain absolute xl:-top-[35px] lg:-top-[45px] -top-[10px] xl:right-[50px] lg:right-[140px] md:right-[100px] right-[70px]" />
                  
                  <div className="text-center xl:text-left flex flex-col gap-y-2">
                      
                      <p className="xl:text-[80px] md:text-[64px] sm:text-[40px] text-[32px] font-clash font-bold whitespace-nowrap md:-mb-8 ">getlinked Tech</p>
                      
                      <p className="lg:text-[80px] md:text-[64px] sm:text-[40px] text-[32px] font-clash font-bold whitespace-nowrap">Hackathon{" "}
                    <span className="text-purII">1.0</span>
                    <Image loading="lazy" src={chain} alt="chain" className="lg:w-[86px] w-8 lg:h-[86px] h-8 object-contain inline"/>
                    <Image loading="lazy" src={bomb} alt="bomb" className="lg:w-[58px] w-[22px] lg:h-[58px] h-[22px] object-contain inline"/>
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
              
              <div className="relative mt-10">
                  <Image loading="lazy" src={perso} alt="person" className="lg:w-[700px] w-[200px] lg:h-[500px] h-[162px] object-contain"/>
                  <Image loading="lazy" src={star} alt="stars" className="w-full h-full object-contain absolute top-0 opacity-80"/>
              </div>
          
          </div>
    </section>
  )
}
