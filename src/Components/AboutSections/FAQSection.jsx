import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Apakah bergabung dipungut biaya?",
    a: "Tidak. Bergabung dengan SHIGE CREW tidak dipungut biaya.",
  },
  {
    q: "Apakah anggota mendapatkan gaji?",
    a: "Saat ini belum terdapat gaji tetap. Seiring berkembangnya organisasi dan program yang dijalankan, peluang tersebut dapat terbuka di masa depan.",
  },
  {
    q: "Apakah semua anggota bisa ikut turnamen?",
    a: "Roster dipilih berdasarkan hasil latihan, performa, kedisiplinan, dan kebutuhan tim.",
  },
];

export default function FAQSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">

      <p className="text-purple-400 uppercase tracking-widest font-semibold">
        FAQ
      </p>

      <h2 className="mt-4 text-4xl font-black">
        Pertanyaan yang Sering Ditanyakan
      </h2>

      <div className="mt-10 space-y-6">

        {faqs.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7"
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="text-purple-400" />

              <h3 className="font-bold text-lg">
                {item.q}
              </h3>
            </div>

            <p className="mt-4 text-zinc-400 leading-8">
              {item.a}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}