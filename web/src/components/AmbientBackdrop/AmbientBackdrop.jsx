/**
 * Lightweight ambient backdrop — CSS-only motion, no scroll listeners.
 */
const AmbientBackdrop = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft navy orb — top right */}
      <div className="absolute -right-24 top-[12%] h-[420px] w-[420px] rounded-full bg-dh-navy/[0.04] blur-3xl animate-drift-slow" />

      {/* Soft blue wash — mid left */}
      <div className="absolute -left-32 top-[45%] h-[360px] w-[360px] rounded-full bg-dh-blue/[0.07] blur-3xl animate-drift-slower" />

      {/* Small cream accent ring */}
      <div className="absolute right-[18%] top-[28%] h-40 w-40 rounded-full border border-dh-navy/10 animate-pulse-soft" />

      {/* Thin architectural line */}
      <div className="absolute bottom-[20%] left-[10%] hidden h-px w-1/3 bg-gradient-to-r from-transparent via-dh-navy/15 to-transparent md:block" />
    </div>
  )
}

export default AmbientBackdrop
