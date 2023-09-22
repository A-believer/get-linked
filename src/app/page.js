import Criteria from "@/components/Criteria";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Rule from "@/components/Rule";
import TimeLine from "@/components/TimeLine";


export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Rule />
      <Criteria />
      <FAQs />
      <TimeLine />
      <Footer/>
    </main>
  )
}
