import { withBasePath } from "../lib/asset";

const AVATAR_RING_GRADIENT =
  "linear-gradient(-48.0664842153752deg, rgb(72,186,206) 0%, rgb(72,186,206) 20%, rgb(154,113,241) 45%, rgb(182,90,253) 55%, rgb(141,84,216) 70%, rgb(111,79,189) 85%, rgb(100,78,179) 100%)";

const AVATAR_BADGE_GRADIENT =
  "linear-gradient(-48.0664842153752deg, rgb(72,186,206) 17.1%, rgb(154,113,241) 77.3%, rgb(182,90,253) 100%)";

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
  return (
    <div className="relative size-[45px] shrink-0 overflow-hidden">
      <img alt="" src={withBasePath("/assets/reward-announcement/ellipse28.svg")} className="absolute right-0 top-[calc(50%+11.7px)] size-[18px] -translate-y-1/2" />
      <div className="absolute left-[calc(50%+5.35px)] top-[calc(50%-5.4px)] h-[27px] w-[34.097px] -translate-x-1/2 -translate-y-1/2">
        <img alt="" src={withBasePath("/assets/reward-announcement/group1084.svg")} className="block size-full max-w-none" />
      </div>
      <div className="absolute left-[calc(50%-0.9px)] top-[calc(50%+0.9px)] h-[28.8px] w-[36px] -translate-x-1/2 -translate-y-1/2">
        <img alt="" src={withBasePath("/assets/reward-announcement/rectangle45.svg")} className="block size-full max-w-none" />
      </div>
    </div>
  );
}

function RewardAnnouncement() {
  return (
    <div className="relative h-[438px] w-[519px] shrink-0 overflow-hidden rounded-tl-[50px] border-2 border-[#23f3d5] bg-white/50">
      <img alt="" src={withBasePath("/assets/reward-announcement/photo-hero.png")} className="pointer-events-none absolute left-[114px] top-[23px] h-[580px] w-[485px] max-w-none object-cover" />
      <img alt="" src={withBasePath("/assets/reward-announcement/rectangle2.svg")} className="pointer-events-none absolute left-[22px] top-[calc(50%+76px)] h-[412px] w-[262px] max-w-none -translate-y-1/2" />

      <div className="absolute left-[18px] top-[18px] flex items-center gap-[10px]">
        <TitleIcon />
        <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">得獎名單</p>
      </div>

      <div className="absolute left-[18px] top-[calc(50%-2.87px)] flex -translate-y-1/2 items-center gap-[6.25px]">
        {REWARD_DIGIT_PAIRS.map((pair, i) => (
          <PointCard key={i} pair={pair} />
        ))}
      </div>

      <div className="absolute bottom-[18px] left-[18px]">
        <DotsGrid size={3.875} gap={7.75} rows={6} cols={6} />
      </div>

      <div className="absolute bottom-[38px] right-[18px] h-[53px] w-[128px] drop-shadow-[0px_10px_10px_rgba(226,255,37,0.25)]">
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
  return (
    <div className="relative size-[45px] shrink-0 overflow-hidden">
      <img alt="" src={withBasePath("/assets/win-list/ellipse29.svg")} className="absolute left-[21.6px] top-[23.4px] size-[18px]" />
      <div className="absolute left-[9.79px] top-[3.64px] h-[37.714px] w-[23.912px]">
        <img alt="" src={withBasePath("/assets/win-list/union1.svg")} className="block size-full max-w-none" />
      </div>
      <img alt="" src={withBasePath("/assets/win-list/star2.svg")} className="absolute left-[15.74px] top-[8.79px] size-[12px]" />
      <div className="absolute left-[1.8px] top-[10.66px] h-[15.884px] w-[39.6px]">
        <img alt="" src={withBasePath("/assets/win-list/group1075.svg")} className="block size-full max-w-none" />
      </div>
    </div>
  );
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
  return (
    <div className="relative size-[25px] shrink-0 overflow-hidden">
      <img alt="" src={withBasePath("/assets/win-list/ellipse27.svg")} className="absolute bottom-px right-px size-[10px]" />
      <div className="absolute inset-[8%]">
        <img alt="" src={withBasePath("/assets/win-list/vector.svg")} className="block size-full max-w-none" />
      </div>
      <img alt="" src={withBasePath("/assets/win-list/subtract.svg")} className="absolute left-[11.84px] top-[6px] h-[13px] w-[1.212px]" />
    </div>
  );
}

function WinnerRow({ w }: { w: (typeof WINNERS)[number] }) {
  return (
    <div className="flex h-[79px] w-full shrink-0 items-center overflow-hidden rounded-[50px] bg-white/60 px-[10px] backdrop-blur-[20px]">
      <div className="flex flex-[205] items-center gap-[10px]">
        <div className="relative size-[59px] shrink-0 rounded-full p-[2px]" style={{ backgroundImage: AVATAR_RING_GRADIENT }}>
          <img alt="" src={w.avatar} className="size-full rounded-full object-cover" />
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
    <div className="relative h-[438px] min-w-0 flex-1 overflow-hidden rounded-br-[70px]" style={{ backgroundImage: WIN_LIST_BG_GRADIENT }}>
      <div className="absolute left-[20px] top-[20px] flex items-center gap-[10px]">
        <WinListTitleIcon />
        <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-white">得獎名單</p>
      </div>
      <div className="absolute left-[20px] right-[20px] top-[85px] flex h-[34px] items-center rounded-[50px] bg-[#e2ff25] px-[20px] backdrop-blur-[10px]">
        <p className="flex-[205] text-[14px] font-bold tracking-[0.15px] text-[#3e4140]">玩家</p>
        <p className="flex-[238] text-center text-[14px] font-bold tracking-[0.15px] text-[#3e4140]">盈利</p>
        <p className="flex-[227] text-[14px] font-bold tracking-[0.15px] text-[#3e4140]">賠率</p>
        <p className="flex-[88] text-[14px] font-bold tracking-[0.15px] text-[#3e4140]">遊戲</p>
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
