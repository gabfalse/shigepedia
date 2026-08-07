export default function RecruitmentCard() {
  return (
    <section className="mx-auto max-w-2xl">
      <a
        href="/recruitment"
        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500 hover:bg-violet-500/10"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-2xl">
            🚀
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Open Recruitment
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Bergabung bersama SHIGE CREW sebagai pemain, kreator, atau talent.
            </p>
          </div>
        </div>

        <span className="text-xl text-zinc-500 transition group-hover:translate-x-1 group-hover:text-violet-400">
          →
        </span>
      </a>
    </section>
  );
}