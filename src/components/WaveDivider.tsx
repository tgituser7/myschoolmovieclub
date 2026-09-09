export default function WaveDivider({
  color = "#ffffff",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${
        flip ? "rotate-180" : ""
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="h-[46px] w-full sm:h-[64px]"
      >
        <path
          d="M0 40c120 30 240 40 360 34s240-30 360-30 240 30 360 30 240-24 360-30v46H0z"
          fill={color}
        />
      </svg>
    </div>
  );
}
