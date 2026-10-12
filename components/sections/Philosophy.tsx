import SectionHeading from "@/components/ui/SectionHeading";

export default function Philosophy() {
  return (
    <section className="bg-[#ede6dd] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28" id="approach">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
        <SectionHeading
          eyebrow="How I work"
          title="Practical support, thoughtfully paced."
          description="Sessions are structured enough to feel steady, while leaving room for reflection, depth, and the questions that matter to you."
        />
        <div className="space-y-5 border-t border-[#243e33]/20 pt-7 text-base leading-8 text-[#4f5b54] sm:text-lg">
          <p>
            Dr. Reynolds takes a warm, collaborative approach. You are actively involved in the process, with care paced around safety, stabilization, and what feels manageable in daily life.
          </p>
          <p>
            Her goal goes beyond symptom relief: helping you build insight, resilience, and a stronger relationship with yourself over time.
          </p>
        </div>
      </div>
    </section>
  );
}
