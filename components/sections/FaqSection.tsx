import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "Who does Dr. Reynolds work with?",
    answer:
      "Dr. Reynolds offers therapy for adults. Many clients are thoughtful, high-achieving people who feel overwhelmed by anxiety, stress, burnout, or the lingering effects of past experiences.",
  },
  {
    question: "What concerns can therapy support?",
    answer:
      "Her work often focuses on anxiety, panic, trauma, chronic stress, burnout, perfectionism, and the ways earlier experiences can affect relationships, confidence, and a sense of safety.",
  },
  {
    question: "What is Dr. Reynolds' approach to therapy?",
    answer:
      "Her approach is warm, collaborative, and grounded. She integrates cognitive-behavioral therapy, EMDR, mindfulness-based practices, and body-oriented techniques, with practical structure and space for reflection.",
  },
  {
    question: "How is trauma work approached?",
    answer:
      "Trauma work is paced carefully, with attention to safety, stabilization, and helping clients feel more regulated in daily life. The goal is to work at a pace that feels manageable and supportive.",
  },
  {
    question: "Are sessions available in person or online?",
    answer:
      "Dr. Reynolds offers in-person therapy from her Santa Monica office and secure telehealth sessions for clients located in California.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28" id="faqs">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="A few helpful details before you begin."
          description="Every therapy relationship is different. These answers offer a starting point for understanding Dr. Reynolds' practice."
        />
        <div className="divide-y divide-[#243e33]/15 border-y border-[#243e33]/15">
          {faqs.map((faq) => (
            <details className="group" key={faq.question}>
              <summary className="flex min-h-18 cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-xl leading-snug text-[#243e33] marker:content-none sm:text-2xl">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-[#243e33]/20 font-sans text-xl font-normal transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-12 leading-7 text-[#5e6460]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
