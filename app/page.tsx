import Header from "@/components/layout/Header";
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

      {/* Appointment CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-medium">
          Take the first step toward support.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7">
          Finding the right therapist can make a difference.
          Reach out to learn more about getting started.
        </p>
        <a
          href="#contact"
          className="mt-7 inline-block rounded-full
            bg-[#425b4a] px-7 py-4 text-white"
        >
          Get in Touch
        </a>
      </section>

      {/* Contact */}
      <footer id="contact" className="bg-[#303d34]
        px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-medium">
            Conejo Valley Family Counseling
          </h2>
          <p className="mt-4 text-white/80">
            Contact details from the reference website
            will go here.
          </p>
          <p className="mt-8 text-sm text-white/60">
            © Conejo Valley Family Counseling
          </p>
        </div>
      </footer>
      </main>
    </>
  );
}
