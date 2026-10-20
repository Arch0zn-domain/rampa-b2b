import { useId } from "react";

export function Seal({ className }: { className?: string }) {
  const id = `rampa-ring-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Rampa">
      <circle cx="60" cy="60" r="58" className="fill-asphalt" />
      <circle cx="60" cy="60" r="54" className="fill-none stroke-amber" strokeWidth="2" />
      <circle cx="60" cy="60" r="46" className="fill-none stroke-paper" strokeWidth="1" />
      <circle cx="60" cy="60" r="40" className="fill-paper" />
      <path id={id} d="M18 66a44 44 0 0 1 84 0" fill="none" />
      <text
        className="fill-amber"
        style={{ fontSize: 11, letterSpacing: "3px", fontFamily: "IBM Plex Mono, ui-monospace, monospace" }}
      >
        <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">
          RAMPA
        </textPath>
      </text>
      <path
        d="M36 70h30l7-14h14"
        className="fill-none stroke-amber"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M40 70v7h34" className="fill-none stroke-ink" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="49" cy="79" r="3.4" className="fill-ink" />
      <circle cx="68" cy="79" r="3.4" className="fill-ink" />
    </svg>
  );
}
