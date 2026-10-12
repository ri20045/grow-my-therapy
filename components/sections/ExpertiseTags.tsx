import SectionHeading from "@/components/ui/SectionHeading";

const areasOfFocus = [
  "Anxiety",
  "Panic",
  "Trauma",
  "Burnout",
  "Perfectionism",
  "Chronic stress",
  "CBT",
  "EMDR",
  "Mindfulness-based practices",
  "Body-oriented techniques",
];

export default function ExpertiseTags() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28" id="services">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          eyebrow="Areas of focus"
          title="Care that meets both the emotional and physical sides of stress."
          description="Dr. Reynolds integrates practical, evidence-based methods with space for reflection and depth."
        />
        <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3 lg:mt-14" role="list">
          {areasOfFocus.map((area) => (
            <li
              className="rounded-full border border-[#243e33]/15 bg-[#f7f5f0] px-5 py-3 text-sm font-semibold text-[#314a3d] sm:px-6 sm:text-base"
              key={area}
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
