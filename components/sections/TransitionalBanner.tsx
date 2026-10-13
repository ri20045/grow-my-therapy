import Image from "next/image";

export default function TransitionalBanner() {
  return (
    <section className="relative isolate flex h-96 items-center overflow-hidden bg-[#29241f] px-4 sm:h-[26rem] sm:px-6 lg:h-[32rem] lg:px-8">
      <Image
        alt=""
        className="object-cover"
        fill
        sizes="100vw"
        src="/images/adult.png"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#29241f]/55" />
      <div className="relative mx-auto max-w-5xl">
        <p className="text-center font-serif text-4xl font-normal leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
          Making room to understand where you have been can help you feel more steady in where you are headed.
        </p>
      </div>
    </section>
  );
}
