interface AreaChartProps {
  /** Y values in chronological order. */
  data: number[];
  /** Labels under selected x positions: [index, label]. */
  xLabels: [number, string][];
  /** Formats a y value for the peak callout. */
  formatValue: (v: number) => string;
  /** Accessible description of the trend. */
  ariaLabel: string;
  stroke?: string;
  fillFrom?: string;
}

/**
 * Dependency-free responsive area chart rendered as inline SVG.
 * Scales via viewBox and prints as crisp vector — no canvas, no client JS.
 */
export function AreaChart({
  data,
  xLabels,
  formatValue,
  ariaLabel,
  stroke = '#E8452A',
  fillFrom = 'rgba(232,69,42,0.28)',
}: AreaChartProps) {
  const W = 640;
  const H = 152;
  const padX = 16;
  const padTop = 30; // headroom so the peak callout label never clips
  const padBottom = 20;
  const plotW = W - padX * 2;
  const plotH = H - padTop - padBottom;

  const max = Math.max(...data);
  const stepX = plotW / (data.length - 1);

  const points = data.map((v, i) => ({
    x: padX + i * stepX,
    y: padTop + plotH - (v / max) * plotH,
  }));

  const linePath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(' ');
  const areaPath =
    `${linePath} L${points[points.length - 1].x.toFixed(1)},${padTop + plotH} ` +
    `L${points[0].x.toFixed(1)},${padTop + plotH} Z`;

  const last = points[points.length - 1];

  // Horizontal gridlines at 0 / 50 / 100% of max.
  const gridYs = [0, 0.5, 1].map((f) => padTop + plotH - f * plotH);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fillFrom} />
          <stop offset="100%" stopColor="rgba(232,69,42,0)" />
        </linearGradient>
      </defs>

      {/* gridlines */}
      {gridYs.map((y, i) => (
        <line
          key={i}
          x1={padX}
          x2={W - padX}
          y1={y}
          y2={y}
          stroke="#1E2235"
          strokeWidth="1"
          strokeDasharray={i === 0 ? '0' : '4 4'}
        />
      ))}

      {/* area + line */}
      <path d={areaPath} fill="url(#areaFill)" />
      <path d={linePath} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />

      {/* end marker */}
      <circle cx={last.x} cy={last.y} r="5" fill={stroke} />
      <circle cx={last.x} cy={last.y} r="9" fill="none" stroke={stroke} strokeOpacity="0.35" strokeWidth="2" />
      <text
        x={last.x}
        y={last.y - 16}
        textAnchor="end"
        fontSize="15"
        fontWeight="700"
        fill="#FAFAF8"
        fontFamily="var(--font-plus-jakarta), sans-serif"
      >
        {formatValue(data[data.length - 1])}
      </text>

      {/* x labels */}
      {xLabels.map(([i, label]) => (
        <text
          key={i}
          x={padX + i * stepX}
          y={H - 12}
          textAnchor={i === 0 ? 'start' : i === data.length - 1 ? 'end' : 'middle'}
          fontSize="10"
          fill="#8A92A4"
          fontFamily="var(--font-jetbrains), monospace"
          letterSpacing="0.08em"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}
