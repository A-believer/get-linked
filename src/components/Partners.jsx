import Image from "next/image";
import partnerI from "../../public/partnerI.png"
import partnerII from "../../public/partnerII.png"
import partnerIII from "../../public/partnerIII.png"
import partnerIV from "../../public/partnerIV.png"
import partnerV from "../../public/partnerV.png"
import partnerVI from "../../public/partnerVI.png"


export default function Partners() {
  return (
    <section className="lg:py-32 md:py-20 py-14 w-full mx-auto lg:space-y-20 md:space-y-14 space-y-8 flex flex-col items-center">
      <div className="text-center xl:w-[30%] lg:w-[50%] md:w-[60%] w-[80%] mx-auto space-y-3">
        <h3 className='md:text-[30px] text-xl font-bold'>Partners and Sponsors</h3>
        <p className='md:text-sm text-xs'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
      </div>


      <div className="flex items-center border border-purIII rounded-md lg:px-28 md:px-8 px-6 lg:py-24 md:py-16 py-8 ">
        <div className="flex flex-col justify-between items-center md:space-y-6 space-y-3 lg:mb-0 md:mb-2">
          <Image loading="lazy" src={partnerI} alt="partnerI" className="lg:w-[120px] md:w-[75px] w-[32px] lg:h-[113px] md:h-[72px] h-[30px] object-contain" />
          <hr className="md:h-[4px] h-[2px] lg:w-[258px] md:w-[168px] w-[68px] bg-purIII mx-auto border-0"/>
          <Image loading="lazy" src={partnerIV} alt="partnerIV" className="lg:w-[147px] md:w-[80px] w-[39px] lg:h-[110px] md:h-[60px] h-[29px] object-contain"/>
        </div>

        <div className="flex flex-col lg:gap-y-[160px] md:gap-y-[100px] gap-y-12">
          <hr className="border-0 rotate-90 md:h-[4px] h-[2px] lg:w-[112px] md:w-[70px] w-[30px] bg-purIII"/>
          <hr className="border-0 rotate-90 md:h-[4px] h-[2px] lg:w-[112px] md:w-[70px] w-[30px] bg-purIII"/>
        </div>
          
        <div className="flex flex-col justify-between items-center md:space-y-6 space-y-3">
          <Image loading="lazy" src={partnerII} alt="partnerII" className="lg:w-[214px] md:w-[125px] w-[57px] lg:h-[40px] md:h-[25px] h-[11px] object-contain"/>
          <hr  className="md:h-[4px] h-[2px] lg:w-[258px] md:w-[168px] w-[68px] bg-purIII mx-auto border-0"/>
          <Image loading="lazy" src={partnerV} alt="partnerV" className="lg:w-[214px] md:w-[125px] w-[57px] lg:h-[40px] md:h-[25px] h-[11px] object-contain"/>
        </div>

        <div className="flex flex-col lg:gap-y-[160px] md:gap-y-[100px] gap-y-12">
          <hr className="border-0 rotate-90 md:h-[4px] h-[2px] lg:w-[112px] md:w-[70px] w-[30px] bg-purIII"/>
          <hr className="border-0 rotate-90 md:h-[4px] h-[2px] lg:w-[112px] md:w-[70px] w-[30px] bg-purIII"/>
        </div>

        <div className="flex flex-col justify-between items-center md:space-y-6 space-y-3 lg:mb-16 md:mb-12 mb-2">
          <Image loading="lazy" src={partnerIII} alt="partnerIII" className="lg:w-[132px] md:w-[75px] w-[35px] lg:h-[107px] md:h-[60px] h-[28px] object-contain" />
          <hr  className="md:h-[4px] h-[2px] lg:w-[258px] md:w-[168px] w-[68px] bg-purIII mx-auto border-0"/>
          <Image loading="lazy" src={partnerVI} alt="partnerVI" className="lg:w-[230px] md:w-[120px] w-[69px] lg:h-[45px] md:h-[30px] h-[21px] object-contain"/>
        </div>
      </div>
    </section>
  )
}
