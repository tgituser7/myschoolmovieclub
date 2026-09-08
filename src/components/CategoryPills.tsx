import {
  AtomIcon,
  BankIcon,
  ChevronRightIcon,
  HeartIcon,
  HeartPulseIcon,
  LeafIcon,
  PersonIcon,
  StarFilledIcon,
} from "./icons";

const categories = [
  { label: "Values & Ethics", icon: HeartIcon, bg: "bg-cat-red/10", fg: "text-cat-red" },
  { label: "Environment", icon: LeafIcon, bg: "bg-cat-green/10", fg: "text-cat-green" },
  { label: "Science & Discovery", icon: AtomIcon, bg: "bg-cat-blue/10", fg: "text-cat-blue" },
  { label: "History & Culture", icon: BankIcon, bg: "bg-cat-purple/10", fg: "text-cat-purple" },
  { label: "Life Skills", icon: PersonIcon, bg: "bg-cat-orange/10", fg: "text-cat-orange" },
  { label: "Health & Wellness", icon: HeartPulseIcon, bg: "bg-cat-teal/10", fg: "text-cat-teal" },
  { label: "Motivation", icon: StarFilledIcon, bg: "bg-cat-gold/10", fg: "text-cat-gold" },
];

export default function CategoryPills() {
  return (
    <section id="categories" className="scroll-mt-20 bg-sky-2 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-blue">
              Browse by Category
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-navy sm:text-[2.2rem]">
              Explore Our Movie Collection
            </h2>
          </div>
          <a
            href="#categories"
            className="flex items-center gap-1 font-sans text-sm font-semibold text-blue hover:text-blue-dark"
          >
            View All Categories
            <ChevronRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {categories.map((c) => (
            <a
              key={c.label}
              href="#movies"
              className="group flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <span className={`flex h-10 w-10 items-center justify-center rounded-full ${c.bg} ${c.fg}`}>
                <c.icon className="h-5 w-5" />
              </span>
              <span className="font-sans text-sm font-semibold text-slate-dark">
                {c.label}
              </span>
              <ChevronRightIcon className="h-4 w-4 text-slate/50 transition-transform group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
