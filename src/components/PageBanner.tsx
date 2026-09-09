export default function PageBanner({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-to-b from-sky-2 to-white px-6 py-14 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue">
          {kicker}
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl font-extrabold text-navy sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-2xl text-balance leading-relaxed text-slate">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
