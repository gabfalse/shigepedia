import { ChevronDown } from "lucide-react";
import { useState } from "react";

import Loading from "../CommonComponents/Loading";
import useFAQ from "../../Hooks/useFAQ";

export default function FAQSection() {
  const { faq, loading } = useFAQ();

  const [open, setOpen] = useState(null);

  if (loading) {
    return (
      <section className="section" id="faq">
        <Loading text="Memuat FAQ..." />
      </section>
    );
  }

  return (
    <section
      id="faq"
      className="section"
    >
      <div className="container stack-lg">
        <div className="max-content text-center stack-sm">
          <span className="badge badge-primary">
            FAQ
          </span>

          <h2 className="title-lg">
            Pertanyaan
            <span className="gradient-text">
              {" "}
              Yang Sering Ditanyakan
            </span>
          </h2>

          <p className="subtitle">
            Masih bingung? Temukan jawabannya di bawah
            ini.
          </p>
        </div>

        <div className="mx-auto max-w-4xl stack-sm">
          {faq.map((item, index) => (
            <div
              key={item.id}
              className="card"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex-between w-full gap-5 text-left"
              >
                <h3 className="font-semibold">
                  {item.question}
                </h3>

                <ChevronDown
                  size={20}
                  className={`transition ${
                    open === index
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="subtitle">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}