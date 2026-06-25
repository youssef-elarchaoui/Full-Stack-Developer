export default function StatusDot({ label = "Open for new projects", className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3.5 py-1.5 font-mono text-xs text-[var(--color-muted)] ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-amber)] animate-pulse-dot" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-amber)]" />
      </span>
      {label}
    </div>
  );
}
