/**
 * Static soft washes only — no animated blur (keeps scroll smooth).
 */
const AmbientBackdrop = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -right-16 top-[10%] h-72 w-72 rounded-full bg-dh-blue/[0.06]" />
      <div className="absolute -left-20 top-[50%] h-64 w-64 rounded-full bg-dh-navy/[0.04]" />
    </div>
  )
}

export default AmbientBackdrop
