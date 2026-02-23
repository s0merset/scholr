import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of documents can I upload?",
    answer:
      "Scholr supports PDFs, Word documents, PowerPoint presentations, and plain text files. We're constantly adding support for more formats including EPUB and scanned documents with OCR.",
  },
  {
    question: "How accurate is the AI analysis?",
    answer:
      "Our AI is built on state-of-the-art language models fine-tuned for academic content. It typically achieves 95%+ accuracy in extracting key concepts and definitions. You can always review and edit the AI's output.",
  },
  {
    question: "Can I export my flashcards to Anki?",
    answer:
      "Yes. Scholr supports exporting flashcards in Anki-compatible format (.apkg), as well as CSV and plain text. You can also use flashcards directly within the Scholr platform.",
  },
  {
    question: "Is my data secure?",
    answer:
      "All documents are encrypted at rest and in transit. We never share your data with third parties, and you can delete your documents at any time. We are SOC 2 Type II compliant.",
  },
  {
    question: "Does Scholr support languages other than English?",
    answer:
      "Yes, Scholr currently supports over 20 languages including Spanish, French, German, Chinese, Japanese, and Arabic. Multi-language support is available on all plans.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. You will continue to have access to Pro features until the end of your billing period.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left column -- header */}
          <div className="lg:col-span-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
              FAQ
            </span>
            <h2 className="mt-3 font-heading text-4xl leading-tight text-foreground md:text-5xl text-balance">
              Common questions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Everything you need to know about Scholr. Can&#39;t find what
              you&#39;re looking for? Reach out to our support team.
            </p>
          </div>

          {/* Right column -- accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="border-b border-border py-1"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-foreground text-[15px]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
