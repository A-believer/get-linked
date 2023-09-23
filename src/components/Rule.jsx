import Image from "next/image";
import introImage from "../../public/rulesImage.png"
import Title from "./Title";

export default function Rule() {
  return (
      <section className="flex md:flex-row-reverse flex-col border-b border-[#fff]/20 justify-between items-center gap-x-[80px] gap-y-[20px] lg:px-28 px-10 lg:py-0 py-5 w-full">
          <div className="w-full h-full relative mx-auto">
              <Image src={introImage} alt="image" className="lg:w-[664px] md:w-[350px] w-[294px] lg:h-[664px] md:h-[350px] h-[382px] object-contain"/>
              <svg className="absolute lg:flex hidden xl:top-[130px] lg:top-[190px] xl:right-[110px] lg:right-[40px] -z-[5]" xmlns="http://www.w3.org/2000/svg" width="134" height="134" viewBox="0 0 134 134" fill="none">
  <circle cx="67" cy="67" r="67" fill="url(#paint0_linear_70_6)"/>
  <defs>
    <linearGradient id="paint0_linear_70_6" x1="134" y1="67" x2="3.69183" y2="67" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8F01FE"/>
      <stop offset="1" stop-color="#FF2674"/>
    </linearGradient>
  </defs>
</svg>
      </div>
      
      <div className="flex flex-col lg:gap-y-4 gap-y-2 lg:text-left text-center lg:w-[95%] w-full">
        <Title
                  text1={`Rules and`}
                  text2={`Guidelines`} />    
              <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&lsquo;re a coding genius, a design maverick, or a concept wizard, you&lsquo;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&lsquo;s what we&lsquo;re all about!
              </p>
      </div>
    </section>
  )
}
