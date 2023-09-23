import Link from "next/link";
import {FaInstagram, FaFacebookF} from "react-icons/fa"
import { FaXTwitter, FaLocationDot } from "react-icons/fa6"
import { AiOutlineLinkedin } from "react-icons/ai"
import {BiSolidPhoneCall} from "react-icons/bi"


export default function Footer() {
  return (
    <footer className="font-monts bg-[#100B20] flex flex-col gap-y-14 sm:pt-20 sm:pb-14 py-10 lg:px-[200px] md:px-[80px] px-10">
      <div className="flex flex-col md:flex-row lg:gap-x-[100px] sm:gap-x-[50px]  items-center gap-y-12">
        <div className="flex flex-col lg:gap-y-5 gap-y-2 justify-center self-start">
          <Link href={`/`} className="font-clash lg:text-3xl text-xl tracking-normal leading-9 font-bold">get<span className="text-purII">linked</span></Link>
          <p className="text-xs xl:w-[80%] w-full">
            Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
          </p>

          <p className="mt-10 flex gap-5 whitespace-nowrap text-xs">Terms of Use<span className="text-purIII">|</span>Privacy Policy</p>
        </div>
        <ul className="whitespace-nowrap flex flex-col gap-y-3 text-xs self-start">
          <li className="text-purII">Useful Links</li>
          <li>Overview</li>
          <li>Timeline</li>
          <li>FAQs</li>
          <li>Register</li>
          <li className="flex gap-x-2 items-center">
            <span className="text-purII">Follow us</span>
            <span><FaInstagram/></span>
            <span><FaXTwitter/></span>
            <span><FaFacebookF/></span>
            <span><AiOutlineLinkedin/></span>
          </li>
        </ul>
        <ul className="text-xs flex flex-col gap-y-6 self-start">
          <li className="text-purII">Contact Us</li>
          <li className="flex gap-x-4 items-center whitespace-nowrap">
            <span><BiSolidPhoneCall/></span>
            <span>+234 679 81819</span>
          </li>
          <li className="flex gap-x-4">
            <span><FaLocationDot/></span>
            <span>27,Alara Street Yaba 100012 Lagos State</span>
          </li>
        </ul>
      </div>

      <p className="text-center text-xs">All rights reserved. © getlinked Ltd.</p>
    </footer>
  )
}
