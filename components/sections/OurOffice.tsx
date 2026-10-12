import Image from "next/image";

import SectionHeading from "@/components/ui/SectionHeading";

export default function OurOffice() {
  return (
    <section className="bg-[#f9f8f5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28" id="office">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:pt-8">
            <SectionHeading
              eyebrow="Our office"
              title="A quiet, private space in Santa Monica."
              description="Designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment."
            />
            <address className="mt-8 not-italic text-base leading-7 text-[#4f5b54]">
              <span className="block font-semibold text-[#243e33]">In-person appointments</span>
              123th Street 45 W<br />
              Santa Monica, CA 90401
            </address>
            <p className="mt-6 max-w-md text-base leading-7 text-[#5e6460]">
              In-person therapy is available from the Santa Monica office, with secure telehealth sessions for clients located in California.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
            <figure className="relative min-h-80 overflow-hidden rounded-2xl bg-[#dedbd2] sm:min-h-112">
              <Image
                alt="Sunlit therapy office with a sofa, armchair, and tall windows"
                className="object-cover"
                fill
                sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), 35vw"
                src="/images/maya-reynolds-office-window.jpg"
              />
            </figure>
            <figure className="relative min-h-64 overflow-hidden rounded-2xl bg-[#dedbd2] sm:mt-12 sm:min-h-96">
              <Image
                alt="Therapy office with seating, shelving, and natural light"
                className="object-cover"
                fill
                sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), 30vw"
                src="/images/maya-reynolds-office-shelving.jpg"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
