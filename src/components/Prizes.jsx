import Image from "next/image";
import Title from "./Title";
import prizesI from "../../public/prizeImage.png"
import prizesII from "../../public/prizeImageII.png"
import prizesIII from "../../public/prizeImageIII.png"
import prizesIV from "../../public/prizeImageIV.png"


export default function Prizes() {
  return (
      <section className="flex flex-col lg:gap-y-[90px] justify-center items-center font-monts relative bg-[#000]/30 py-20">
          
          <div className="xl:ml-[800px] lg:ml-[500px] ml-0 lg:mr-[200px] mr-0  xl:mb-32 lg:mb-0 mb-10 space-y-2.5 w-[90%] lg:w-[30%] text-center lg:text-left">
              <Title text1={`Prizes and`} text2={`Rewards`}/>
              <p className="md:text-base text-xs">Highlight of the prizes or rewards for winners and for participants.
              </p>
          </div>

          <div className="flex xl:flex-row flex-col items-center gap-x-[30px] relative">
              <Image src={prizesI} alt="prizesI" className="md:w-[548px] w-[321px] md:h-[482px] h-[282px] object-cover lg:self-start self-auto xl:mb-2 lg:mb-60 md:mb-52 mb-28" />
              
              <div className="relative flex md:gap-x-[30px] gap-x-3">
                  
                  <div className="text-center mb:pb-5 pb-2 md:px-6 px-3 md:pt-32 pt-10 text-xs leading-5 border border-purIII rounded-lg bg-[#fff]/5">
                      <Image src={prizesII} alt="prizesII" className="md:w-[180px] w-[75px] md:h-[180px] h-[75px] object-contain absolute md:-top-20 -top-10 left-[5px] object-center" />
                      <p className="flex flex-col font-bold">
                      <span className="md:text-[40px] md:leading-[36px]">2nd</span>
                      <span className="md:text-2xl md:leading-[50px] font-semibold">Runner</span>
                      <span className="md:text-[32px] md:leading-[70px] text-purIII">N300,000</span>
                  </p>
                  </div>
                  
              <div className="text-center mb:pb-5 pb-2 md:px-6 px-3 md:pt-32 pt-10 text-xs leading-5 border border-purII rounded-lg bg-[#fff]/5">
                  <Image src={prizesIII} alt="prizesIII" className="md:w-[296px] w-[125px] md:h-[296px] h-[125px] object-contain absolute md:-top-48 -top-24 md:left-[200px] left-[80px] object-center" />
                  <p className="flex flex-col font-bold">
                      <span className="md:text-[40px] md:leading-[36px]">1st</span>
                      <span className="md:text-2xl md:leading-[50px] font-semibold">Runner</span>
                      <span className="md:text-[32px] md:leading-[70px] text-purII">N400,000</span>
                  </p>
                  </div>
                  
              <div className="text-center mb:pb-5 pb-2 md:px-6 px-3  md:pt-32 pt-10 text-xs leading-5 border border-purIII rounded-lg bg-[#fff]/5">
                      <Image src={prizesIV} alt="prizesIV" className="md:w-[180px] w-[75px] md:h-[180px] h-[75px] object-contain absolute md:-top-20 -top-10 right-[5px] object-center" />
                      <p className="flex flex-col font-bold">
                      <span className="md:text-[40px] md:leading-[36px]">3rd</span>
                      <span className="md:text-2xl md:leading-[50px] font-semibold">Runner</span>
                      <span className="md:text-[32px] md:leading-[70px] text-purIII">N150,000</span>
                  </p>
              </div>
              </div>
              
          </div>
    </section>
  )
}
