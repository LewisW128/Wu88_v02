import { useHorizontalSlider } from "../hooks/useHorizontalSlider";
import SlideArrows from "./SlideArrows";
import titleEllipse from "../assets/hot/title-icon-ellipse.svg";
import titleVector1 from "../assets/hot/title-icon-vector1.svg";
import titleVector2 from "../assets/hot/title-icon-vector2.svg";
import arrowChevronTeal from "../assets/shared/arrow-chevron-teal.svg";
import numeral01Outline from "../assets/hot/numeral01-outline.svg";
import numeral01Fill from "../assets/hot/numeral01-fill.svg";
import numeral02 from "../assets/hot/numeral02.svg";
import numeral03Outline from "../assets/hot/numeral03-outline.svg";
import numeral03Fill from "../assets/hot/numeral03-fill.svg";
import numeral04Outline from "../assets/hot/numeral04-outline.svg";
import numeral04Fill from "../assets/hot/numeral04-fill.svg";
import numeral05Outline from "../assets/hot/numeral05-outline.svg";
import numeral05Fill from "../assets/hot/numeral05-fill.svg";
import numeral06Outline from "../assets/hot/numeral06-outline.svg";
import numeral06Fill from "../assets/hot/numeral06-fill.svg";
import numeral07Outline from "../assets/hot/numeral07-outline.svg";
import numeral07Fill from "../assets/hot/numeral07-fill.svg";
import numeral08Outline from "../assets/hot/numeral08-outline.svg";
import numeral08Fill from "../assets/hot/numeral08-fill.svg";
import numeral09Outline from "../assets/hot/numeral09-outline.svg";
import numeral09Fill from "../assets/hot/numeral09-fill.svg";
import numeral10Outline from "../assets/hot/numeral10-outline.svg";
import numeral10Fill from "../assets/hot/numeral10-fill.svg";
import superSport from "../assets/hot/super-sport.png";
import zhanshensaite2 from "../assets/hot/zhanshensaite2.jpg";
import leishenzhichui from "../assets/hot/leishenzhichui.png";
import majiangfale from "../assets/hot/majiangfale.png";
import yuetu from "../assets/hot/yuetu.png";
import jinhuye from "../assets/hot/jinhuye.png";
import rouletteRank7 from "../assets/hot/roulette-rank7.png";
import rouletteRank8 from "../assets/hot/roulette-rank8.png";
import rouletteRank9 from "../assets/hot/roulette-rank9.png";
import rouletteRank10 from "../assets/hot/roulette-rank10.png";

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

export default function Hot() {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();

  return (
    <div className="relative flex w-full flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <div className="relative size-[45px] overflow-hidden">
            <div className="absolute inset-[48%_16%_12%_44%]">
              <img alt="" src={titleEllipse} className="block size-full max-w-none" />
            </div>
            <div className="absolute inset-[11.78%_20.14%_12.22%_23.86%]">
              <div className="absolute inset-[-5.26%_-7.14%]">
                <img alt="" src={titleVector1} className="block size-full max-w-none" />
              </div>
            </div>
            <div className="absolute inset-[35.78%_32.14%_20.22%_31.86%]">
              <img alt="" src={titleVector2} className="block size-full max-w-none" />
            </div>
          </div>
          <p className="text-[20px] font-bold tracking-[0.35px] text-[#444242]">熱門遊戲</p>
        </div>
        <div className="flex items-center gap-[10px] py-[5px] pr-[40px]">
          <p className="whitespace-nowrap text-[20px] font-bold leading-[32px] tracking-[0.35px] text-[#3e4140]">所有遊戲</p>
          <img alt="" src={arrowChevronTeal} className="h-[13px] w-[8px]" />
        </div>
      </div>

      <div ref={scrollRef} className="scrollbar-hide flex gap-[20px] overflow-x-auto">
        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={numeral01Outline} className="absolute left-0 top-0 h-[211.5px] w-[152px]" />
            <img alt="" src={numeral01Fill} className="absolute left-[20px] top-[20px] h-[211.5px] w-[152px]" />
          </NumeralFrame>
          <Card main="SUPER 體育" sub="SPORT" badge={null} specialShape>
            <div className="absolute inset-0 bg-[#2d302f]" />
            <img alt="" src={superSport} className="absolute left-1/2 top-[40px] h-[163px] w-[200px] -translate-x-1/2 object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={numeral02} className="absolute left-0 top-0 h-[231px] w-[175px]" />
          </NumeralFrame>
          <Card main="戰神塞特 2" sub="SLOT" badge="NEW" specialShape>
            <img alt="" src={zhanshensaite2} className="absolute left-1/2 top-1/2 h-[268px] w-[268px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={numeral03Outline} className="absolute left-0 top-0 h-[211.3px] w-[147.4px]" />
            <img alt="" src={numeral03Fill} className="absolute left-[28px] top-[20px] h-[211.3px] w-[147.4px]" />
          </NumeralFrame>
          <Card main="雷神之鎚" sub="SLOT" badge="WU88" specialShape>
            <img alt="" src={leishenzhichui} className="absolute left-1/2 top-1/2 h-[270px] w-[482px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={numeral04Outline} className="absolute left-0 top-0 h-[211.3px] w-[146.7px]" />
            <img alt="" src={numeral04Fill} className="absolute left-[28px] top-[20px] h-[211.3px] w-[146.7px]" />
          </NumeralFrame>
          <Card main="麻將發了" sub="BOARD & CARD" badge={null}>
            <div className="absolute inset-0 border border-[#dadada] bg-white" />
            <img alt="" src={majiangfale} className="absolute left-[1px] top-[35px] h-[193px] w-[196px] object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={numeral05Outline} className="absolute left-0 top-0 h-[212.8px] w-[153.4px]" />
            <img alt="" src={numeral05Fill} className="absolute left-[22px] top-[18px] h-[212.8px] w-[153.4px]" />
          </NumeralFrame>
          <Card main="月兔" sub="SLOT" badge={null}>
            <img alt="" src={yuetu} className="absolute left-[-168px] top-[-1.5px] h-[268px] w-[536px] max-w-none object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={numeral06Outline} className="absolute left-0 top-0 h-[212.8px] w-[145.6px]" />
            <img alt="" src={numeral06Fill} className="absolute left-[29px] top-[18px] h-[212.8px] w-[145.6px]" />
          </NumeralFrame>
          <Card main="金虎爺" sub="SLOT" badge="NEW" specialShape>
            <img alt="" src={jinhuye} className="absolute left-1/2 top-1/2 h-[268px] w-[268px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={numeral07Outline} className="absolute left-0 top-0 h-[210.1px] w-[151.5px]" />
            <img alt="" src={numeral07Fill} className="absolute left-[24px] top-[21px] h-[210.1px] w-[151.5px]" />
          </NumeralFrame>
          <Card main="輪盤" sub="ROULETTE" badge={null}>
            <img alt="" src={rouletteRank7} className="absolute left-1/2 top-[-5px] h-[309px] w-[206px] max-w-none -translate-x-1/2 object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <img alt="" src={numeral08Outline} className="absolute left-0 top-0 h-[210.1px] w-[148px]" />
            <img alt="" src={numeral08Fill} className="absolute left-[27px] top-[21px] h-[210.1px] w-[148px]" />
          </NumeralFrame>
          <Card main="輪盤" sub="ROULETTE" badge={null}>
            <img alt="" src={rouletteRank8} className="absolute left-1/2 top-[-35px] h-[309px] w-[206px] max-w-none -translate-x-1/2 object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[297px] shrink-0">
          <NumeralFrame>
            <div className="absolute left-0 top-0 rotate-180">
              <img alt="" src={numeral09Outline} className="h-[212.8px] w-[145.6px]" />
            </div>
            <div className="absolute left-[29px] top-[18px] rotate-180">
              <img alt="" src={numeral09Fill} className="h-[212.8px] w-[145.6px]" />
            </div>
          </NumeralFrame>
          <Card main="輪盤" sub="ROULETTE" badge={null}>
            <img alt="" src={rouletteRank9} className="absolute left-1/2 top-[calc(50%+30px)] h-[354px] w-[202px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover" />
          </Card>
        </div>

        <div className="relative h-[292px] w-[473px] shrink-0">
          <NumeralFrame wide>
            <img alt="" src={numeral10Outline} className="absolute left-0 top-0 h-[211.8px] w-[321.2px]" />
            <img alt="" src={numeral10Fill} className="absolute left-[29px] top-[19px] h-[211.8px] w-[321.2px]" />
          </NumeralFrame>
          <Card main="輪盤" sub="ROULETTE" badge={null}>
            <img alt="" src={rouletteRank10} className="absolute left-1/2 top-[-3px] h-[361px] w-[203px] max-w-none -translate-x-1/2 object-cover" />
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
