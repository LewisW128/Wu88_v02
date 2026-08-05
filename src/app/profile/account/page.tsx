"use client";

import { useState } from "react";
import ScaleBelowBreakpoint from "../../../components/ScaleBelowBreakpoint";
import Footer from "../../../components/Footer";
import ProfileSidebar from "../../../components/profile/ProfileSidebar";
import { withBasePath } from "../../../lib/asset";
import { useCountUp, WalletDepositButton, WalletSellButton, TransactionRow, type Transaction } from "../../../components/profile/ProfileWallet";

const TRANSACTIONS: Transaction[] = [
  { label: "信用卡充值", date: "06/12 13:30", amount: "$10,000" },
  { label: "託售", date: "06/12 13:30", amount: "-$100,000", negative: true },
  { label: "信用卡充值", date: "06/12 13:30", amount: "$10,000" },
  { label: "返水", date: "06/12 13:30", amount: "$1,000,000" },
  { label: "信用卡充值", date: "06/12 13:30", amount: "$10,000" },
  { label: "信用卡充值", date: "06/12 13:30", amount: "$10,000" },
  { label: "信用卡充值", date: "06/12 13:30", amount: "$10,000" },
  { label: "信用卡充值", date: "06/12 13:30", amount: "$10,000" },
  { label: "信用卡充值", date: "06/12 13:30", amount: "$10,000" },
  { label: "信用卡充值", date: "06/12 13:30", amount: "$10,000" },
  { label: "信用卡充值", date: "06/12 13:30", amount: "$10,000" },
];

const TABS = ["交易明細", "轉點明細", "投注紀錄", "活動點數", "其他明細"];

// Same active-tag gradient as SportCategoryTags / CasinoFilterChips /
// PromotionsFilterChips -- one shared tag style used across the site, keep
// all copies in sync if it ever changes.
const ACTIVE_GRADIENT = "linear-gradient(-56deg, rgb(72,186,206) 22%, rgb(154,113,241) 69%, rgb(141,84,216) 142%, rgb(100,78,179) 222%)";

function Tab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="whitespace-nowrap rounded-full px-[20px] py-[10px] text-[16px] font-bold tracking-[0.15px] text-white transition-colors"
      style={active ? { backgroundImage: ACTIVE_GRADIENT } : { backgroundColor: "#3e4140" }}
    >
      {label}
    </button>
  );
}

function FilterDropdown({ label }: { label: string }) {
  return (
    <button type="button" className="flex items-center gap-[10px] rounded-full bg-[#3e4140] px-[20px] py-[10px]">
      <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-white">{label}</p>
      <img alt="" src={withBasePath("/assets/shared/chevron-down.svg")} className="size-[25px]" />
    </button>
  );
}

function SearchBox() {
  return (
    <div className="flex h-[45px] w-[256px] items-center gap-[10px] rounded-full border-2 border-[#3e4140] bg-white/50 px-[14px] backdrop-blur-[10px]">
      <img alt="" src={withBasePath("/assets/icons/search.svg")} className="size-[25px]" />
      <p className="whitespace-nowrap text-[12px] font-medium tracking-[0.15px] text-[#a2a2a2]">搜尋</p>
    </div>
  );
}

export default function ProfileAccountPage() {
  const balance = useCountUp(10_000_000);
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <ScaleBelowBreakpoint designWidth={1728} maxZoom={0.9}>
      <div className="min-h-screen bg-white">
        <div className="flex w-full">
          <div className="sticky top-0 z-10" style={{ height: "min(calc(100vh / var(--page-zoom, 1)), 1117px)" }}>
            <ProfileSidebar />
          </div>

          <div className="relative min-w-0 flex-1 overflow-hidden">
            {/* Real composited hero asset (girl + gradient blobs + dot grid),
                same 1.74 aspect ratio as the source 4311x2478 photo so it's
                never cropped or stretched -- sized down from the Figma box
                (1437x826) so the desk/calculator the girl is working at
                clears the transaction card below instead of being hidden
                behind it. */}
            <img
              alt=""
              src={withBasePath("/assets/profile/account/cover.png")}
              className="pointer-events-none absolute right-0 top-0 z-0 h-[520px] w-[905px] max-w-none"
            />

            <div className="relative z-10 flex flex-col gap-[40px] pb-[40px] pl-[40px] pr-[40px] pt-[40px]">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-[20px]">
                  <img alt="" src={withBasePath("/assets/profile/icons/account.svg")} className="size-[60px]" />
                  <p className="whitespace-nowrap text-[36px] font-bold tracking-[0.36px] text-[#3e4140]">帳戶明細</p>
                </div>
                <div className="flex items-center gap-[20px] pt-[3px]">
                  {TABS.map((tab) => (
                    <Tab key={tab} label={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-[20px]">
                <div className="flex flex-col items-start gap-[5px]">
                  <p className="text-[16px] text-[#a2a2a2]">帳戶餘額</p>
                  <p className="text-[60px] font-bold tabular-nums tracking-[0.37px] text-[#3e4140]">{balance.toLocaleString()}</p>
                </div>
                <div className="flex w-[380px] items-center justify-between">
                  <WalletDepositButton />
                  <WalletSellButton />
                </div>
              </div>

              <div className="flex flex-col items-start gap-[20px]">
                <div className="flex items-center gap-[20px]">
                  <FilterDropdown label="日期" />
                  <FilterDropdown label="類型" />
                  <SearchBox />
                </div>

                <div className="flex h-[597px] w-full flex-col gap-[10px] rounded-bl-[50px] rounded-tr-[50px] border border-[#8d54d8] bg-white/80 p-[19px] backdrop-blur-[10px]">
                  <div
                    className="scrollbar-teal-thin flex min-h-0 flex-1 flex-col gap-[10px] overflow-y-auto"
                    style={{ maskImage: "linear-gradient(to bottom, black 0%, black 92%, transparent 100%)" }}
                  >
                    {TRANSACTIONS.map((tx, index) => (
                      <TransactionRow key={index} {...tx} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="-ml-[291px] w-[calc(100%+291px)]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </ScaleBelowBreakpoint>
  );
}
