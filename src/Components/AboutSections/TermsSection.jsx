import { ShieldCheck } from "lucide-react";

const terms = [
  "Memiliki sikap sportif dan saling menghormati.",
  "Aktif di Discord atau media komunikasi resmi tim.",
  "Bersedia mengikuti latihan, scrim, maupun kegiatan komunitas.",
  "Tidak menggunakan cheat atau tindakan yang merugikan tim.",
  "Menjaga nama baik SHIGE CREW di dalam maupun luar permainan.",
  "Mampu bekerja sama dan menerima evaluasi dari tim.",
  "Mematuhi seluruh aturan yang berlaku selama menjadi anggota.",
];

export default function TermsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">

      <p className="text-purple-400 font-semibold uppercase tracking-widest">
        Requirements
      </p>

      <h2 className="mt-4 text-4xl font-black">
        Syarat & Ketentuan Join
      </h2>

      <div className="mt-10 space-y-4">

        {terms.map((term) => (
          <div
            key={term}
            className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
          >
            <ShieldCheck className="text-purple-400 mt-1 shrink-0" />

            <p className="text-zinc-300">
              {term}
            </p>

          </div>
        ))}

      </div>

      <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6 text-yellow-300">
        SHIGE CREW berhak menerima maupun menolak calon anggota berdasarkan
        hasil seleksi serta kebutuhan organisasi.
      </div>

    </section>
  );
}