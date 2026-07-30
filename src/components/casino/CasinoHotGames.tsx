"use client";

import { useHorizontalSlider } from "../../hooks/useHorizontalSlider";
import SlideArrows from "../SlideArrows";
import { withBasePath } from "../../lib/asset";

type Badge = "HOT" | "NEW" | "WU88" | null;

function BadgeTag({ type }: { type: Badge }) {
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

function NumeralFrame({ wide, children }: { wide?: boolean; children: React.ReactNode }) {
  return <div className={`absolute bottom-0 left-0 h-[231px] overflow-hidden ${wide ? "w-[350px]" : "w-[175px]"}`}>{children}</div>;
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
      className={`absolute right-0 top-0 h-[266px] w-[200px] overflow-hidden bg-white ${
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

export default function CasinoHotGames() {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();

  return (
    <div id="casino-section-hot" className="relative flex w-full scroll-mt-[110px] flex-col gap-[20px]">
      <div className="flex items-center justify-between pl-[20px]">
        <div className="flex items-center gap-[10px]">
          <img alt="" src={withBasePath("/assets/icons/hot.svg")} className="size-[45px]" />
          <p className="text-[20px] font-bold tracking-[0.35px] text-[#444242]">熱門遊戲</p>
        </div>
        <div className="flex items-center gap-[10px] py-[5px] pr-[40px]">
          <p className="whitespace-nowrap text-[20px] font-bold leading-[32px] tracking-[0.35px] text-[#3e4140]">所有遊戲</p>
          <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[13px] w-[8px]" />
        </div>
      </div>

      <div ref={scrollRef} className="scrollbar-hide flex gap-[20px] overflow-x-auto pr-[40px]">
        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={withBasePath("/assets/hot/numeral01-outline.svg")} className="absolute left-0 top-0 h-[211.5px] w-[152px]" />
            <img alt="" src={withBasePath("/assets/hot/numeral01-fill.svg")} className="absolute left-[20px] top-[20px] h-[211.5px] w-[152px]" />
          </NumeralFrame>
          <Card main="SUPER 體育" sub="SPORT" badge={null} specialShape>
            <img alt="" src={withBasePath("/assets/products/super-sport.png")} className="absolute inset-0 size-full object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={withBasePath("/assets/hot/numeral02.svg")} className="absolute left-0 top-0 h-[231px] w-[175px]" />
          </NumeralFrame>
          <Card main="戰神塞特 2" sub="SLOT" badge="NEW" specialShape>
            <img alt="" src={withBasePath("/assets/products/zhanshensaite2.png")} className="absolute inset-0 size-full object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={withBasePath("/assets/hot/numeral03-outline.svg")} className="absolute left-0 top-0 h-[211.3px] w-[147.4px]" />
            <img alt="" src={withBasePath("/assets/hot/numeral03-fill.svg")} className="absolute left-[28px] top-[20px] h-[211.3px] w-[147.4px]" />
          </NumeralFrame>
          <Card main="雷神之鎚" sub="SLOT" badge="WU88" specialShape>
            <img alt="" src={withBasePath("/assets/products/leishenzhichui.png")} className="absolute inset-0 size-full object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={withBasePath("/assets/hot/numeral04-outline.svg")} className="absolute left-0 top-0 h-[211.3px] w-[146.7px]" />
            <img alt="" src={withBasePath("/assets/hot/numeral04-fill.svg")} className="absolute left-[28px] top-[20px] h-[211.3px] w-[146.7px]" />
          </NumeralFrame>
          <Card main="麻將發了" sub="BOARD & CARD" badge={null}>
            <img alt="" src={withBasePath("/assets/products/majiangfale.png")} className="absolute inset-0 size-full object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={withBasePath("/assets/hot/numeral05-outline.svg")} className="absolute left-0 top-0 h-[212.8px] w-[153.4px]" />
            <img alt="" src={withBasePath("/assets/hot/numeral05-fill.svg")} className="absolute left-[22px] top-[18px] h-[212.8px] w-[153.4px]" />
          </NumeralFrame>
          <Card main="月兔" sub="SLOT" badge={null}>
            <img alt="" src={withBasePath("/assets/products/yuetu.png")} className="absolute inset-0 size-full object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={withBasePath("/assets/hot/numeral06-outline.svg")} className="absolute left-0 top-0 h-[212.8px] w-[145.6px]" />
            <img alt="" src={withBasePath("/assets/hot/numeral06-fill.svg")} className="absolute left-[29px] top-[18px] h-[212.8px] w-[145.6px]" />
          </NumeralFrame>
          <Card main="金虎爺" sub="SLOT" badge="NEW" specialShape>
            <img alt="" src={withBasePath("/assets/products/jinhuye.png")} className="absolute inset-0 size-full object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={withBasePath("/assets/hot/numeral07-outline.svg")} className="absolute left-0 top-0 h-[210.1px] w-[151.5px]" />
            <img alt="" src={withBasePath("/assets/hot/numeral07-fill.svg")} className="absolute left-[24px] top-[21px] h-[210.1px] w-[151.5px]" />
          </NumeralFrame>
          <Card main="輪盤" sub="ROULETTE" badge={null}>
            <img alt="" src={withBasePath("/assets/hot/roulette-rank7.png")} className="absolute left-1/2 top-[-5px] h-[309px] w-[206px] max-w-none -translate-x-1/2 object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={withBasePath("/assets/hot/numeral08-outline.svg")} className="absolute left-0 top-0 h-[210.1px] w-[148px]" />
            <img alt="" src={withBasePath("/assets/hot/numeral08-fill.svg")} className="absolute left-[27px] top-[21px] h-[210.1px] w-[148px]" />
          </NumeralFrame>
          <Card main="輪盤" sub="ROULETTE" badge={null}>
            <img alt="" src={withBasePath("/assets/hot/roulette-rank8.png")} className="absolute left-1/2 top-[-35px] h-[309px] w-[206px] max-w-none -translate-x-1/2 object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <div className="absolute left-0 top-0 rotate-180">
              <img alt="" src={withBasePath("/assets/hot/numeral09-outline.svg")} className="h-[212.8px] w-[145.6px]" />
            </div>
            <div className="absolute left-[29px] top-[18px] rotate-180">
              <img alt="" src={withBasePath("/assets/hot/numeral09-fill.svg")} className="h-[212.8px] w-[145.6px]" />
            </div>
          </NumeralFrame>
          <Card main="輪盤" sub="ROULETTE" badge={null}>
            <img alt="" src={withBasePath("/assets/hot/roulette-rank9.png")} className="absolute left-1/2 top-[calc(50%+30px)] h-[354px] w-[202px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[473px] shrink-0">
          <NumeralFrame wide>
            <img alt="" src={withBasePath("/assets/hot/numeral10-outline.svg")} className="absolute left-0 top-0 h-[211.8px] w-[321.2px]" />
            <img alt="" src={withBasePath("/assets/hot/numeral10-fill.svg")} className="absolute left-[29px] top-[19px] h-[211.8px] w-[321.2px]" />
          </NumeralFrame>
          <Card main="輪盤" sub="ROULETTE" badge={null}>
            <img alt="" src={withBasePath("/assets/hot/roulette-rank10.png")} className="absolute left-1/2 top-[-3px] h-[361px] w-[203px] max-w-none -translate-x-1/2 object-cover" />
          </Card>
        </div>
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
