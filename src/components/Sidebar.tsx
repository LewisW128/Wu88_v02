import { useState } from "react";
import sidebarBg from "../assets/sidebar/sidebar-bg.svg";
import logo from "../assets/sidebar/logo.svg";
import rectangle1 from "../assets/sidebar/rectangle1.svg";
import rectangle3 from "../assets/sidebar/rectangle3.svg";
import iconHome from "../assets/sidebar/icon-home.svg";
import iconCasino from "../assets/sidebar/icon-casino.svg";
import iconSport from "../assets/sidebar/icon-sport.svg";
import iconPromotions from "../assets/sidebar/icon-promotions.svg";
import adVector1 from "../assets/sidebar/ad-vector1.svg";
import adVector2 from "../assets/sidebar/ad-vector2.svg";
import eventGirl from "../assets/sidebar/event-girl.png";
import headlineText from "../assets/sidebar/headline-text.svg";
import numeral1 from "../assets/sidebar/numeral-1.svg";
import numeral0 from "../assets/sidebar/numeral-0.svg";
import numeralPct from "../assets/sidebar/numeral-pct.svg";
import promotionsButton from "../assets/sidebar/promotions-button.svg";
import arrowChevron from "../assets/sidebar/arrow-chevron.svg";

const NAV_ITEMS = [
  { icon: iconHome, title: "首頁", sub: "CASINO" },
  { icon: iconCasino, title: "賭場", sub: "LIVE" },
  { icon: iconSport, title: "運動", sub: "SPORT" },
  { icon: iconPromotions, title: "優惠活動", sub: "PROMO" },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-full w-[291px] shrink-0 overflow-y-auto overflow-x-hidden bg-white scrollbar-teal-thin">
      <div className="relative min-h-[1117px] w-[291px]">
        <img alt="" src={sidebarBg} className="pointer-events-none absolute left-0 top-0 h-[1117px] w-[291px]" />

        <div className="absolute left-1/2 top-[40px] w-[251px] -translate-x-1/2">
          <img alt="WU88 武財神 ONE" src={logo} className="w-full" />
        </div>

        <nav className="absolute inset-x-0 top-[150px] z-10 flex flex-col items-end px-[20px]">
          {NAV_ITEMS.map((item, index) => (
            <div
              key={item.title}
              onClick={() => setActiveIndex(index)}
              className="relative flex h-[122px] w-full shrink-0 cursor-pointer items-center overflow-hidden"
            >
              {index === activeIndex && (
                <>
                  <img alt="" src={rectangle1} className="absolute bottom-[3px] left-[7px] h-[112px] w-[194px]" />
                  <img alt="" src={rectangle3} className="absolute left-0 top-[1px] h-[112px] w-[251px]" />
                </>
              )}
              <div className="relative z-10 ml-[36px] size-[25px] shrink-0">
                <img alt="" src={item.icon} className="size-full" />
              </div>
              <div className="relative z-10 ml-[20px] flex flex-col items-start whitespace-nowrap">
                <p className="text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">{item.title}</p>
                <p className="text-[14px] tracking-[0.15px] text-[#23f3d5]">{item.sub}</p>
              </div>
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 h-[462px] w-[291px] overflow-hidden">
          <img alt="" src={adVector1} className="pointer-events-none absolute left-[-152.28px] top-[40.66px] h-[248.04px] w-[248.07px] rotate-[8.36deg]" />
          <div className="absolute bottom-0 left-[-9px] h-[462px] w-[316px] overflow-hidden">
            <img alt="" src={eventGirl} className="absolute left-0 top-[1.61%] h-[103.7%] w-full object-cover" />
          </div>
          <img alt="" src={adVector2} className="pointer-events-none absolute left-[-219px] top-[-231.44px] h-[1140.92px] w-[1122.73px] rotate-[1.07deg]" />

          <div className="absolute left-1/2 top-[211px] flex w-[234px] -translate-x-1/2 items-center justify-center">
            <div className="flex -rotate-[2.01deg] flex-col items-center gap-[10px]">
              <div className="rotate-[2.01deg]">
                <img alt="新會員使首充送" src={headlineText} className="h-[42.39px] w-[229.328px]" />
              </div>
              <div className="flex items-end justify-center gap-[13px]">
                <div className="flex items-center">
                  <img alt="" src={numeral1} className="mr-[-12px] h-[80px] w-[60px]" />
                  <div className="flex gap-[6px]">
                    <img alt="" src={numeral0} className="h-[80px] w-[60px]" />
                    <img alt="" src={numeral0} className="h-[80px] w-[60px]" />
                  </div>
                </div>
                <img alt="" src={numeralPct} className="h-[56px] w-[42px]" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-[23px] left-[20px] h-[60px] w-[227px] drop-shadow-[0px_10px_10px_rgba(226,255,37,0.25)]">
            <img alt="" src={promotionsButton} className="pointer-events-none absolute inset-0 size-full" />
            <div className="absolute inset-[23.81%_11.62%_25.4%_11.62%] flex items-center justify-between">
              <p className="text-[20px] font-bold tracking-[0.35px] text-[#444242]">領取獎勵</p>
              <div className="flex size-[25px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[5.556px]">
                <img alt="" src={arrowChevron} className="h-[7.222px] w-[4.711px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
