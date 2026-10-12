type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#69776e]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#243e33] sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-[#5e6460] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
