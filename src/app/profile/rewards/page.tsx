"use client";

import ScaleBelowBreakpoint from "../../../components/ScaleBelowBreakpoint";
import Footer from "../../../components/Footer";
import ProfileSidebar from "../../../components/profile/ProfileSidebar";
import ProfileEverydayRewards from "../../../components/profile/ProfileEverydayRewards";
import { Promotions } from "../../../components/PromotionsBusinessService";
import { withBasePath } from "../../../lib/asset";

const COUNTDOWN = [
  { value: "08", unit: "天" },
  { value: "08", unit: "時" },
  { value: "12", unit: "分" },
  { value: "32", unit: "秒" },
];

const STATS = [
  { label: "目前 Ｗ 幣", value: "25,230", icon: "/assets/icons/money.svg" },
  { label: "排名", value: "235", icon: "/assets/icons/fraction.svg" },
  { label: "分數", value: "150", icon: "/assets/icons/diamond.svg" },
];

const LEVEL_POINTS = [1, 14, 28, 41, 54, 67, 82];
const CURRENT_LEVEL_INDEX = 2;

type RewardKitData = { name: string; count: string; image: string; current?: boolean };

const REWARD_KITS: RewardKitData[] = [
  { name: "綠寶石寶箱", count: "5,000", image: "/assets/profile/rewards-center/gem-green.png" },
  { name: "藍寶石寶箱", count: "5,000", image: "/assets/profile/rewards-center/gem-blue.png" },
  { name: "紫寶石寶箱", count: "5,000", image: "/assets/profile/rewards-center/gem-purple.png", current: true },
  { name: "琥珀寶箱", count: "5,000", image: "/assets/profile/rewards-center/gem-amber.png" },
  { name: "黃金寶箱", count: "5,000", image: "/assets/profile/rewards-center/gem-gold.png" },
  { name: "頂級綠寶石寶箱", count: "5,000", image: "/assets/profile/rewards-center/gem-top-emerald.png" },
  { name: "頂級藍寶石寶箱", count: "5,000", image: "/assets/profile/rewards-center/gem-top-sapphire.png" },
];

function ChestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 17 17" className={className} fill="none">
      <circle cx="14.5" cy="14.5" r="2.5" fill="#23F3D5" />
      <rect x="1" y="1" width="10" height="7" rx="1.3" stroke="#3E4140" strokeWidth="1.36" />
      <rect x="1" y="8.5" width="10" height="6.5" rx="1.3" stroke="#3E4140" strokeWidth="1.36" />
    </svg>
  );
}

function RewardKit({ name, count, image, current }: RewardKitData) {
  return (
    <div
      className={`relative h-[212px] w-[150px] shrink-0 overflow-hidden rounded-bl-[35px] rounded-tr-[35px] bg-white/20 backdrop-blur-[10px] ${
        current ? "border-4 border-[#01fab0]" : "border border-[#8d54d8]"
      }`}
    >
      <img alt="" src={withBasePath(image)} className="pointer-events-none absolute left-1/2 top-[9px] size-[178px] -translate-x-1/2 object-contain" />
      <div className="absolute left-1/2 top-[159px] flex -translate-x-1/2 flex-col items-center gap-[5px]">
        <div className="flex items-center gap-[5px]">
          <ChestIcon className="size-[17px] shrink-0" />
          <p className="whitespace-nowrap text-[12px] text-black">{name}</p>
        </div>
        <div className="flex items-center gap-[5px] whitespace-nowrap">
          <p className="text-[12px] text-[#a2a2a2]">前</p>
          <p className="text-[14px] font-bold tracking-[0.15px] text-[#23f3d5]">{count}</p>
          <p className="text-[12px] text-[#a2a2a2]">名</p>
        </div>
      </div>
    </div>
  );
}

function LevelPoint({ label, reached }: { label: string; reached: boolean }) {
  return (
    <div
      className={`flex size-[24px] shrink-0 items-center justify-center rounded-full border text-[12px] font-medium tracking-[0.15px] ${
        reached ? "border-[#8d54d8] bg-white text-[#3e4140]" : "border-[#dadada] bg-[#f4f4f4] text-white"
      }`}
    >
      {label}
    </div>
  );
}

function LevelTrack() {
  return (
    <div className="flex w-full items-center">
      {LEVEL_POINTS.map((lv, i) => (
        <div key={lv} className="flex flex-1 items-center last:flex-none">
          <LevelPoint label={String(lv)} reached={i <= CURRENT_LEVEL_INDEX} />
          {i < LEVEL_POINTS.length - 1 && <div className="h-0 flex-1 border-t border-[#dadada]" />}
        </div>
      ))}
    </div>
  );
}

function VipEventStats() {
  return (
    <div className="flex w-full items-center overflow-hidden rounded-[35px] border border-[#dadada] bg-white/50 py-[20px] backdrop-blur-[10px]">
      {STATS.map((stat, i) => (
        <div key={stat.label} className={`flex flex-col items-center gap-[20px] px-[40px] ${i < STATS.length - 1 ? "border-r border-[#f4f4f4]" : ""}`}>
          <p className="whitespace-nowrap text-[16px] font-medium tracking-[0.15px] text-[#b2b2b2]">{stat.label}</p>
          <div className="flex items-center gap-[10px]">
            <img alt="" src={withBasePath(stat.icon)} className="size-[25px]" />
            <p className="whitespace-nowrap text-[36px] font-bold tracking-[0.36px] text-[#23f3d5]">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function VipEventSection() {
  return (
    <div className="flex w-[612px] shrink-0 flex-col gap-[40px]">
      <div className="flex flex-col items-start gap-[20px]">
        <div className="flex items-center gap-[20px]">
          <div className="flex h-[84px] w-[235px] items-center justify-center rounded-[25px] border-4 border-[#8d54d8]">
            <p className="whitespace-nowrap text-[60px] font-bold tracking-[0.37px] text-[#8d54d8]">第 2 季</p>
          </div>
          <p className="whitespace-nowrap text-[60px] font-bold tracking-[0.37px] text-[#8d54d8]">VIP 盛典</p>
        </div>
        <div className="flex items-center gap-[10px] whitespace-nowrap text-[16px] font-medium tracking-[0.15px] text-[#644eb3]">
          <p>2024年10月17日（GMT 09:00）</p>
          <p>～</p>
          <p>2024年11月17日（GMT 09:00）</p>
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex w-[430px] items-center justify-between overflow-hidden rounded-[25px] border border-[#dadada] bg-white/50 px-[20px] py-[14px] backdrop-blur-[10px]">
          <p className="whitespace-nowrap text-[16px] font-medium tracking-[0.15px] text-[#b2b2b2]">活動倒數：</p>
          <div className="flex items-center gap-[20px]">
            {COUNTDOWN.map((c) => (
              <div key={c.unit} className="flex items-center gap-[5px]">
                <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#23f3d5]">{c.value}</p>
                <p className="whitespace-nowrap text-[16px] text-[#a2a2a2]">{c.unit}</p>
              </div>
            ))}
          </div>
        </div>

        <VipEventStats />
      </div>
    </div>
  );
}

function VipCard() {
  return (
    <div className="relative h-[390px] w-[360px] shrink-0 overflow-hidden rounded-[50px] border border-[#8d54d8] bg-white/90 backdrop-blur-[10px]">
      <div className="pointer-events-none absolute inset-0 h-[282px] overflow-hidden">
        <img alt="" src={withBasePath("/assets/profile/rewards-center/vip-badge-1.svg")} className="absolute -right-[58px] -top-[80px] h-[427px] w-[519px] rotate-180" />
        <img alt="" src={withBasePath("/assets/profile/rewards-center/vip-badge-2.svg")} className="absolute -right-[29px] top-[127px] h-[81px] w-[98px] rotate-180" />
        <img alt="" src={withBasePath("/assets/profile/rewards-center/vip-badge-3.svg")} className="absolute right-[229px] top-[61px] h-[81px] w-[99px] rotate-180" />
        <img alt="" src={withBasePath("/assets/profile/rewards-center/vip-badge-gem.png")} className="absolute -right-[102px] -top-[71px] size-[264px] object-cover" />
        <img alt="" src={withBasePath("/assets/profile/rewards-center/vip-badge-4.svg")} className="absolute right-[86px] top-[7px] h-[48px] w-[59px] rotate-180" />
        <img alt="" src={withBasePath("/assets/profile/rewards-center/vip-badge-5.svg")} className="absolute right-[117px] top-[141px] h-[23px] w-[28px] rotate-180" />
      </div>

      <div className="absolute left-[19px] top-[18px] flex items-center gap-[20px]">
        <img alt="" src={withBasePath("/assets/profile/member/icon-vip-lv.svg")} className="size-[40px]" />
        <p className="whitespace-nowrap text-[36px] font-bold tracking-[0.36px] text-[#3e4140]">Lv. 8</p>
      </div>

      <div className="absolute inset-x-[19px] bottom-[19px] flex flex-col gap-[10px]">
        <div className="flex items-center justify-between">
          <p className="whitespace-nowrap text-[14px]">
            <span className="text-[#b2b2b2]">VIP 經驗</span> <span className="font-bold text-[#8d54d8]">700</span>{" "}
            <span className="text-[12px] text-[#b2b2b2]">/ 1,500</span>
          </p>
          <div className="flex size-[25px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[6px]">
            <img alt="" src={withBasePath("/assets/profile/member/exp-plus.svg")} className="size-[14px]" />
          </div>
        </div>
        <div className="h-[10px] w-full overflow-hidden rounded-full border border-[#a2a2a2] bg-white">
          <img alt="" src={withBasePath("/assets/profile/rewards-center/vip-exp-bar-fill.png")} className="h-full w-[calc(100%-59px)] rounded-full object-cover" />
        </div>
        <p className="whitespace-nowrap text-[14px] text-[#b2b2b2]">
          已經連續儲值 <span className="font-bold text-[#8d54d8]">10,000</span>
        </p>
      </div>
    </div>
  );
}

function LevelAndRewards() {
  return (
    <div className="flex w-full items-end gap-[10px]">
      <div className="flex w-[1110px] shrink-0 flex-col items-end gap-[40px]">
        <LevelTrack />
        <div className="flex w-full items-center gap-[10px]">
          {REWARD_KITS.map((kit) => (
            <RewardKit key={kit.name} {...kit} />
          ))}
        </div>
      </div>

      <div className="flex h-[299px] w-[237px] shrink-0 flex-col items-center gap-[12px]">
        <img alt="" src={withBasePath("/assets/profile/rewards-center/gem-trophy-top.png")} className="w-full object-contain" />
        <div className="flex flex-col items-center gap-[5px]">
          <div className="flex items-center gap-[5px]">
            <ChestIcon className="size-[17px] shrink-0" />
            <p className="whitespace-nowrap text-[12px] text-black">頂級星鑽寶箱</p>
          </div>
          <div className="flex items-center gap-[5px] whitespace-nowrap">
            <p className="text-[12px] text-[#a2a2a2]">前</p>
            <p className="text-[14px] font-bold tracking-[0.15px] text-[#23f3d5]">2,000</p>
            <p className="text-[12px] text-[#a2a2a2]">名</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReferralCard() {
  return (
    <div className="flex w-[530px] shrink-0 flex-col gap-[32px]">
      <div className="flex items-end gap-[41px]">
        <div className="flex w-[255px] flex-col items-start gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <img alt="" src={withBasePath("/assets/icons/recommend-friend.svg")} className="size-[45px]" />
            <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#444242]">好友邀請</p>
          </div>
          <p className="text-[16px] leading-[30px] tracking-[1px] text-black">
            掃描 <span className="font-bold leading-[24px] tracking-[0.15px] text-[#23f3d5]">QR碼</span> 或分享{" "}
            <span className="font-bold leading-[24px] tracking-[0.15px] text-[#23f3d5]">專屬邀請連結</span>{" "}
            給好友完成註冊後，即可領取豐富獎勵，好友加入越多回饋越多，一起開心玩吧！
          </p>
        </div>
        <img alt="" src={withBasePath("/assets/profile/rewards-center/referral-qr.png")} className="size-[234px] shrink-0 object-cover" />
      </div>

      <div className="flex h-[52px] w-full items-center gap-[20px] overflow-hidden rounded-[50px] border border-[#dadada] px-[19px]">
        <img alt="" src={withBasePath("/assets/icons/link.svg")} className="size-[25px] shrink-0" />
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[16px] tracking-[0.15px] text-[#3e4140]">
          https://wu88.example.com/invite/mikamiyua12345
        </p>
      </div>
    </div>
  );
}

export default function ProfileRewardsPage() {
  return (
    <ScaleBelowBreakpoint designWidth={1728} maxZoom={0.9}>
      <div className="min-h-screen bg-white">
        <div className="flex w-full">
          <div className="sticky top-0 z-10" style={{ height: "min(calc(100vh / var(--page-zoom, 1)), 1117px)" }}>
            <ProfileSidebar />
          </div>

          <div className="relative min-w-0 flex-1 overflow-hidden">
            <img
              alt=""
              src={withBasePath("/assets/profile/account/cover.png")}
              className="pointer-events-none absolute right-0 top-0 z-0 h-[605px] w-[1053px] max-w-none"
              style={{ maskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)" }}
            />

            <div className="relative z-10 flex flex-col gap-[40px] pb-[40px] pl-[40px] pr-[40px] pt-[40px]">
              <div className="flex items-center gap-[20px]">
                <img alt="" src={withBasePath("/assets/profile/icons/rewards.svg")} className="size-[60px]" />
                <p className="whitespace-nowrap text-[36px] font-bold tracking-[0.36px] text-[#3e4140]">領獎中心</p>
              </div>

              <div className="flex items-end justify-between gap-[20px]">
                <VipEventSection />
                <VipCard />
              </div>

              <LevelAndRewards />

              <div className="flex w-full justify-center">
                <button
                  type="button"
                  className="h-[60px] rounded-bl-[25px] rounded-tr-[25px] bg-[#e2ff25] px-[60px] text-[20px] font-bold tracking-[0.35px] text-[#3e4140] shadow-[0px_10px_20px_0px_rgba(226,255,37,0.25)]"
                >
                  一鍵領取
                </button>
              </div>

              <div className="flex items-start gap-[40px]">
                <ProfileEverydayRewards />
                <ReferralCard />
              </div>

              <div className="flex flex-col gap-[20px]">
                <p className="text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">熱門優惠</p>
                <Promotions />
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
