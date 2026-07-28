import iconChart from "../assets/reward/icon-chart.svg";
import bgLayer from "../assets/reward/bg-layer.png";
import rectangle2 from "../assets/reward/rectangle2.svg";
import btnBg from "../assets/reward/btn-bg.svg";
import vector1 from "../assets/reward/vector1.svg";
import ellipse3 from "../assets/reward/ellipse3.svg";

import iconCrown from "../assets/winlist/icon-crown.svg";
import iconTitle from "../assets/winlist/icon-title.svg";
import iconMoney from "../assets/winlist/icon-money.svg";
import gameThumb1 from "../assets/winlist/game-thumb1.png";
import gameThumb2 from "../assets/winlist/game-thumb2.png";
import gameThumb3a from "../assets/winlist/game-thumb3a.png";
import gameThumb3b from "../assets/winlist/game-thumb3b.png";
import gameThumb4 from "../assets/winlist/game-thumb4.png";
import avatar1 from "../assets/winlist/avatar1.png";
import avatar2 from "../assets/winlist/avatar2.png";
import avatar3 from "../assets/winlist/avatar3.png";
import avatar4 from "../assets/winlist/avatar4.png";
import girlTrophy from "../assets/winlist/girl-trophy.png";

const DIGITS = ["0", "9", "9", "9", "0", "0", "0", "0", "0", "0", "0", "0"];

function DotsGrid({ size, gap, rows, cols }: { size: number; gap: number; rows: number; cols: number }) {
  return (
    <div className="flex flex-col gap-[7.75px]">
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex items-center" style={{ gap }}>
          {Array.from({ length: cols }).map((_, c) => (
            <img alt="" key={c} src={ellipse3} style={{ width: size, height: size }} />
          ))}
        </div>
      ))}
    </div>
  );
}

const WINNERS = [
  { avatar: avatar1, name: "LUCKY777", amount: "+ 10,000,000", thumb: gameThumb1, thumb2: undefined },
  { avatar: avatar2, name: "JACK1234", amount: "+ 90,000", thumb: gameThumb2, thumb2: undefined },
  { avatar: avatar3, name: "LUCY2345", amount: "+ 10,000", thumb: gameThumb3a, thumb2: gameThumb3b },
  { avatar: avatar4, name: "LUCY2345", amount: "+ 1,000,000", thumb: gameThumb4, thumb2: undefined },
];

function WinnerRow({ w }: { w: (typeof WINNERS)[number] }) {
  return (
    <div className="relative flex h-[79px] w-full shrink-0 items-center justify-between rounded-full bg-white/60 px-[10px] backdrop-blur-[20px]">
      <div className="flex items-center gap-[10px]">
        <div
          className="relative size-[59px] shrink-0 rounded-full p-[2px]"
          style={{
            backgroundImage:
              "linear-gradient(-48.0664842153752deg, rgb(72,186,206) 0%, rgb(72,186,206) 20%, rgb(154,113,241) 45%, rgb(182,90,253) 55%, rgb(141,84,216) 70%, rgb(111,79,189) 85%, rgb(100,78,179) 100%)",
          }}
        >
          <img alt="" src={w.avatar} className="size-full rounded-full object-cover" />
          <div
            className="absolute bottom-0 right-0 size-[21px] overflow-hidden rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(-48.0664842153752deg, rgb(72,186,206) 17.1%, rgb(154,113,241) 77.3%, rgb(182,90,253) 100%)",
            }}
          >
            <img alt="" src={iconCrown} className="absolute left-[3px] top-[3px] size-[15px]" />
          </div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#3e4140]">{w.name}</p>
          <div className="w-fit rounded-full bg-[#8d54d8] px-[5px] py-px">
            <p className="whitespace-nowrap text-[12px] font-medium tracking-[0.15px] text-white">LV.12</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <img alt="" src={iconMoney} className="size-[25px]" />
        <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#3e4140]">{w.amount}</p>
      </div>
      <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#3e4140]">0.00x</p>
      <div className="relative size-[59px] shrink-0 overflow-hidden rounded-full bg-white">
        <img alt="" src={w.thumb} className="absolute inset-0 size-full object-cover" />
        {w.thumb2 && <img alt="" src={w.thumb2} className="absolute inset-0 size-full object-cover" />}
      </div>
    </div>
  );
}

function RewardAnnouncement() {
  return (
    <div className="relative h-[438px] w-[519px] shrink-0 overflow-hidden rounded-tl-[50px] border-2 border-[#23f3d5] bg-white/50">
      <img alt="" src={bgLayer} className="pointer-events-none absolute bottom-[-2px] left-[185px] h-[424px] w-[435px] object-cover opacity-50 blur-[2.5px]" />
      <img alt="" src={rectangle2} className="pointer-events-none absolute left-[22px] top-[190px] h-[333px] w-[212px]" />

      <div className="absolute left-[18px] top-[18px] flex items-center gap-[10px]">
        <img alt="" src={iconChart} className="size-[45px]" />
        <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">累積獎勵</p>
      </div>

      <div className="absolute left-1/2 top-[141px] flex -translate-x-1/2 gap-[8px]">
        {DIGITS.map((d, i) => (
          <div key={i} className="relative flex size-[72px] items-center justify-center rounded-[13px] bg-[#1e1d20]">
            <p className="font-['Advent_Pro'] text-[52px] font-bold text-white">{d}</p>
            {i % 2 === 1 && i !== DIGITS.length - 1 && <div className="w-[8px]" />}
          </div>
        ))}
      </div>

      <div className="absolute bottom-[18px] left-[18px]">
        <DotsGrid size={4} gap={8} rows={6} cols={7} />
      </div>

      <div className="absolute bottom-[38px] right-[18px] h-[53px] w-[128px]">
        <div className="pointer-events-none absolute inset-[-18.41%_-7.81%_-55.27%_-23.44%]">
          <img alt="" src={btnBg} className="block size-full max-w-none" />
        </div>
        <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-between">
          <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#444242]">快速下注</p>
          <img alt="" src={vector1} className="h-[10px] w-[26px]" />
        </div>
      </div>
    </div>
  );
}

function WinList() {
  return (
    <div className="relative h-[526px] w-[870px] shrink-0 overflow-hidden">
      <div
        className="absolute right-[126px] top-[88px] h-[438px] w-[744px] overflow-hidden rounded-br-[70px]"
        style={{
          backgroundImage:
            "linear-gradient(-53deg, rgb(72,186,206) 18%, rgb(154,113,241) 71%, rgb(141,84,216) 152%, rgb(100,78,179) 241%)",
        }}
      >
        <div className="absolute left-[20px] top-[20px] flex items-center gap-[10px]">
          <img alt="" src={iconTitle} className="size-[45px]" />
          <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-white">得獎名單</p>
        </div>
        <div className="absolute right-[20px] top-[20px]">
          <DotsGrid size={2.5} gap={5} rows={6} cols={6} />
        </div>

        <div className="absolute left-[20px] top-[85px] flex h-[34px] w-[628px] items-center rounded-full bg-[#e2ff25] px-[20px] text-[14px] font-bold tracking-[0.15px] text-[#3e4140]">
          <p className="w-[205px]">玩家</p>
          <p className="w-[145px] text-center">盈利</p>
          <p className="w-[145px]">賠率</p>
          <p>遊戲</p>
        </div>

        <div className="absolute left-[20px] top-[129px] flex h-[308px] w-[628px] flex-col gap-[10px] overflow-y-auto">
          {WINNERS.map((w, i) => (
            <WinnerRow key={i} w={w} />
          ))}
        </div>
      </div>
      <img alt="" src={girlTrophy} className="absolute right-0 top-0 h-[526px] w-[284px] object-cover" />
    </div>
  );
}

export default function RewardAndWinList() {
  return (
    <div className="flex w-full items-end gap-[40px] overflow-x-auto">
      <RewardAnnouncement />
      <WinList />
    </div>
  );
}
