export default function Logo() {
  return (
    <a href="#top" className="flex select-none items-end gap-2">
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        className="mb-1 shrink-0"
        aria-hidden
      >
        <path
          d="M2 20L20 4L38 20"
          stroke="#2F6FED"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 20L20 8.5L33 20"
          stroke="#FF7A1A"
          strokeWidth="2.2"
          strokeDasharray="3.2 3.2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="24" r="8.5" fill="#0B1E3D" />
        <circle cx="20" cy="24" r="8.5" stroke="#FF7A1A" strokeWidth="1.4" />
        <circle cx="20" cy="24" r="2.3" fill="#FF7A1A" />
        <circle cx="20" cy="18.5" r="1.5" fill="#EAF3FF" />
        <circle cx="24.5" cy="21.2" r="1.5" fill="#EAF3FF" />
        <circle cx="24.5" cy="26.8" r="1.5" fill="#EAF3FF" />
        <circle cx="15.5" cy="26.8" r="1.5" fill="#EAF3FF" />
        <circle cx="15.5" cy="21.2" r="1.5" fill="#EAF3FF" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[11px] font-semibold italic text-blue">
          my
        </span>
        <span className="font-display text-lg font-extrabold leading-[0.95] tracking-tight text-orange">
          School
          <span className="ml-1 text-navy">Movie Club</span>
        </span>
        <span className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-cat-red">
          Where Movies Meet Education
        </span>
      </span>
    </a>
  );
}
