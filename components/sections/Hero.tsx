import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-hidden bg-[#f7f5f0] px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-24"
      id="top"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
        <figure className="mx-auto w-full max-w-sm bg-white p-5 sm:p-7 lg:mx-0">
          <div className="relative aspect-[0.77] overflow-hidden bg-[#dedbd2]">
            <Image
              alt="Dr. Maya Reynolds smiling in a white blazer"
              className="object-cover object-center"
              fill
              priority
              sizes="(max-width: 1023px) min(100vw - 3rem, 384px), 29vw"
              src="/images/maya-reynolds-portrait.jpg"
            />
          </div>
        </figure>

        <div className="max-w-3xl lg:border-t lg:border-[#ddd7cc] lg:pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#69776e]">
            Santa Monica, California &amp; secure telehealth
          </p>
          <h1
            className="mt-6 font-serif text-5xl font-normal leading-[1.06] tracking-[-0.04em] text-[#343735] sm:text-6xl lg:text-[4.5rem]"
            id="hero-heading"
          >
            A calmer, more sustainable way <em className="font-normal">forward.</em>
          </h1>
          <p className="mt-9 max-w-2xl text-lg font-normal leading-8 tracking-[-0.01em] text-[#555954] sm:text-xl sm:leading-9">
            Therapy for adults feeling overwhelmed by anxiety, stress, burnout, or the lingering impact of past experiences.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#243e33] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1b2f27] focus-visible:outline-offset-4"
              href="#about"
            >
              Explore therapy
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#243e33]/25 px-6 text-sm font-semibold text-[#243e33] transition-colors hover:border-[#243e33] hover:bg-white focus-visible:outline-offset-4"
              href="#about"
            >
              Learn about my approach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
