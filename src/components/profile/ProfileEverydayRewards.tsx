import { withBasePath } from "../../lib/asset";

type DayState = "claimed" | "current" | "locked";

type Day = {
  label: string;
  reward: string;
  state: DayState;
  glow: string;
  glowFit?: "cover" | "contain";
};

const DAYS: Day[] = [
  { label: "DAY 1", reward: "+99 W", state: "claimed", glow: "/assets/profile/rewards/glow-day1.png" },
  { label: "DAY 2", reward: "+99 W", state: "current", glow: "/assets/profile/rewards/glow-day2.png" },
  { label: "DAY 3", reward: "+999 W", state: "locked", glow: "/assets/profile/rewards/glow-day3.png", glowFit: "contain" },
  { label: "DAY 4", reward: "+2,000 W", state: "locked", glow: "/assets/profile/rewards/glow-day4.png" },
  { label: "DAY 5", reward: "+5,000 W", state: "locked", glow: "/assets/profile/rewards/glow-day5.png" },
  { label: "DAY 6", reward: "+10,000 W", state: "locked", glow: "/assets/profile/rewards/glow-day6.png" },
  { label: "DAY 7", reward: "+99 W", state: "locked", glow: "/assets/profile/rewards/glow-day1.png" },
];

// Matches Figma's Everyday Rewards instance (Profile Page, node 90:11373)
// exactly: each day has its own reward artwork (money bag, treasure chest,
// barrel, etc.) instead of one icon reused for every card, and only the
// claimed day's glow renders sharp -- every other state is blurred.
function RewardDay({ label, reward, state, glow, glowFit = "cover" }: Day) {
  const isCurrent = state === "current";
  const opacity = state === "locked" ? 0.5 : 0.8;
  const glowSharp = state === "claimed";
  const actionIcon =
    state === "claimed"
      ? "/assets/profile/rewards/action-claimed.svg"
      : isCurrent
        ? "/assets/profile/rewards/action-current.svg"
        : "/assets/profile/rewards/action-locked.svg";

  return (
    <div
      className={`relative shrink-0 overflow-hidden border-[#8d54d8] bg-white ${
        isCurrent ? "h-[192px] w-[149px] rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] border-4 border-[#01fab0]" : "h-[167px] w-[129px] rounded-[30px] border"
      }`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(-41deg, rgba(1,250,176,${opacity}) 19%, rgba(20,232,184,${opacity}) 7%, rgba(72,186,206,${opacity}) 16%, rgba(154,113,241,${opacity}) 50%, rgba(182,90,253,${opacity}) 61%, rgba(141,84,216,${opacity}) 101%, rgba(111,79,189,${opacity}) 137%, rgba(100,78,179,${opacity}) 158%)`,
        }}
      />
      <img
        alt=""
        src={withBasePath(glow)}
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 ${glowFit === "contain" ? "object-contain" : "object-cover"} ${
          isCurrent ? "top-[18px] size-[148px] blur-[2.5px]" : glowSharp ? "top-[29px] size-[116px]" : "top-[29px] size-[116px] blur-[2.5px]"
        }`}
      />
      <div className={`absolute left-0 top-0 flex w-full items-center justify-center bg-[#8d54d8] ${isCurrent ? "h-[44px]" : "h-[35px]"}`}>
        <p className={`whitespace-nowrap font-bold tracking-[0.15px] text-[#67e4d2] ${isCurrent ? "text-[16px]" : "text-[14px]"}`}>{label}</p>
      </div>
      <img
        alt=""
        src={withBasePath(actionIcon)}
        className={`pointer-events-none absolute ${isCurrent ? "left-1/2 top-[calc(50%+0.5px)] size-[61px] -translate-x-1/2 -translate-y-1/2" : "left-[41px] top-[64px] size-[45px]"}`}
      />
      <p
        className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center font-bold tracking-[0.15px] text-white ${
          isCurrent ? "bottom-[16px] text-[20px]" : "bottom-[19px] text-[16px]"
        }`}
      >
        {reward}
      </p>
    </div>
  );
}

export default function ProfileEverydayRewards() {
  return (
    <div className="relative mr-[40px] flex flex-col gap-[20px] overflow-hidden rounded-br-[50px] rounded-tl-[50px] border border-[#8d54d8] p-[19px]">
      {/* Figma sizes these decorative layers as fixed 588x388 / 524x388
          boxes anchored to the right edge, not stretched to the card's
          own (variable) height -- stretching them was what caused the
          warped look. */}
      <img
        alt=""
        src={withBasePath("/assets/profile/rewards/card-bg-stripe.svg")}
        className="pointer-events-none absolute right-[-1px] top-1/2 h-[388px] w-[588px] -translate-y-1/2"
      />
      <img
        alt=""
        src={withBasePath("/assets/profile/rewards/card-front-girl.png")}
        className="pointer-events-none absolute right-[-1px] top-0 z-20 h-[388px] w-[524px] object-cover object-top"
      />

      <div className="relative z-10 flex items-center gap-[10px]">
        <svg viewBox="0 0 45 45" className="size-[45px]">
          <rect x="7" y="10" width="31" height="27" rx="6" fill="none" stroke="#3e4140" strokeWidth="2.5" />
          <path d="M7 18h31" stroke="#3e4140" strokeWidth="2.5" />
          <path d="M15 6v8M30 6v8" stroke="#3e4140" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="31" cy="30" r="8" fill="#23f3d5" />
          <path d="M27.5 30 30 32.5 34.5 27" stroke="#3e4140" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">每日簽到</p>
      </div>

      {/* Figma clips this row at a fixed width instead of scrolling --
          the trailing days are meant to sit cropped behind the girl, not
          be scrolled into view. */}
      <div className="relative z-10 flex items-center gap-[10px] overflow-hidden">
        {DAYS.map((day) => (
          <RewardDay key={day.label} {...day} />
        ))}
      </div>

      <button type="button" className="relative z-10 h-[53px] w-[300px] drop-shadow-[0px_10px_10px_rgba(226,255,37,0.25)]">
        <img alt="" src={withBasePath("/assets/shared/pill-btn-yellow.svg")} className="pointer-events-none absolute inset-0 block size-full max-w-none" />
        <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-between">
          <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#444242]">立即領取</p>
          <div className="flex size-[25px] shrink-0 items-center justify-center rounded-full bg-[#3e4140]">
            <img alt="" src={withBasePath("/assets/shared/pill-btn-chevron.svg")} className="h-[7.222px] w-[4.711px]" />
          </div>
        </div>
      </button>
    </div>
  );
}
