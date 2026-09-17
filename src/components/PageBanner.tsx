import Image from "next/image";
import WaveDivider from "./WaveDivider";

export default function PageBanner({
  kicker,
  title,
  subtitle,
  bgImage,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  bgImage?: string;
}) {
  return (
    <>
      <section
        className={`relative overflow-hidden px-6 py-16 sm:py-24 lg:px-10 ${
          bgImage ? "" : "bg-cream"
        }`}
      >
        {bgImage ? (
          <>
            <Image
              src={bgImage}
              alt=""
              aria-hidden
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/70" />
          </>
        ) : null}
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="inline-block -rotate-1 rounded-full border-2 border-navy bg-yellow px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-navy shadow-hard-sm">
            {kicker}
          </p>
          <h1
            className={`mt-5 text-balance font-display text-4xl font-extrabold sm:text-5xl ${
              bgImage ? "text-white" : "text-navy"
            }`}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              className={`mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed ${
                bgImage ? "text-white/80" : "text-slate-dark"
              }`}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      </section>
      <WaveDivider color="#ffffff" />
    </>
  );
}
