import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-hidden bg-[#f7f5f0] px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-24"
      id="top"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#69776e]">
            Santa Monica, California &amp; secure telehealth
          </p>
          <h1
            className="mt-5 font-serif text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-[#243e33] sm:text-6xl lg:text-7xl"
            id="hero-heading"
          >
            A calmer, more sustainable way <em className="font-normal">forward.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#4f5b54] sm:text-xl sm:leading-9">
            Therapy for adults feeling overwhelmed by anxiety, stress, burnout, or the lingering impact of past experiences.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] border border-[#c88d6f]/45 sm:-inset-6" />
          <div className="relative aspect-[0.75] overflow-hidden rounded-[1.5rem] bg-[#dedbd2] shadow-[0_24px_60px_rgba(36,62,51,0.14)]">
            <Image
              alt="Dr. Maya Reynolds smiling in a white blazer"
              className="object-cover object-center"
              fill
              priority
              sizes="(max-width: 1023px) min(100vw - 3rem, 448px), 45vw"
              src="/images/maya-reynolds-portrait.jpg"
            />
          </div>
          <p className="relative ml-auto mt-5 max-w-52 text-right text-sm leading-6 text-[#5e6460]">
            A warm, collaborative space for reflection, practical tools, and depth-oriented work.
          </p>
        </div>
      </div>
    </section>
  );
}
