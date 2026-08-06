"use client";

import ScaleBelowBreakpoint from "../../../components/ScaleBelowBreakpoint";
import Footer from "../../../components/Footer";
import ProfileSidebar from "../../../components/profile/ProfileSidebar";
import ProfileEverydayRewards from "../../../components/profile/ProfileEverydayRewards";
import { Promotions } from "../../../components/PromotionsBusinessService";
import { useCountUp } from "../../../components/profile/ProfileWallet";
import { withBasePath } from "../../../lib/asset";

const COUNTDOWN = [
  { value: "08", unit: "天" },
  { value: "08", unit: "時" },
  { value: "12", unit: "分" },
  { value: "32", unit: "秒" },
];

const STATS = [
  { label: "目前 Ｗ 幣", value: 25230, icon: "/assets/icons/money.svg" },
  { label: "排名", value: 235, icon: "/assets/icons/fraction.svg" },
  { label: "分數", value: 150, icon: "/assets/icons/diamond.svg" },
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

// Same active-tag gradient as the account page's tab pills / SportCategoryTags
// / CasinoFilterChips -- one shared brand gradient, reused here for the
// current reward tier's border.
const ACTIVE_GRADIENT = "linear-gradient(-56deg, rgb(72,186,206) 22%, rgb(154,113,241) 69%, rgb(141,84,216) 142%, rgb(100,78,179) 222%)";

function RewardKit({ name, count, image, current }: RewardKitData) {
  // bg-white/20 + backdrop-blur is meant to frost the page behind the card
  // -- on the current card that "page behind" is the gradient wrapper
  // itself, so the low opacity let the gradient bleed through the whole
  // interior instead of staying confined to the thin ring. A near-opaque
  // fill keeps the gradient visible only at the padded edge.
  const content = (
    <div
      className={`relative size-full overflow-hidden backdrop-blur-[10px] ${current ? "rounded-bl-[31px] rounded-tr-[31px] bg-white/95" : "rounded-bl-[35px] rounded-tr-[35px] bg-white/20"}`}
    >
      {/* 178px reached down into the label text below (trophy-shaped
          variants especially, whose base isn't cropped as tight as the
          hexagon badges) -- shrunk so every variant's bottom edge clears
          the text zone starting at top-159. */}
      <img alt="" src={withBasePath(image)} className="pointer-events-none absolute left-1/2 top-[9px] size-[140px] -translate-x-1/2 object-contain" />
      <div className="absolute left-1/2 top-[159px] flex -translate-x-1/2 flex-col items-center gap-[5px]">
        <div className="flex items-center gap-[5px]">
          <img alt="" src={withBasePath("/assets/icons/treasure.svg")} className="size-[17px] shrink-0" />
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

  // The current tier's ring is a gradient, which plain CSS border can't do --
  // a padded outer box (gradient fill) wrapping a slightly-smaller-radius
  // inner box keeps the ring following the card's rounded shape (same
  // technique as the Everyday Rewards Day 2 card).
  if (current) {
    return (
      <div className="h-[212px] w-[150px] shrink-0 rounded-bl-[35px] rounded-tr-[35px] p-[4px]" style={{ backgroundImage: ACTIVE_GRADIENT }}>
        {content}
      </div>
    );
  }

  return <div className="h-[212px] w-[150px] shrink-0 rounded-bl-[35px] rounded-tr-[35px] border border-[#8d54d8]">{content}</div>;
}

// Figma's Level_Point is a vertical hexagon (flat sides, pointed top/bottom),
// not a circle -- reached points use a dark #3e4140 outline, unreached ones
// are drawn in a near-invisible #f4f4f4 outline.
function LevelPoint({ label, reached }: { label: string; reached: boolean }) {
  const color = reached ? "#3e4140" : "#f4f4f4";
  return (
    <div className="relative z-10 flex size-[24px] shrink-0 items-center justify-center bg-white">
      <svg viewBox="0 0 21 24" className="absolute inset-0 size-full">
        <path
          d="M19.7849 6.57715V17.4219L10.3923 22.8447L0.999726 17.4219V6.57715L10.3923 1.1543L19.7849 6.57715Z"
          fill="white"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
      <p className="relative text-[12px] font-medium tracking-[0.15px]" style={{ color }}>
        {label}
      </p>
    </div>
  );
}

// Shared grid definition for both the level track and the chest row below
// it: 7 fixed 150px chest columns + 6 flexible 1fr gap columns between them.
// Using the SAME grid-template-columns on both rows is what keeps every
// number centered exactly above its chest even as the 1fr gaps grow on a
// wider viewport -- independent flex distributions (justify-between on one
// row, flex-1 on the other) don't stay in sync since the two rows' items
// are different widths (24px hexagons vs 150px cards).
const CHEST_GRID_COLUMNS = "150px repeat(6, 1fr 150px)";

function LevelTrack() {
  return (
    <div className="grid h-[24px] w-full items-center" style={{ gridTemplateColumns: CHEST_GRID_COLUMNS }}>
      {LEVEL_POINTS.map((lv, i) => (
        <div key={`line-${lv}`} className="contents">
          {i > 0 &&
            (() => {
              const segment = i - 1;
              // The segment leading into the current level is half progressed
              // -- dark up to the midpoint, then fades to the unreached color
              // -- matching Figma's split Line7/Line8 overlay on that segment.
              const background =
                segment < CURRENT_LEVEL_INDEX
                  ? "#3e4140"
                  : segment === CURRENT_LEVEL_INDEX
                    ? "linear-gradient(to right, #3e4140 50%, #f4f4f4 50%)"
                    : "#f4f4f4";
              // The grid area spans the full point-columns on each side (not
              // just the 1fr gap column between them), then 75px margins --
              // half of the fixed 150px point column -- pull each end in to
              // land exactly on the hexagon's own center, so it disappears
              // under the icon (z-10, white fill) instead of stopping short
              // with a visible gap. Margins, not a full-column span, matter
              // for the very first/last segment: spanning the full column
              // would run the line past the first hexagon's center with
              // nothing on the other end to connect to.
              // gridRow: 1 is required here -- once the line spans back over
              // a point's own column, grid auto-placement sees that column
              // as "already occupied" in row 1 and silently bumps the next
              // item down to row 2, which is what broke the whole track
              // into a staircase.
              return (
                <div
                  style={{ gridColumn: `${segment * 2 + 1} / ${segment * 2 + 4}`, gridRow: 1, marginLeft: 75, marginRight: 75, height: 3, background }}
                />
              );
            })()}
          <div className="flex justify-center" style={{ gridColumn: i * 2 + 1, gridRow: 1 }}>
            <LevelPoint label={String(lv)} reached={i <= CURRENT_LEVEL_INDEX} />
          </div>
        </div>
      ))}
    </div>
  );
}

// useCountUp is a hook, so each stat needs its own component instance
// rather than being called inline inside the .map() below.
function StatValue({ value }: { value: number }) {
  const counted = useCountUp(value);
  return <p className="whitespace-nowrap text-[36px] font-bold tabular-nums tracking-[0.36px] text-[#23f3d5]">{counted.toLocaleString()}</p>;
}

function VipEventStats() {
  return (
    <div className="flex w-full items-center overflow-hidden rounded-[35px] border border-[#dadada] bg-white/50 py-[20px] backdrop-blur-[10px]">
      {STATS.map((stat, i) => (
        <div key={stat.label} className={`flex flex-col items-center gap-[20px] px-[40px] ${i < STATS.length - 1 ? "border-r border-[#f4f4f4]" : ""}`}>
          <p className="whitespace-nowrap text-[16px] font-medium tracking-[0.15px] text-[#b2b2b2]">{stat.label}</p>
          <div className="flex items-center gap-[10px]">
            <img alt="" src={withBasePath(stat.icon)} className="size-[25px]" />
            <StatValue value={stat.value} />
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

// The chest column (level track + 7 chests) is flex-1, growing to fill
// whatever width is left after the trophy's fixed 237px -- its own grid
// (CHEST_GRID_COLUMNS) then spreads the 6 gaps between chests evenly across
// that width, and the level track above uses the exact same grid so its
// numbers stay centered on their chests at any viewport width, not just
// the design width.
function LevelAndRewards() {
  return (
    <div className="flex w-full items-end gap-[10px]">
      <div className="flex min-w-0 flex-1 flex-col items-end gap-[40px]">
        <LevelTrack />
        <div className="grid w-full" style={{ gridTemplateColumns: CHEST_GRID_COLUMNS }}>
          {REWARD_KITS.map((kit, i) => (
            <div key={kit.name} style={{ gridColumn: i * 2 + 1 }}>
              <RewardKit {...kit} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex h-[299px] w-[237px] shrink-0 flex-col items-center gap-[12px]">
        {/* Figma's "Background_kit" glow streak behind the top-tier trophy --
            bleeds up/left past the trophy box and out to the page edge. */}
        <img
          alt=""
          src={withBasePath("/assets/profile/rewards-center/trophy-bg-streak.svg")}
          className="pointer-events-none absolute -right-[40px] -top-[46px] z-0 h-[365px] w-[442px]"
        />
        <img alt="" src={withBasePath("/assets/profile/rewards-center/gem-trophy-top.png")} className="relative z-10 w-full object-contain" />
        <div className="relative z-10 flex flex-col items-center gap-[5px]">
          <div className="flex items-center gap-[5px]">
            <img alt="" src={withBasePath("/assets/icons/treasure.svg")} className="size-[17px] shrink-0" />
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
            {/* Per the reference mockup, this banner spans the full header
                width as a background layer -- the "BONUS HUB" wordmark and
                trophy sit behind the real headings/VIP card on purpose
                (the wordmark is hollow/outlined so the solid foreground
                text stays legible over it), matching Figma's "Cover images"
                instance size exactly (1437x826, same aspect as the source
                so nothing is cropped or stretched). */}
            <img
              alt=""
              src={withBasePath("/assets/profile/rewards-center/cover-champion.png")}
              className="pointer-events-none absolute right-0 top-0 z-0 h-[826px] w-[1437px] max-w-none"
            />

            <div className="relative z-10 flex flex-col gap-[40px] pb-[40px] pl-[40px] pr-[40px] pt-[40px]">
              <div className="flex items-center gap-[20px]">
                <img alt="" src={withBasePath("/assets/profile/icons/rewards.svg")} className="size-[60px]" />
                <p className="whitespace-nowrap text-[36px] font-bold tracking-[0.36px] text-[#3e4140]">領獎中心</p>
              </div>

              {/* Figma places this row ~452px below the header (492 - 40),
                  not a plain 40px gap -- the VIP盛典 heading sits lower,
                  overlapping the middle of the trophy banner rather than
                  crowding right up against the page title. */}
              <div className="mt-[352px] flex items-end justify-between gap-[20px]">
                <VipEventSection />
                <VipCard />
              </div>

              <LevelAndRewards />

              {/* Figma's button fill is size-full of a 1357px-wide container
                  -- a full-width bar, not a small centered pill. */}
              <button
                type="button"
                className="h-[60px] w-full rounded-bl-[25px] rounded-tr-[25px] bg-[#e2ff25] text-[20px] font-bold tracking-[0.35px] text-[#3e4140] shadow-[0px_10px_20px_0px_rgba(226,255,37,0.25)]"
              >
                一鍵領取
              </button>

              <div className="flex items-start gap-[40px]">
                <ProfileEverydayRewards />
                <ReferralCard />
              </div>

              <Promotions />
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
