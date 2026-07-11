import {
  FileText,
  MessageCircle,
  Users,
  ClipboardCheck,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Isi Formulir",
    desc: "Lengkapi formulir pendaftaran online.",
  },
  {
    icon: MessageCircle,
    title: "Masuk Discord",
    desc: "Bergabung ke server resmi SHIGE CREW.",
  },
  {
    icon: Users,
    title: "Perkenalan",
    desc: "Kenalan dengan komunitas dan pengurus.",
  },
  {
    icon: ClipboardCheck,
    title: "Trial",
    desc: "Mengikuti evaluasi dan latihan bersama.",
  },
  {
    icon: Trophy,
    title: "Resmi Bergabung",
    desc: "Menjadi member dan berkesempatan menjadi roster.",
  },
];

export default function JoinFlowSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">

      <p className="text-purple-400 uppercase tracking-widest font-semibold">
        Join Flow
      </p>

      <h2 className="mt-4 text-4xl font-black">
        Alur Bergabung
      </h2>

      <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-5 gap-6">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/10">
                <Icon className="text-purple-400" />
              </div>

              <div className="mt-4 text-purple-400 font-bold">
                {index + 1}
              </div>

              <h3 className="mt-2 font-bold">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                {step.desc}
              </p>
            </div>
          );
        })}

      </div>

    </section>
  );
}