const pillars = [
  {
    n: "01",
    title: "Interest",
    body: "Children lean toward a good story long before they lean toward a lesson.",
    color: "text-cat-red",
    bg: "bg-cat-red/10",
  },
  {
    n: "02",
    title: "Excitement",
    body: "A great film holds a classroom's attention the way little else can.",
    color: "text-cat-orange",
    bg: "bg-cat-orange/10",
  },
  {
    n: "03",
    title: "Growth",
    body: "The right movie, at the right time, teaches as much as it entertains.",
    color: "text-cat-teal",
    bg: "bg-cat-teal/10",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-10">
        <div>
          <p className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue">
            Why Film
          </p>
          <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            The best medium there is for shaping a young mind
          </h2>
          <p className="mt-5 max-w-xl text-balance leading-relaxed text-slate">
            Movies are all about interest and excitement, and children are
            always drawn to a good story. My School Movie Club uses that
            pull deliberately, turning screening time into a chance to
            educate as much as entertain. A well-chosen film can do real
            work in a student&apos;s development — carrying knowledge and
            social skills into their lives long after the credits roll.
          </p>
          <p className="mt-6 max-w-xl rounded-r-xl border-l-4 border-orange bg-orange/5 py-3 pl-5 font-display text-base font-semibold text-navy">
            Meaningful movies enable students in their mental development.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {pillars.map((p) => (
            <div
              key={p.n}
              className="flex items-start gap-5 rounded-2xl bg-sky-2 p-6 shadow-soft"
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${p.bg} ${p.color}`}>
                {p.n}
              </span>
              <div>
                <p className="font-display text-lg font-bold text-navy">
                  {p.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
