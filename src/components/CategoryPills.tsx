import {
  AtomIcon,
  BankIcon,
  BoltIcon,
  ChevronRightIcon,
  HeartIcon,
  HeartPulseIcon,
  LeafIcon,
  PersonIcon,
} from "./icons";

const categories = [
  { label: "Values & Ethics", icon: HeartIcon, bg: "bg-cat-red", },
  { label: "Environment", icon: LeafIcon, bg: "bg-cat-green" },
  { label: "Science & Discovery", icon: AtomIcon, bg: "bg-cat-blue" },
  { label: "History & Culture", icon: BankIcon, bg: "bg-cat-purple" },
  { label: "Life Skills", icon: PersonIcon, bg: "bg-cat-orange" },
  { label: "Health & Wellness", icon: HeartPulseIcon, bg: "bg-cat-teal" },
  { label: "Motivation", icon: BoltIcon, bg: "bg-cat-gold" },
];

export default function CategoryPills() {
  return (
    <section id="categories" className="relative overflow-hidden bg-sky py-16 sm:py-24">
      <div className="dots pointer-events-none absolute inset-0 text-navy/[0.08]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="inline-block -rotate-1 rounded-full border-2 border-navy bg-yellow px-3 py-1 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-navy">
              Browse by Category
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-[2.4rem]">
              Explore Our Movie Collection
            </h2>
          </div>
          <a
            href="#categories"
            className="flex items-center gap-1 rounded-full border-2 border-navy bg-white px-4 py-2 font-display text-sm font-bold text-navy shadow-hard-sm transition-transform hover:-translate-y-0.5"
          >
            View All
            <ChevronRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {categories.map((c, i) => (
            <a
              key={c.label}
              href="#movies"
              className={`group flex items-center gap-3 rounded-2xl border-2 border-navy bg-white px-5 py-4 shadow-hard-sm transition-transform hover:-translate-y-1 hover:shadow-hard ${
                i % 2 === 0 ? "sm:rotate-1" : "sm:-rotate-1"
              } hover:rotate-0`}
            >
              <span className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy text-white ${c.bg}`}>
                <c.icon className="h-5 w-5" />
              </span>
              <span className="font-display text-sm font-bold text-navy">
                {c.label}
              </span>
              <ChevronRightIcon className="h-4 w-4 text-navy/40 transition-transform group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
