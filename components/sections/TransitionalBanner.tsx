import Image from "next/image";

export default function TransitionalBanner() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
        <div className="relative min-h-72 overflow-hidden rounded-2xl bg-[#dedbd2] sm:min-h-96">
          <Image
            alt="Natural light in Dr. Maya Reynolds' Santa Monica therapy office"
            className="object-cover"
            fill
            sizes="(max-width: 1023px) calc(100vw - 3rem), 52vw"
            src="/images/maya-reynolds-office-window.jpg"
          />
        </div>
        <p className="max-w-xl font-serif text-4xl font-normal leading-tight tracking-[-0.035em] text-[#243e33] sm:text-5xl">
          Making room to understand where you have been can help you feel more steady in where you are headed.
        </p>
      </div>
    </section>
  );
}
