import Image from "next/image";
import partnerI from "../../public/partnerI.png"
import partnerII from "../../public/partnerII.png"
import partnerIII from "../../public/partnerIII.png"
import partnerIV from "../../public/partnerIV.png"
import partnerV from "../../public/partnerV.png"
import partnerVI from "../../public/partnerVI.png"


export default function Partners() {
  return (
    <section className="">
      <div>
        <h3 className='md:text-[30px] text-xl font-bold'>Partners and Sponsors</h3>
        <p className=''>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
      </div>

      <div>
        <div>
          <Image src={partnerI} alt="partnerI" />
          <hr />
          <Image src={partnerII} alt="partnerII" />
          <hr />
          <Image src={partnerIII} alt="partnerIII"/>
        </div>
        <div>
          <hr />
          <hr />
          <hr />
        </div>
        <div>
          <Image src={partnerIV} alt="partnerIV" />
          <hr />
          <Image src={partnerV} alt="partnerV" />
          <hr />
          <Image src={partnerVI} alt="partnerVI"/>
        </div>
      </div>
    </section>
  )
}
