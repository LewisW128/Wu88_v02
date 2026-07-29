import { withBasePath } from "../lib/asset";

const AVATAR_BADGE_GRADIENT =
  "linear-gradient(-48.0664842153752deg, rgb(1,250,176) 90.123%, rgb(20,232,184) 61.931%, rgb(72,186,206) 9.575%, rgb(154,113,241) 66.946%, rgb(182,90,253) 91.111%, rgb(141,84,216) 183.74%, rgb(111,79,189) 264.29%, rgb(100,78,179) 312.62%)";

const WIN_LIST_BG_GRADIENT =
  "linear-gradient(-56deg, rgb(72,186,206) 22%, rgb(154,113,241) 69%, rgb(141,84,216) 142%, rgb(100,78,179) 222%)";

function DotsGrid({ size, gap, rows, cols }: { size: number; gap: number; rows: number; cols: number }) {
  return (
    <div className="flex flex-col gap-[7.75px]">
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex items-center" style={{ gap }}>
          {Array.from({ length: cols }).map((_, c) => (
            <img alt="" key={c} src={withBasePath("/assets/reward-announcement/ellipse2.svg")} style={{ width: size, height: size }} />
          ))}
        </div>
      ))}
    </div>
  );
}

const REWARD_DIGIT_PAIRS = ["09", "99", "99", "00", "00", "00"];

function PointCard({ pair }: { pair: string }) {
  return (
    <div className="relative flex size-[56.254px] shrink-0 items-center overflow-hidden">
      <div className="absolute left-1/2 top-[0.31px] h-[26.252px] w-[56.254px] -translate-x-1/2 rounded-t-[10.417px] bg-[#1e1d20]" />
      <div className="absolute bottom-0 left-1/2 h-[26.044px] w-[56.254px] -translate-x-1/2 rounded-b-[10.417px] bg-[#1e1d20]" />
      <p className="relative z-10 flex-1 text-center font-['Advent_Pro'] text-[50px] font-bold leading-none text-white">{pair[0]}</p>
      <p className="relative z-10 flex-1 text-center font-['Advent_Pro'] text-[50px] font-bold leading-none text-white">{pair[1]}</p>
    </div>
  );
}

function TitleIcon() {
  return <img alt="" src={withBasePath("/assets/icons/accrue.svg")} className="size-[45px] shrink-0" />;
}

function RewardAnnouncement() {
  return (
    <div className="relative h-[438px] w-[519px] shrink-0 overflow-hidden rounded-tl-[50px] bg-white/50">
      <img alt="" src={withBasePath("/assets/reward-announcement/photo-hero.png")} className="pointer-events-none absolute left-[116px] top-[25px] h-[580px] w-[485px] max-w-none object-cover" />
      <img alt="" src={withBasePath("/assets/reward-announcement/rectangle2.svg")} className="pointer-events-none absolute left-[24px] top-[calc(50%+76px)] h-[412px] w-[262px] max-w-none -translate-y-1/2" />

      <div className="absolute left-[20px] top-[20px] flex items-center gap-[10px]">
        <TitleIcon />
        <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">累積獎勵</p>
      </div>

      <div className="absolute left-[20px] top-[calc(50%-2.87px)] flex -translate-y-1/2 items-center gap-[6.25px]">
        {REWARD_DIGIT_PAIRS.map((pair, i) => (
          <PointCard key={i} pair={pair} />
        ))}
      </div>

      <div className="absolute bottom-[20px] left-[20px]">
        <DotsGrid size={3.875} gap={7.75} rows={6} cols={6} />
      </div>

      <div className="absolute bottom-[40px] right-[20px] h-[53px] w-[128px] drop-shadow-[0px_10px_10px_rgba(226,255,37,0.25)]">
        <div className="pointer-events-none absolute inset-0 -scale-x-100">
          <img alt="" src={withBasePath("/assets/reward-announcement/rectangle3.svg")} className="block size-full max-w-none" />
        </div>
        <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-between">
          <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#444242]">快速下注</p>
          <div className="flex size-[25px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[5.556px]">
            <img alt="" src={withBasePath("/assets/reward-announcement/rectangle1.svg")} className="h-[6.111px] w-[3.333px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function WinListTitleIcon() {
  return <img alt="" src={withBasePath("/assets/icons/trophy.svg")} className="size-[45px] shrink-0" />;
}

const WINNERS = [
  { avatar: withBasePath("/assets/win-list/avatar.png"), name: "LUCKY777", amount: "+ 10,000,000", thumb: withBasePath("/assets/win-list/chatgpt-image-1.png") },
  { avatar: withBasePath("/assets/win-list/avatar1.png"), name: "JACK1234", amount: "+ 90,000", thumb: withBasePath("/assets/win-list/products-img.png") },
  { avatar: withBasePath("/assets/win-list/avatar2.png"), name: "LUCY2345", amount: "+ 10,000", thumb: withBasePath("/assets/win-list/download1.png") },
  { avatar: withBasePath("/assets/win-list/avatar3.png"), name: "LUCY2345", amount: "+ 1,000,000", thumb: withBasePath("/assets/win-list/sl2571-1.png") },
  { avatar: withBasePath("/assets/win-list/avatar.png"), name: "LUCKY777", amount: "+ 500,000", thumb: withBasePath("/assets/win-list/chatgpt-image-1.png") },
  { avatar: withBasePath("/assets/win-list/avatar1.png"), name: "JACK1234", amount: "+ 20,000", thumb: withBasePath("/assets/win-list/products-img.png") },
  { avatar: withBasePath("/assets/win-list/avatar2.png"), name: "LUCY2345", amount: "+ 8,000,000", thumb: withBasePath("/assets/win-list/download1.png") },
];

function MoneyIcon() {
  return <img alt="" src={withBasePath("/assets/icons/money.svg")} className="size-[25px] shrink-0" />;
}

function WinnerRow({ w }: { w: (typeof WINNERS)[number] }) {
  return (
    <div className="flex h-[79px] w-full shrink-0 items-center overflow-hidden rounded-[50px] bg-white/60 px-[10px] backdrop-blur-[20px]">
      <div className="flex flex-[205] items-center gap-[10px]">
        <div className="relative size-[59px] shrink-0 rounded-full">
          <img alt="" src={w.avatar} className="size-full rounded-full object-cover" />
          <img alt="" src={withBasePath("/assets/win-list/avatar-ring.svg")} className="pointer-events-none absolute inset-0 size-full" />
          <div
            className="absolute bottom-0 right-0 size-[21px] overflow-hidden rounded-full"
            style={{ backgroundImage: AVATAR_BADGE_GRADIENT }}
          >
            <img alt="" src={withBasePath("/assets/profile/icon-crown.svg")} className="absolute left-[3px] top-[3px] size-[15px]" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[5px]">
          <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#3e4140]">{w.name}</p>
          <div className="w-fit rounded-full bg-[#8d54d8] px-[5px] py-px">
            <p className="whitespace-nowrap text-[12px] font-medium tracking-[0.15px] text-white">LV.12</p>
          </div>
        </div>
      </div>

      <div className="flex flex-[238] items-center gap-[10px]">
        <MoneyIcon />
        <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#3e4140]">{w.amount}</p>
      </div>

      <p className="flex-[227] whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#3e4140]">0.00x</p>

      <div className="flex flex-[88] shrink-0 justify-end">
        <div className="relative h-[59px] w-[76px] shrink-0 overflow-hidden rounded-[37.342px] bg-white">
          <img alt="" src={w.thumb} className="absolute inset-0 size-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function WinList() {
  return (
    <div className="relative h-[438px] min-w-0 flex-1 overflow-hidden rounded-tl-[50px] rounded-br-[70px]" style={{ backgroundImage: WIN_LIST_BG_GRADIENT }}>
      <div className="absolute left-[20px] top-[20px] flex items-center gap-[10px]">
        <WinListTitleIcon />
        <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-white">得獎名單</p>
      </div>
      <div className="absolute left-[20px] right-[20px] top-[91px] flex h-[20px] items-center">
        <p className="flex-[205] whitespace-nowrap text-[14px] font-bold tracking-[0.15px] text-white">
          玩家 <span className="text-[#23f3d5]">/</span>
        </p>
        <p className="flex-[238] whitespace-nowrap text-[14px] font-bold tracking-[0.15px] text-white">
          盈利 <span className="text-[#23f3d5]">/</span>
        </p>
        <p className="flex-[227] whitespace-nowrap text-[14px] font-bold tracking-[0.15px] text-white">
          賠率 <span className="text-[#23f3d5]">/</span>
        </p>
        <p className="flex-[88] whitespace-nowrap text-[14px] font-bold tracking-[0.15px] text-white">
          遊戲 <span className="text-[#23f3d5]">/</span>
        </p>
      </div>

      <div
        className="scrollbar-gray-thin absolute left-[20px] right-0 top-[129px] bottom-[18px] flex flex-col gap-[10px] overflow-y-auto pr-[20px]"
        style={{
          maskImage: "linear-gradient(to bottom, black calc(100% - 40px), transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black calc(100% - 40px), transparent 100%)",
        }}
      >
        {WINNERS.map((w, i) => (
          <WinnerRow key={i} w={w} />
        ))}
      </div>
    </div>
  );
}

export default function RewardAndWinList() {
  return (
    <div className="flex w-full items-end gap-[40px] pr-[40px]">
      <RewardAnnouncement />
      <WinList />
    </div>
  );
}
