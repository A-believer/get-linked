import Criteria from "@/components/Criteria";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Partners from "@/components/Partners";
import Privacy from "@/components/Privacy";
import Prizes from "@/components/Prizes";
import Rule from "@/components/Rule";
import TimeLine from "@/components/TimeLine";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Hero />
        <Introduction />
        <Rule />
        <Criteria />
        <FAQs />
        <TimeLine />
        <Prizes />
        <Partners />
        <Privacy/>
        <Footer/>
      </Suspense>
      
    </>
  )
}
