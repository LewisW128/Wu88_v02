"use client";

import { useHorizontalSlider } from "../../hooks/useHorizontalSlider";
import SlideArrows from "../SlideArrows";
import { withBasePath } from "../../lib/asset";

type Badge = "HOT" | "NEW" | "WU88" | null;

type CardData = {
  image: string;
  main: string;
  sub: string;
  badge: Badge;
};

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
  if (type === "WU88")
    return (
      <div
        className="absolute left-0 top-0 flex size-[57px] items-center justify-center rounded-br-[30px]"
        style={{
          backgroundImage:
            "linear-gradient(-41deg, rgb(1,250,176) 20%, rgb(20,232,184) 6%, rgb(72,186,206) 20%, rgb(154,113,241) 58%, rgb(182,90,253) 70%, rgb(141,84,216) 116%, rgb(111,79,189) 155%, rgb(100,78,179) 179%)",
        }}
      >
        <p className="text-[14px] font-bold text-white">WU88</p>
      </div>
    );
  return null;
}

function Card({ image, main, sub, badge }: CardData) {
  const specialShape = badge !== null;
  return (
    <div
      className={`relative h-[266px] w-[200px] shrink-0 overflow-hidden bg-white ${
        specialShape ? "rounded-bl-[50px] rounded-br-[50px] rounded-tl-[1px] rounded-tr-[50px]" : "rounded-[50px]"
      }`}
    >
      <img alt="" src={image} className="absolute inset-0 size-full object-cover" />
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

export function CasinoGeneralGamesRow({
  id,
  icon,
  title,
  cards,
  showMore,
}: {
  id: string;
  icon: string;
  title: string;
  cards: CardData[];
  showMore: boolean;
}) {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();

  return (
    <div id={`casino-section-${id}`} className="relative flex w-full flex-col gap-[20px]">
      <div className="flex items-center justify-between pl-[20px]">
        <div className="flex items-center gap-[10px]">
          <img alt="" src={icon} className="size-[45px]" />
          <p className="text-[20px] font-bold tracking-[0.35px] text-[#444242]">{title}</p>
        </div>
        {showMore && (
          <div className="flex items-center gap-[10px] py-[5px] pr-[40px]">
            <p className="whitespace-nowrap text-[20px] font-bold leading-[32px] tracking-[0.35px] text-[#3e4140]">所有遊戲</p>
            <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[13px] w-[8px]" />
          </div>
        )}
      </div>

      <div ref={scrollRef} className="scrollbar-hide flex gap-[20px] items-center overflow-x-auto pr-[40px]">
        {cards.map((card) => (
          <Card key={card.main} {...card} />
        ))}
      </div>

      {showMore && (
        <SlideArrows
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          onLeft={() => scrollByPage("left")}
          onRight={() => scrollByPage("right")}
          className="absolute bottom-[40px] right-[40px]"
        />
      )}
    </div>
  );
}

export default function CasinoGeneralGames() {
  const slotCards: CardData[] = [
    { image: withBasePath("/assets/casino/products/olympus-heights.png"), main: "OLYMPUS HEIGHTS", sub: "SLOT", badge: "HOT" },
    { image: withBasePath("/assets/products/moronglianqi.png"), main: "魔龍傳奇", sub: "SLOT", badge: null },
    { image: withBasePath("/assets/products/tiaoqilai.png"), main: "跳起來", sub: "SLOT", badge: "WU88" },
    { image: withBasePath("/assets/casino/products/luomadamaoxian.png"), main: "駱馬大冒險", sub: "SLOT", badge: "HOT" },
    { image: withBasePath("/assets/casino/products/modongnezha.png"), main: "魔童哪吒", sub: "SLOT", badge: null },
    { image: withBasePath("/assets/products/zhanshensaite2.png"), main: "戰神塞特2", sub: "SLOT", badge: null },
    { image: withBasePath("/assets/products/leishenzhichui.png"), main: "雷神之鎚", sub: "SLOT", badge: null },
    { image: withBasePath("/assets/products/yuetu.png"), main: "月兔", sub: "SLOT", badge: null },
    { image: withBasePath("/assets/products/jinhuye.png"), main: "金虎爺", sub: "SLOT", badge: null },
    { image: withBasePath("/assets/products/feitiancaishen.png"), main: "飛天財神", sub: "SLOT", badge: null },
  ];

  const realCards: CardData[] = [
    { image: withBasePath("/assets/casino/providers/real-dg.png"), main: "DG 真人", sub: "REAL", badge: "HOT" },
    { image: withBasePath("/assets/casino/providers/real-wm.png"), main: "WM 真人", sub: "REAL", badge: null },
    { image: withBasePath("/assets/casino/providers/real-mt.png"), main: "MT 真人", sub: "REAL", badge: "NEW" },
    { image: withBasePath("/assets/casino/providers/real-t9.png"), main: "T9 真人", sub: "REAL", badge: "HOT" },
    { image: withBasePath("/assets/casino/providers/real-astar.png"), main: "ASTAR 真人", sub: "REAL", badge: null },
    { image: withBasePath("/assets/casino/providers/real-wg.png"), main: "WG 真人", sub: "REAL", badge: null },
    { image: withBasePath("/assets/casino/providers/real-oubo.png"), main: "歐博真人", sub: "REAL", badge: null },
    { image: withBasePath("/assets/casino/providers/real-db.png"), main: "DB 真人", sub: "REAL", badge: null },
    { image: withBasePath("/assets/casino/providers/real-jinbaixin.png"), main: "金佰新", sub: "REAL", badge: null },
  ];

  const lotteryCards: CardData[] = [
    { image: withBasePath("/assets/casino/providers/lottery-wg.png"), main: "WG 彩票", sub: "LOTTORY", badge: "HOT" },
    { image: withBasePath("/assets/casino/providers/lottery-9k.png"), main: "9K 彩票", sub: "LOTTORY", badge: "HOT" },
    { image: withBasePath("/assets/casino/providers/lottery-db.png"), main: "DB 彩票", sub: "LOTTORY", badge: "HOT" },
    { image: withBasePath("/assets/casino/providers/lottery-gaodeng.png"), main: "高登彩票", sub: "LOTTORY", badge: "HOT" },
  ];

  const pokerCards: CardData[] = [
    { image: withBasePath("/assets/casino/providers/poker-haolu.png"), main: "好路棋牌", sub: "BOARD & CARD", badge: "HOT" },
    { image: withBasePath("/assets/casino/providers/poker-gaodeng.png"), main: "高登棋牌", sub: "BOARD & CARD", badge: null },
    { image: withBasePath("/assets/casino/providers/poker-kaixin.png"), main: "開心棋牌", sub: "BOARD & CARD", badge: "NEW" },
  ];

  const fishingCards: CardData[] = [
    { image: withBasePath("/assets/casino/providers/fishing-haolu.png"), main: "好路捕魚", sub: "FISHING", badge: "HOT" },
    { image: withBasePath("/assets/casino/providers/fishing-kaixin.png"), main: "開心捕魚", sub: "FISHING", badge: null },
  ];

  const esportsCards: CardData[] = [{ image: withBasePath("/assets/casino/providers/games-leihuo.png"), main: "雷火電競", sub: "GAMES", badge: "HOT" }];

  return (
    <>
      <CasinoGeneralGamesRow id="slot" icon={withBasePath("/assets/casino/icons/slot.svg")} title="電子遊戲" cards={slotCards} showMore />
      <CasinoGeneralGamesRow id="real" icon={withBasePath("/assets/casino/icons/live.svg")} title="真人娛樂" cards={realCards} showMore />
      <CasinoGeneralGamesRow id="lottery" icon={withBasePath("/assets/casino/icons/lottery.svg")} title="彩票遊戲" cards={lotteryCards} showMore={false} />
      <CasinoGeneralGamesRow id="poker" icon={withBasePath("/assets/casino/icons/poker.svg")} title="棋牌遊戲" cards={pokerCards} showMore={false} />
      <CasinoGeneralGamesRow id="fishing" icon={withBasePath("/assets/casino/icons/fishing.svg")} title="捕魚遊戲" cards={fishingCards} showMore={false} />
      <CasinoGeneralGamesRow id="esports" icon={withBasePath("/assets/casino/icons/games.svg")} title="電競遊戲" cards={esportsCards} showMore={false} />
    </>
  );
}
