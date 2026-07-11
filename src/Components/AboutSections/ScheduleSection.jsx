import { CalendarDays, Clock3 } from "lucide-react";

const schedules = [
  {
    activity: "Latihan Tim",
    day: "Selasa & Jumat",
    time: "19.30 - 22.00 WIB",
  },
  {
    activity: "Scrim",
    day: "Menyesuaikan lawan",
    time: "Umumnya malam hari",
  },
  {
    activity: "Mabar Komunitas",
    day: "Minggu",
    time: "20.00 WIB",
  },
  {
    activity: "Meeting",
    day: "Jika diperlukan",
    time: "-",
  },
];

export default function ScheduleSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">

      <p className="text-purple-400 uppercase tracking-widest font-semibold">
        Schedule
      </p>

      <h2 className="mt-4 text-4xl font-black">
        Jadwal Kegiatan
      </h2>

      <div className="mt-10 grid gap-5">

        {schedules.map((item) => (
          <div
            key={item.activity}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h3 className="font-bold text-xl">{item.activity}</h3>
              <p className="text-zinc-400 mt-2 flex items-center gap-2">
                <CalendarDays size={18} />
                {item.day}
              </p>
            </div>

            <div className="text-purple-300 flex items-center gap-2">
              <Clock3 size={18} />
              {item.time}
            </div>
          </div>
        ))}

      </div>

      <div className="mt-8 rounded-2xl border border-purple-500/20 bg-purple-500/10 p-6 text-zinc-300">
        Jadwal dapat berubah sesuai kebutuhan tim dan akan diumumkan melalui
        Discord resmi SHIGE CREW.
      </div>

    </section>
  );
}