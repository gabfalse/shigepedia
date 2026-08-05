export default function RecruitmentCard() {
  return (
    <section className="mt-10 w-full">
      <a
        href="/about"
        className="primary-btn group"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-purple-200">
            Open Recruitment
          </p>

          <h2 className="mt-1 text-lg font-bold">
            🚀 Join SHIGE CREW
          </h2>

          <p className="mt-1 text-sm text-purple-100/80">
            Bergabung bersama komunitas gamer & kreator terbaik.
          </p>
        </div>

        <span className="text-3xl transition group-hover:translate-x-1">
          →
        </span>
      </a>
    </section>
  );
}