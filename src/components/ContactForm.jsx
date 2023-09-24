import { AiOutlineLinkedin } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6"
import {FaInstagram, FaFacebookF} from "react-icons/fa"

export default function ContactForm() {
  return (
      <form className="flex flex-col gap-y-10 text-base text-[#fff] font-monts">
          <label htmlFor="teamName">
              <input
                  type="text"
                  id="teamName"
                  placeholder="Team's Name"
                  className="bg-[transparent] py-[14px] pl-[29px] border border-[#fff] rounded w-full"/>
          </label>

          <label htmlFor="email">
              <input
                  type="email"
                  id="email"
                  placeholder="Email"
              className="bg-[transparent] py-[14px] pl-[29px] border border-[#fff] rounded w-full"/>
          </label>

          <textarea
              htmlFor="teamName"
              cols="24"
              placeholder="Message"
          className="bg-[transparent] py-[14px] pl-[29px] border border-[#fff] rounded w-full"></textarea>
          <button className="btn-grad px-12 py-2.5 rounded w-fit mx-auto">Submit</button>

          <div className="mx-auto text-center lg:hidden block">
          <p className='text-purIII'>Share on</p>
          <p className='flex gap-x-4'>
            <span><FaInstagram/></span>
            <span><FaXTwitter/></span>
            <span><FaFacebookF/></span>
            <span><AiOutlineLinkedin/></span>
          </p>
        </div>
    </form>
  )
}
