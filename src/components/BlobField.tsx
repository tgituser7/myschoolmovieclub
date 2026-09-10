type BlobSpec = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  color: string;
  variant?: "a" | "b";
  opacity?: number;
};

export default function BlobField({
  blobs,
  className = "",
}: {
  blobs: BlobSpec[];
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`blob ${b.variant === "b" ? "blob-b" : ""}`}
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
            width: b.size,
            height: b.size,
            background: b.color,
            opacity: b.opacity ?? 0.55,
            animationDelay: `${i * 1.3}s`,
          }}
        />
      ))}
    </div>
  );
}
