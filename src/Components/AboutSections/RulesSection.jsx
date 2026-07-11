import {
  Shield,
  HeartHandshake,
  MessageCircle,
  CalendarClock,
  Users,
  Ban,
  AlertTriangle,
} from "lucide-react";

const rules = [
  {
    icon: HeartHandshake,
    title: "Saling Menghormati",
    description:
      "Hormati seluruh anggota, staff, maupun lawan bermain. Tidak diperbolehkan melakukan bullying, pelecehan, diskriminasi, ataupun tindakan yang merendahkan orang lain.",
  },
  {
    icon: Shield,
    title: "Bermain Sportif",
    description:
      "Seluruh anggota wajib bermain secara jujur. Penggunaan cheat, exploit, script, maupun tindakan yang merusak integritas permainan tidak diperbolehkan.",
  },
  {
    icon: MessageCircle,
    title: "Komunikasi yang Baik",
    description:
      "Gunakan bahasa yang sopan, hindari toxic, spam, provokasi, ataupun penyebaran informasi palsu di dalam komunitas.",
  },
  {
    icon: CalendarClock,
    title: "Komitmen & Kehadiran",
    description:
      "Roster maupun anggota aktif diharapkan mengikuti latihan, scrim, atau kegiatan komunitas sesuai jadwal dan memberikan konfirmasi apabila berhalangan hadir.",
  },
  {
    icon: Users,
    title: "Utamakan Kerja Sama",
    description:
      "SHIGE CREW dibangun sebagai komunitas yang saling membantu. Terbuka terhadap kritik, mau belajar, dan mengutamakan kepentingan tim di atas kepentingan pribadi.",
  },
  {
    icon: Ban,
    title: "Larangan",
    description:
      "Dilarang melakukan penipuan, menjual nama SHIGE CREW untuk kepentingan pribadi, membocorkan strategi tim, maupun tindakan lain yang merugikan komunitas.",
  },
];

export default function RulesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">

      <p className="text-purple-400 uppercase tracking-widest font-semibold">
        Community Rules
      </p>

      <h2 className="mt-4 text-4xl font-black">
        Peraturan SHIGE CREW
      </h2>

      <p className="mt-5 max-w-3xl text-zinc-400 leading-8">
        Seluruh anggota SHIGE CREW diharapkan menjaga sikap, sportivitas,
        dan nama baik komunitas. Peraturan ini dibuat untuk menciptakan
        lingkungan yang aman, nyaman, serta mendukung perkembangan setiap
        anggota.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">

        {rules.map((rule) => {
          const Icon = rule.icon;

          return (
            <div
              key={rule.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 hover:border-purple-500 transition"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">
                <Icon className="text-purple-400" size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {rule.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                {rule.description}
              </p>
            </div>
          );
        })}

      </div>

      {/* Sanksi */}

      <div className="mt-12 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-8">

        <div className="flex items-center gap-3">

          <AlertTriangle className="text-yellow-400" />

          <h3 className="text-2xl font-bold">
            Sanksi Pelanggaran
          </h3>

        </div>

        <ul className="mt-6 space-y-3 text-zinc-300 leading-8">

          <li>• Teguran lisan atau tertulis untuk pelanggaran ringan.</li>

          <li>• Peringatan resmi bagi anggota yang mengulangi pelanggaran.</li>

          <li>• Penangguhan sementara dari aktivitas komunitas apabila diperlukan.</li>

          <li>• Pengeluaran dari SHIGE CREW untuk pelanggaran berat atau tindakan yang merugikan komunitas.</li>

        </ul>

        <p className="mt-6 text-sm text-zinc-400">
          SHIGE CREW berhak mengubah, menambah, atau memperbarui peraturan
          sesuai kebutuhan organisasi demi menjaga lingkungan komunitas yang
          sehat, profesional, dan sportif.
        </p>

      </div>

    </section>
  );
}