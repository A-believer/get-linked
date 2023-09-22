import Title from "./Title";
import criteriaImage from "../../public/criteriaImage.png"
import Image from "next/image";


export default function Criteria() {
  return (
    <section className="flex lg:flex-row flex-col border-b border-[#fff]/20 justify-between items-center gap-x-[80px] gap-y-[20px] lg:px-28 px-20 xl:pt-20 lg:pt-10 py-5 w-full">
          <div className="w-full h-full relative mx-auto">
              <Image src={criteriaImage} alt="image" className="lg:w-[710px] md:w-[510px] w-[332px] lg:h-[587px] md:h-[487px] h-[275px] object-contain"/>
        <svg className="absolute lg:flex hidden xl:top-[10px] lg:top-[90px] xl:left-[80px] lg:left-[30px] -z-[5]" xmlns="http://www.w3.org/2000/svg" width="134" height="134" viewBox="0 0 134 134" fill="none">
            <circle cx="67" cy="67" r="67" fill="url(#paint0_linear_70_6)"/>
            <defs>
            <linearGradient id="paint0_linear_70_6" x1="134" y1="67" x2="3.69183" y2="67" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8F01FE"/>
            <stop offset="1" stop-color="#FF2674"/>
            </linearGradient>
             </defs>
        </svg>
      </div>
      
      <div className="flex flex-col lg:gap-y-4 gap-y-2 md:text-left text-center lg:w-[95%] w-full">
        <Title
                  text1={`Judging Criteria`}
                  text2={`Key attributes`} />  
              
              <ul className="flex flex-col gap-y-7 md:text-base text-sm">
                  <li><span className="text-purIII">Innovation and Creativity: </span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</li>

                  <li><span className="text-purIII">Functionality: </span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</li>

                  <li><span className="text-purIII">Impact and Relevance: </span> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</li>
                  <li><span className="text-purIII">Technical Complexity: </span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</li>
                  <li><span className="text-purIII">Adherence to Hackathon Rules: </span>  Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</li>
              </ul>
              <button
                  className="btn-grad lg:px-12 px-8 lg:py-3.5 py-2.5 rounded w-fit lg:mx-0 mx-auto mt-9 mb-5">
                  Register
              </button>
              
      </div>
    </section>
  )
}
