"use client";

import { useHorizontalSlider } from "../hooks/useHorizontalSlider";
import SlideArrows from "./SlideArrows";

import { withBasePath } from "../lib/asset";
type Badge = "HOT" | "NEW" | null;

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

function Card({
  main,
  sub,
  badge,
  specialShape,
  children,
}: {
  main: string;
  sub: string;
  badge: Badge;
  specialShape?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative h-[266px] w-[200px] shrink-0 overflow-hidden bg-white ${
        specialShape ? "rounded-bl-[50px] rounded-br-[50px] rounded-tl-[1px] rounded-tr-[50px]" : "rounded-[50px]"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[50px]">{children}</div>
      <div className="absolute bottom-0 left-0 h-[81px] w-[200px] bg-gradient-to-b from-[rgba(141,84,216,0)] to-[#6f4fbd]">
        <div className="absolute left-[40px] top-[15px] w-[120px] whitespace-nowrap">
          <p className="truncate text-[20px] font-bold tracking-[1px] text-white">{main}</p>
          <p className="text-[14px] text-[#67e4d2]">{sub}</p>
        </div>
      </div>
      <BadgeTag type={badge} />
    </div>
  );
}

export type GameCard = { main: string; sub: string; badge: Badge; image: string; specialShape?: boolean };

const DEFAULT_GAMES: GameCard[] = [
  { main: "鼠來寶", sub: "SLOT", badge: "HOT", image: withBasePath("/assets/products/shulaibao.png"), specialShape: true },
  { main: "魔龍傳奇", sub: "SLOT", badge: null, image: withBasePath("/assets/products/moronglianqi.png") },
  { main: "跳起來", sub: "SLOT", badge: "NEW", image: withBasePath("/assets/products/tiaoqilai.png"), specialShape: true },
  { main: "胡到了", sub: "SLOT", badge: "HOT", image: withBasePath("/assets/products/hudaole.png"), specialShape: true },
  { main: "飛天財神", sub: "SLOT", badge: null, image: withBasePath("/assets/products/feitiancaishen.png") },
  { main: "啤酒派對", sub: "SLOT", badge: null, image: withBasePath("/assets/products/pijiupaidui.png") },
  { main: "火燒連環船", sub: "SLOT", badge: null, image: withBasePath("/assets/products/huoshaolianhuanchuan.png") },
  { main: "發福神", sub: "SLOT", badge: null, image: withBasePath("/assets/products/faifushen.png") },
];

// Shared by the home page's "所有遊戲" row and the profile page's "我的收藏"
// row (same gradient card carousel, just a different header and game list).
export default function Recommend({
  logo,
  moreLabel = "所有遊戲",
  games = DEFAULT_GAMES,
}: {
  logo?: React.ReactNode;
  moreLabel?: string;
  games?: GameCard[];
}) {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();

  return (
    <div
      className="relative w-full overflow-hidden rounded-tl-[50px] pb-[40px] pt-[20px]"
      style={{
        backgroundImage: "linear-gradient(-56deg, rgb(72,186,206) 22%, rgb(154,113,241) 69%, rgb(141,84,216) 142%, rgb(100,78,179) 222%)",
      }}
    >
      {logo ?? (
        <>
          <img alt="WU88" src={withBasePath("/assets/recommend/wu88-logo-union.svg")} className="absolute left-[20px] top-[20px] h-[42px] w-[131px]" />
          <img alt="" src={withBasePath("/assets/recommend/wu88-logo-mask.svg")} className="absolute left-[102px] top-[38px] h-[24px] w-[49px]" />
        </>
      )}

      <div className="flex items-center justify-end gap-[10px] py-[5px] pr-[40px]">
        <p className="whitespace-nowrap text-[20px] font-bold leading-[32px] tracking-[0.35px] text-white">{moreLabel}</p>
        <img alt="" src={withBasePath("/assets/shared/arrow-chevron-white.svg")} className="h-[13px] w-[8px]" />
      </div>

      <div ref={scrollRef} className="scrollbar-hide mt-[24px] flex gap-[20px] overflow-x-auto pl-[60px] pr-[40px] pb-[10px] drop-shadow-[0px_40px_20px_rgba(0,0,0,0.25)]">
        {games.map((game) => (
          <Card key={game.main} main={game.main} sub={game.sub} badge={game.badge} specialShape={game.specialShape}>
            <img alt="" src={game.image} className="absolute inset-0 size-full object-cover" />
          </Card>
        ))}
      </div>

      <SlideArrows
        canScrollLeft={canScrollLeft}
        canScrollRight={canScrollRight}
        onLeft={() => scrollByPage("left")}
        onRight={() => scrollByPage("right")}
        className="absolute bottom-[40px] right-[40px]"
      />
    </div>
  );
}
