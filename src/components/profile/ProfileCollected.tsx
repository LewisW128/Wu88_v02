"use client";

import { useHorizontalSlider } from "../../hooks/useHorizontalSlider";
import { withBasePath } from "../../lib/asset";
import SlideArrows from "../SlideArrows";

type Badge = "HOT" | "NEW" | null;

type Game = {
  image: string;
  main: string;
  sub: string;
  badge: Badge;
};

const GAMES: Game[] = [
  { image: withBasePath("/assets/profile/collected/game1.png"), main: "OLYPUS HEIGHTS", sub: "SLOT", badge: "HOT" },
  { image: withBasePath("/assets/profile/collected/game2.png"), main: "魔龍傳奇", sub: "SLOT", badge: null },
  { image: withBasePath("/assets/profile/collected/game3.png"), main: "跳起來", sub: "SLOT", badge: "NEW" },
  { image: withBasePath("/assets/profile/collected/game4.png"), main: "胡到了", sub: "SLOT", badge: "HOT" },
  { image: withBasePath("/assets/profile/collected/game5.png"), main: "飛天財神", sub: "SLOT", badge: null },
  { image: withBasePath("/assets/profile/collected/game6.png"), main: "啤酒派對", sub: "SLOT", badge: null },
  { image: withBasePath("/assets/profile/collected/game7.png"), main: "火燒連環船", sub: "SLOT", badge: null },
  { image: withBasePath("/assets/profile/collected/game8.png"), main: "發福神", sub: "SLOT", badge: null },
];

function BadgeTag({ type }: { type: Badge }) {
  if (type === "HOT")
    return (
      <div className="absolute left-0 top-0 flex size-[57px] items-center justify-center rounded-br-[30px] bg-[#e80800]">
        <p className="text-[14px] font-bold text-white">HOT</p>
      </div>
    );
  if (type === "NEW")
    return (
      <div className="absolute left-0 top-0 flex size-[57px] items-center justify-center rounded-br-[30px] bg-[#e2ff25]">
        <p className="text-[14px] font-bold text-[#3e4140]">NEW</p>
      </div>
    );
  return null;
}

function GameCard({ image, main, sub, badge }: Game) {
  return (
    <div className="relative h-[266px] w-[200px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-br-[50px] rounded-tl-[1px] rounded-tr-[50px] bg-white">
      <img alt={main} src={image} className="pointer-events-none absolute inset-0 size-full object-cover" />
      <div className="absolute bottom-0 left-0 h-[81px] w-full bg-gradient-to-b from-[rgba(141,84,216,0)] to-[#6f4fbd]">
        <div className="absolute left-[40px] top-[15px] w-[120px] whitespace-nowrap">
          <p className="truncate text-[20px] font-bold tracking-[1px] text-white">{main}</p>
          <p className="text-[14px] text-[#67e4d2]">{sub}</p>
        </div>
      </div>
      <BadgeTag type={badge} />
    </div>
  );
}

export default function ProfileCollected() {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();

  return (
    <div
      className="relative flex w-full flex-col gap-[20px] overflow-hidden rounded-tl-[50px] p-[20px] pb-[40px]"
      style={{
        backgroundImage:
          "linear-gradient(-65.5deg, rgba(1,250,176,0) 28.4%, rgba(20,232,184,0) 10.9%, rgb(72,186,206) 21.6%, rgb(154,113,241) 69.1%, rgb(182,90,253) 84.1%, rgb(141,84,216) 141.6%, rgb(111,79,189) 191.6%, rgb(100,78,179) 221.6%)",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <svg viewBox="0 0 25 25" className="size-[25px]">
            <path
              d="M12.5 21.5S3 15.5 3 9.5C3 6.5 5.5 4 8.5 4c1.9 0 3.4 1 4 2.3C13.1 5 14.6 4 16.5 4 19.5 4 22 6.5 22 9.5c0 6-9.5 12-9.5 12z"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
          <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-white">我的收藏</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-white">所有收藏</p>
          <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[11px] w-[6px]" />
        </div>
      </div>

      <div ref={scrollRef} className="scrollbar-hide flex gap-[20px] overflow-x-auto drop-shadow-[0px_40px_20px_rgba(0,0,0,0.25)]">
        {GAMES.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>

      <SlideArrows canScrollLeft={canScrollLeft} canScrollRight={canScrollRight} onLeft={() => scrollByPage("left")} onRight={() => scrollByPage("right")} className="absolute bottom-[40px] right-[40px]" />
    </div>
  );
}
