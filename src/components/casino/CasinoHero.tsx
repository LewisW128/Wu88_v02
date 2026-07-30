import { withBasePath } from "../../lib/asset";

export default function CasinoHero() {
  return (
    <div className="relative h-[611px] w-full overflow-hidden bg-white">
      <video
        src={withBasePath("/assets/casino/hero/hero-bg.mp4")}
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
