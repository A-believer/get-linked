import Image from "next/image";
import Title from "./Title";
import faqImage from "../../public/faqImage.png"
import {BiPlus} from "react-icons/bi"

export default function FAQs() {
  return (
    <section className="flex lg:flex-row-reverse flex-col border-b border-[#fff]/20 justify-between items-center gap-x-[80px] gap-y-[20px] lg:px-28 px-10 xl:py-20 lg:py-20 py-10 w-full">
          <div className="w-full h-full relative mx-auto">
              <Image loading="lazy" src={faqImage} alt="image" className="lg:w-full md:w-full w-full lg:h-full md:h-full h-full object-contain"/>
      </div>
      
      <div className="flex flex-col lg:gap-y-4 gap-y-2 md:text-left text-center lg:w-[95%] w-full">
        <Title
            text1={`Frequently Asked`}
            text2={`Questions`} />  
        <p>
            We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
        </p>
              
        <ul className="flex flex-col gap-y-7 md:text-base w-full md:whitespace-nowrap whitespace-normal lg:mt-12 mt-8 lg:text-sm lg:leading-7 text-xs leading-5 font-normal lg:text-justify text-left">
            <li className="flex justify-between items-center border-b border-purIII pb-4 xl:gap-x-5 gap-x-3">
                <span>Can I work on a project I started before the hackathon?</span>
                <span className="text-purIII md:self-center self-end"><BiPlus/></span>
            </li>
            <li className="flex justify-between items-center border-b border-purIII pb-4 xl:gap-x-5 gap-x-3">
                <span>What happens if I need help during the hackathon?</span>
                <span className="text-purIII"><BiPlus/></span>
            </li>
            <li className="flex justify-between items-center border-b border-purIII pb-4 xl:gap-x-5 gap-x-3">
                <span>What happens if I don&lsquo;t have an idea for a project?</span>
                <span className="text-purIII"><BiPlus/></span>
            </li>
            <li className="flex justify-between items-center border-b border-purIII pb-4 xl:gap-x-5 gap-x-3">
                <span>Can I join a team or do I have to come with one?</span>
                <span className="text-purIII"><BiPlus/></span>
            </li>
            <li className="flex justify-between items-center border-b border-purIII pb-4 xl:gap-x-5 gap-x-3">
                <span>What happens after the hackathon ends?</span>
                <span className="text-purIII"><BiPlus/></span>
            </li>
            <li className="flex justify-between items-center border-b border-purIII pb-4 xl:gap-x-5 gap-x-3">
                <span>Can I work on a project I started before the hackathon?</span>
                <span className="text-purIII"><BiPlus/></span>
            </li>
        </ul>
              
      </div>
    </section>
  )
}
