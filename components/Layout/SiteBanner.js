import Link from "next/link";

export default function SiteBanner() {
  return (
    <div
      className="w-full bg-[#eee] px-3 py-1.5 text-center text-xs text-neutral-800 shadow-sm md:px-4 md:py-2 md:text-sm"
      role="region"
      aria-label="Community update"
    >
      <p className="mx-auto max-w-4xl font-inter leading-snug md:leading-relaxed">
        Hispanic Hackers currently offers online mentorship and a Discord community.
        If you&apos;re interested in taking over live events in Austin, feel free to{" "}
        <Link
          href="/contact"
          className="font-semibold text-cyan underline decoration-cyan/70 underline-offset-2 transition hover:text-cyan/90 hover:decoration-cyan"
        >
          reach out to us
        </Link>
        !
        <span className="hidden md:inline">
          {" "}
          See our{" "}
          <Link
            href="/resources"
            className="font-semibold text-cyan underline decoration-cyan/70 underline-offset-2 transition hover:text-cyan/90 hover:decoration-cyan"
          >
            Resources page
          </Link>{" "}
          for more.
        </span>
      </p>
    </div>
  );
}
