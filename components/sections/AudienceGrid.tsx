import SectionHeading from "@/components/ui/SectionHeading";

const audiences = [
  {
    title: "Anxiety, overwhelm & panic",
    description:
      "For adults carrying constant worry, physical tension, disrupted sleep, or the feeling that something could go wrong at any moment.",
  },
  {
    title: "Trauma & chronic stress",
    description:
      "For adults working through single-incident trauma or longer-standing patterns shaped by childhood, relationships, or sustained stress.",
  },
  {
    title: "Burnout & perfectionism",
    description:
      "For thoughtful professionals, entrepreneurs, and creatives who feel disconnected after years of high internal pressure and pushing through.",
  },
];

export default function AudienceGrid() {
  return (
    <section className="bg-[#f7f5f0] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          eyebrow="Who I support"
          title="Support for what feels hard to carry alone."
          description="Therapy is tailored to your experiences, your goals, and the way stress is showing up in your life."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14">
          {audiences.map((audience, index) => (
            <article
              className="rounded-2xl border border-[#243e33]/10 bg-white p-7 shadow-[0_10px_30px_rgba(36,62,51,0.05)] sm:p-8"
              key={audience.title}
            >
              <p className="text-sm font-bold text-[#c88d6f]">0{index + 1}</p>
              <h3 className="mt-10 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#243e33]">
                {audience.title}
              </h3>
              <p className="mt-4 leading-7 text-[#5e6460]">{audience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
