export default function Loading({
  text = "Memuat..."
}) {
  return (
    <div className="flex-center flex-col gap-4 py-12">
      <div className="loading" />

      <p className="text-sm text-zinc-400">
        {text}
      </p>
    </div>
  );
}