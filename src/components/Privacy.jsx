import Image from "next/image";
import Title from "./Title";
import privacy from "../../public/privacy.png"


export default function Privacy() {
  return (
    <section className="font-monts flex lg:flex-row flex-col items-center border-t border-[#fff]/20 justify-between lg:py-20 md:py-16 py-14 lg:pl-32 md:px-10 px-6 w-full gap-y-36 gap-x-[100px]">
        <div className="lg:text-left text-center xl:w-[55%] w-full">
              <Title text1={`Privacy Policy and`} text2={`Terms`} />
              <p className="md:text-sm text-xs my-5">Last updated on September 12, 2023</p>
              <p className="lg:mb-16 mb-10 md:text-sm text-xs">Below are our privacy & policy, which outline a lot of goodies. It’s our aim to always take of our participant</p>


              <div className="text-center md:py-14 md:pl-16 md:pr-9 py-10 pl-4 pr-4 border border-purIII bg-[#fff]/5">
                  <p className="md:mb-6 mb-5">
                      At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
                  </p>
                  <p className="lg:text-base text-sm text-purII font-bold text-left">Licensing Policy</p>
                  <p className="font-bold lg:text-base text-sm text-left mt-2">Here are the terms of our Standard License:</p>

                  <p className="flex justify-center items-center gap-x-[14px] text-left mt-8">
                      <span className="self-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/><path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2"/></svg>
                      </span>
                      <span>The Standard License grants you a non-exclusive right to navigate and register for our event</span>
                  </p>

                  <p className="flex justify-center items-center gap-x-[14px] text-left mt-3">
                      <span className="self-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/><path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2"/></svg>
                      </span>
                      <span>You are licensed to use the item available at any free source sites, for your project developement</span>
                  </p>

                  <button
                  className="btn-grad lg:px-12 px-8 lg:py-3.5 py-2.5 rounded w-fit lg:mx-0 mx-auto mt-9 mb-5">
                  Read More
              </button>
              </div>
          </div>      
          
          <div className="relative lg:mt-0 mt-36 self-end w-full">
                  <svg className="absolute lg:left-0 md:left-16 left-0 lg:bottom-[250px] md:bottom-[450px] bottom-40 xl:w-full w-full" xmlns="http://www.w3.org/2000/svg" width="530" height="648" viewBox="0 0 530 648" fill="none"><path d="M530 294.545C530 458.018 416.933 610.887 265 648C113.067 610.887 0 458.018 0 294.545V117.818L265 0L530 117.818V294.545ZM265 589.091C375.417 559.636 471.111 428.269 471.111 301.025V156.109L265 64.2109L58.8889 156.109V301.025C58.8889 428.269 154.583 559.636 265 589.091ZM347.444 294.545V250.364C347.444 209.127 306.222 176.727 265 176.727C223.778 176.727 182.556 209.127 182.556 250.364V294.545C164.889 294.545 147.222 312.218 147.222 329.891V432.982C147.222 453.6 164.889 471.273 182.556 471.273H344.5C365.111 471.273 382.778 453.6 382.778 435.927V332.836C382.778 312.218 365.111 294.545 347.444 294.545ZM309.167 294.545H220.833V250.364C220.833 226.8 241.444 212.073 265 212.073C288.556 212.073 309.167 226.8 309.167 250.364V294.545Z" fill="url(#paint0_linear_110_134)" fillOpacity="0.14" /><defs><linearGradient id="paint0_linear_110_134" x1="265" y1="0" x2="265" y2="648" gradientUnits="userSpaceOnUse"><stop stopColor="#903AFF" /><stop offset="1" stopColor="#FF26B9" /></linearGradient></defs>
                  </svg>
                  <Image loading="lazy" src={privacy} alt="privacy image" className="w-full lg:h-[700px] h-full  object-contain"/>
            </div>
    </section>
  )
}
