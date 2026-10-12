import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AudienceGrid from "@/components/sections/AudienceGrid";
import ExpertiseTags from "@/components/sections/ExpertiseTags";
import FaqSection from "@/components/sections/FaqSection";
import Hero from "@/components/sections/Hero";
import IntroValidation from "@/components/sections/IntroValidation";
import OurOffice from "@/components/sections/OurOffice";
import Philosophy from "@/components/sections/Philosophy";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f5f0] text-[#222523]">
        <Hero />
        <IntroValidation />
        <AudienceGrid />
        <ExpertiseTags />
        <Philosophy />
        <OurOffice />
        <FaqSection />

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-medium">
          A space to slow down and reconnect.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7">
          Therapy can offer room to reflect, understand what you are carrying, and develop more sustainable ways of living and working.
        </p>
        <a
          className="mt-7 inline-block rounded-full
            bg-[#425b4a] px-7 py-4 text-white"
          href="#contact"
        >
          Get in touch
        </a>
      </section>

      <Footer />
      </main>
    </>
  );
}
