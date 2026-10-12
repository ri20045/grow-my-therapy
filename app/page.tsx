import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

const expertise = [
  "Trauma",
  "Anxiety",
  "Family Conflict",
  "Depression",
  "Relationships",
  "Children & Teens",
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f5f0] text-[#222523]">
        <Hero />

      {/* Introduction */}
      <section id="about" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-widest">
            A Space for Growth
          </p>
          <h2 className="text-3xl font-medium md:text-4xl">
            Your story deserves to be heard.
          </h2>
          <p className="mt-6 leading-8 text-[#666c64]">
            Everyone deserves a safe and supportive space
            to navigate life&apos;s challenges. Our approach
            centers on understanding, care and connection.
          </p>
        </div>
      </section>

      {/* Areas of expertise */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-medium">
            Our Areas of Expertise
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2
            lg:grid-cols-3">
            {expertise.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-[#e6e0d6]
                  bg-white p-7 transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-medium">{item}</h3>
                <p className="mt-3 leading-7 text-[#666c64]">
                  Support tailored to individual needs,
                  experiences and personal goals.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="approach" className="bg-[#e9ede5] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium">
            A thoughtful approach to therapy
          </h2>
          <p className="mt-6 leading-8 text-[#555f55]">
            Beginning therapy is a personal decision.
            We aim to make the process welcoming, supportive
            and centered on your needs.
          </p>
        </div>
      </section>

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
