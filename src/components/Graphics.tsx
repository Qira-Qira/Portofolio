import React from 'react';

export function AQMonogram({
  className = 'w-8 h-8',
  color = 'currentColor',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M49 23L54 19L64 31L59 36Z" fill={color} />
      <path
        d="M3 36L15 6H23L35 36H27L24 28H14L11 36H3ZM16 22H22L19 14Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        d="M45 6H54L61 13V27L54 34H45L38 27V13L45 6ZM47 12L44 15V25L47 28H52L55 25V15L52 12H47Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}

const PIXEL_LETTERS: Record<string, number[][]> = {
  A: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  L: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  D: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
  ],
  E: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  Q: [
    [0, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 0, 1],
  ],
  R: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
};

export function PixelWordmark({
  word = 'ARIQ',
  color = '#18181A',
  className = 'w-full h-auto',
}: {
  word?: string;
  color?: string;
  className?: string;
}) {
  const letters = word.split('').map((ch) => PIXEL_LETTERS[ch] || PIXEL_LETTERS.A);
  const gap = 1;
  const totalCols = letters.reduce((acc, m) => acc + m[0].length, 0) + (letters.length - 1) * gap;
  const rows = 5;

  const rects: { x: number; y: number }[] = [];
  let offsetX = 0;
  for (const matrix of letters) {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c] === 1) {
          rects.push({ x: offsetX + c, y: r });
        }
      }
    }
    offsetX += matrix[0].length + gap;
  }

  return (
    <svg
      viewBox={`0 0 ${totalCols} ${rows}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      shapeRendering="crispEdges"
      role="img"
      aria-label={word}
    >
      {rects.map((cell, idx) => (
        <rect
          key={idx}
          x={cell.x}
          y={cell.y}
          width={1.02}
          height={1.02}
          fill={color}
        />
      ))}
    </svg>
  );
}

export function TornEdge({
  fill = '#161618',
  flip = false,
  className = '',
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${
        flip ? 'rotate-180' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 36"
        preserveAspectRatio="none"
        className="w-full h-5 sm:h-7 md:h-9 block"
      >
        <path
          d="M0,18 L34,12 L68,21 L104,9 L142,20 L180,14 L218,24 L258,10 L296,19 L338,13 L378,22 L416,8 L458,19 L496,12 L538,23 L578,11 L618,20 L658,14 L698,25 L736,10 L778,18 L818,12 L860,22 L900,9 L942,20 L982,13 L1022,23 L1062,11 L1104,19 L1144,14 L1186,24 L1226,10 L1268,20 L1308,12 L1350,22 L1390,11 L1440,18 L1440,36 L0,36 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function PinkStarburst({ className = 'w-7 h-7', color = '#F43F8E' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 2V30M2 16H30M6.1 6.1L25.9 25.9M25.9 6.1L6.1 25.9"
        stroke={color}
        strokeWidth="4.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function YellowSquiggle({ className = 'w-24 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 10C10 3 17 3 24 10C31 17 38 17 45 10C52 3 59 3 66 10C73 17 80 17 87 10C94 3 101 3 108 10C112 14 115 14 117 11"
        stroke="#F4C542"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PaperPlaneDoodle({
  className = 'w-6 h-6',
  color = 'currentColor',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <path
        d="M25 4L3 13.5L11.5 16.5L15 24.5L25 4Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M11.5 16.5L25 4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MaskingTape({
  color = '#F43F8E',
  className = '',
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={`h-4 w-16 border border-[#18181A]/30 opacity-90 shadow-xs ${className}`}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  );
}
