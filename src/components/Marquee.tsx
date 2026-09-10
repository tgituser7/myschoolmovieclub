import { TicketIcon } from "./icons";

export default function Marquee({
  items,
  bg = "bg-navy",
  fg = "text-white",
  accent = "text-orange",
}: {
  items: string[];
  bg?: string;
  fg?: string;
  accent?: string;
}) {
  const track = [...items, ...items];
  return (
    <div className={`grain overflow-hidden border-y-2 border-navy py-3 ${bg}`}>
      <div className="flex w-max items-center gap-8 marquee-track">
        {track.map((item, i) => (
          <span
            key={i}
            className={`flex shrink-0 items-center gap-8 font-display text-sm font-bold uppercase tracking-wide ${fg}`}
          >
            {item}
            <TicketIcon className={`h-4 w-4 shrink-0 ${accent}`} />
          </span>
        ))}
      </div>
    </div>
  );
}
