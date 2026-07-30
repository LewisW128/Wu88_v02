import { withBasePath } from "../../lib/asset";

function DotGrid({ color }: { color: string }) {
  return (
    <div className="flex flex-col gap-[8px]">
      {Array.from({ length: 6 }).map((_, row) => (
        <div key={row} className="flex gap-[8px]">
          {Array.from({ length: 6 }).map((_, col) => (
            <div key={col} className="size-[4px] rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function CasinoHero() {
  return (
    <div className="relative h-[611px] w-full overflow-hidden bg-white">
      <img
        alt=""
        src={withBasePath("/assets/casino/hero/glow1.png")}
        className="pointer-events-none absolute right-[220px] top-[-150px] h-[680px] w-auto max-w-none opacity-40"
      />
      <img
        alt=""
        src={withBasePath("/assets/casino/hero/glow2.png")}
        className="pointer-events-none absolute right-[100px] top-[70px] h-[220px] w-auto max-w-none opacity-40"
      />
      <img
        alt=""
        src={withBasePath("/assets/casino/hero/swoosh.svg")}
        className="pointer-events-none absolute left-[10px] top-[60px] h-[200px] w-auto max-w-none -scale-y-100"
      />

      <svg viewBox="0 0 700 150" className="absolute left-[60px] top-[110px] h-[150px] w-[700px]">
        <defs>
          <linearGradient id="casino-text-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8d54d8" />
            <stop offset="60%" stopColor="#8d54d8" />
            <stop offset="100%" stopColor="#23f3d5" />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="115"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="140"
          letterSpacing="20"
          fill="none"
          stroke="url(#casino-text-gradient)"
          strokeWidth="2.5"
        >
          CASINO
        </text>
      </svg>

      <div className="absolute left-[60px] top-[280px]">
        <DotGrid color="#8d54d8" />
      </div>

      <img
        alt=""
        src={withBasePath("/assets/casino/hero/dealer.png")}
        className="pointer-events-none absolute right-[60px] top-[20px] h-[591px] w-auto max-w-none object-cover"
      />
      <div className="absolute right-[130px] top-[70px]">
        <DotGrid color="#23f3d5" />
      </div>

      <img
        alt=""
        src={withBasePath("/assets/casino/hero/floor.png")}
        className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-full object-cover"
      />
    </div>
  );
}
