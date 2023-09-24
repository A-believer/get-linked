import ContactForm from '@/components/ContactForm'
import React from 'react'
import { AiOutlineLinkedin } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6"
import {FaInstagram, FaFacebookF} from "react-icons/fa"


export default function Contact() {
  return (
    <section className='lg:flex hidden font-monts justify-center items-center w-screen h-full pt-[50px] pb-[115px] gap-x-[200px]'>
      <div className='flex flex-col gap-y-4 text-base'>
        <h3 className='font-clash text-purIII text-[32px] font-bold'>Get in touch</h3>
        <p className='flex flex-col'>
          <span>Contact</span>
          <span>Information</span>
        </p>
        <p className='flex flex-col'>
          <span>27, Alara Street</span>
          <span>Yaba 100012</span>
          <span>Lagos State</span>
        </p>
        <p>Call Us : 07067981819</p>
        <p className='flex flex-col'>
          <span>we are open from Monday-Friday</span>
          <span>08:00am - 05:00pm</span>
        </p>
        <div>
          <p className='text-purIII mb-1'>Share on</p>
          <p className='flex gap-x-4'>
            <span><FaInstagram/></span>
            <span><FaXTwitter/></span>
            <span><FaFacebookF/></span>
            <span><AiOutlineLinkedin/></span>
          </p>
        </div>
      </div>
      <div className='lg:px-[90px] px-[45px] lg:py-[70px] rounded-xl bg-[#fff] bg-opacity-[0.03]'>
        <h3 className='font-clash text-purIII text-[20px] font-semibold'>Questions or need assistance?</h3>
        <h3 className='font-clash text-purIII text-[20px] font-semibold mb-5'>Let us know  about it!</h3>
        <ContactForm/>
      </div>
    </section>
  )
}
