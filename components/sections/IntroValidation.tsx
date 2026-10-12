import SectionHeading from "@/components/ui/SectionHeading";

export default function IntroValidation() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28" id="about">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <SectionHeading
          eyebrow="A space to slow down"
          title="You do not have to keep pushing through."
        />
        <div className="max-w-2xl space-y-5 text-base leading-8 text-[#4f5b54] sm:text-lg">
          <p>
            Many adults arrive in therapy looking capable on the outside, while privately feeling exhausted, stuck in overthinking, or emotionally on edge.
          </p>
          <p>
            Dr. Maya Reynolds offers a grounded space to understand what is happening beneath the surface, including constant worry, tension in the body, difficulty sleeping, or the effects of earlier experiences on confidence, relationships, and safety.
          </p>
          <p className="border-l-2 border-[#c88d6f] pl-5 font-serif text-2xl leading-snug text-[#243e33] sm:text-3xl">
            Therapy can be a place to reconnect with yourself and move forward at a pace that feels supportive.
          </p>
        </div>
      </div>
    </section>
  );
}
