import { withBasePath } from "../../lib/asset";

export default function SportHero() {
  return (
    <div className="relative h-[826px] w-full overflow-hidden bg-white">
      <video
        src={withBasePath("/assets/sport/hero/hero-bg.mp4")}
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}
