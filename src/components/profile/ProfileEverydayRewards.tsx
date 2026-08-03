import { withBasePath } from "../../lib/asset";

type DayState = "claimed" | "current" | "locked";

type Day = {
  label: string;
  reward: string;
  state: DayState;
};

const DAYS: Day[] = [
  { label: "DAY 1", reward: "+99 W", state: "claimed" },
  { label: "DAY 2", reward: "+99 W", state: "current" },
  { label: "DAY 3", reward: "+999 W", state: "locked" },
  { label: "DAY 4", reward: "+2,000 W", state: "locked" },
  { label: "DAY 5", reward: "+5,000 W", state: "locked" },
  { label: "DAY 6", reward: "+10,000 W", state: "locked" },
  { label: "DAY 7", reward: "+99 W", state: "locked" },
];

// Matches Figma's Reward_box component (COMPONENTS LIBRARY, node 279:3842)
// exactly: a blurred coin-glow image sits behind the state icon (sharp only
// for the claimed day, blurred for locked/current), with claimed/locked/
// current each using their own real icon asset instead of a hand-drawn one.
function RewardDay({ label, reward, state }: Day) {
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
        src={withBasePath("/assets/profile/rewards/reward-glow.png")}
        className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isCurrent ? "size-[148px] blur-[2.5px]" : glowSharp ? "size-[116px]" : "size-[116px] blur-[2.5px]"}`}
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
      <img alt="" src={withBasePath("/assets/profile/rewards/model.png")} className="pointer-events-none absolute right-0 top-0 h-full w-[45%] object-cover object-top opacity-90" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%] bg-gradient-to-r from-transparent via-transparent to-white/0" />

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

      <div className="relative z-10 flex items-center gap-[10px] overflow-x-auto">
        {DAYS.map((day) => (
          <RewardDay key={day.label} {...day} />
        ))}
      </div>

      <button
        type="button"
        className="relative z-10 flex h-[53px] w-[300px] items-center justify-between rounded-full bg-[#e2ff25] px-[20px] drop-shadow-[0px_10px_10px_rgba(226,255,37,0.25)]"
      >
        <p className="text-[16px] font-bold tracking-[0.15px] text-[#444242]">立即領取</p>
        <div className="flex size-[25px] items-center justify-center rounded-full bg-[#3e4140]">
          <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[8px] w-[5px]" />
        </div>
      </button>
    </div>
  );
}
