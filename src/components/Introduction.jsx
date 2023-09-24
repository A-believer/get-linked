import Image from "next/image";
import introImage from "../../public/introImage.png"
import arrow from "../../public/introImageII.png"
import Title from "./Title";

export default function Introduction() {
  return (
    <section className="flex md:flex-row flex-col border-b border-[#fff]/20 justify-between items-center gap-x-[80px] gap-y-[30px] lg:px-28 px-12 lg:py-16 md:py-14 py-7 w-full">
          <div className="w-full h-full relative mx-auto">
              <Image loading="lazy" src={introImage} alt="image" className="lg:w-[490px] w-[264px] lg:h-[477px] h-[257px] object-contain"/>
              <Image loading="lazy" src={arrow} alt="otherimage" className="lg:w-[49px] w-[19.5px] lg:h-[58px] h-[22.8px] md:absolute relative lg:mx-0 mx-auto right-0 bottom-0 -rotate-[70.2deg]"/>
      </div>
      
      <div className="flex flex-col lg:gap-y-4 gap-y-2 lg:text-left text-center lg:w-[95%] md:w-[85%] w-full">
        <Title
                  text1={`Introduction to getlinked tech`}
                  text2={`Hackathon 1.0`} />    
              <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&lsquo;re a coding genius, a  design maverick, or a concept wizard, you&lsquo;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, thats what we&lsquo;re all about!
              </p>
      </div>
    </section>
  )
}
