interface StatTileProps {
  value: string;
  label: string;
  dark?: boolean;
  className?: string;
}

export function StatTile({ value, label, dark = true, className = '' }: StatTileProps) {
  return (
    <div
      className={`rounded-xl p-6 flex flex-col gap-2 ${
        dark
          ? 'bg-navy-surface border border-navy-border'
          : 'bg-bone-dim'
      } ${className}`}
    >
      <div className={`stat-number tabular ${dark ? 'text-coral' : 'text-coral'}`}>
        {value}
      </div>
      <div className={`section-label ${dark ? 'text-muted' : 'text-muted'}`}>
        {label}
      </div>
    </div>
  );
}
