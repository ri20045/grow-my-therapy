import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Anxiety & panic",
    description:
      "For constant worry, tension in the body, difficulty sleeping, or the feeling that you are always bracing for something to go wrong. Therapy can help you understand what is keeping the cycle in place and develop practical ways to feel more regulated.",
  },
  {
    title: "Trauma recovery & EMDR",
    description:
      "For adults impacted by single-incident trauma or longer-standing patterns connected to childhood, relationships, or chronic stress. This work is paced carefully, with a focus on safety, stabilization, and your daily sense of control.",
  },
  {
    title: "Burnout & perfectionism",
    description:
      "For professionals, entrepreneurs, and creatives who have spent years pushing through stress. Therapy can be a space to slow down, reconnect with yourself, and build more sustainable ways of living and working.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28" id="featured-services">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          eyebrow="Featured services"
          title="Support for the concerns that may be shaping your everyday life."
          description="Dr. Reynolds combines practical tools with depth-oriented work, tailored to your goals and experiences."
        />
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <article className="flex flex-col rounded-2xl border border-[#243e33]/10 bg-[#f7f5f0] p-7 sm:p-8" key={service.title}>
              <h3 className="font-serif text-3xl font-medium leading-tight tracking-[-0.025em] text-[#243e33]">
                {service.title}
              </h3>
              <p className="mt-5 leading-7 text-[#5e6460]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
