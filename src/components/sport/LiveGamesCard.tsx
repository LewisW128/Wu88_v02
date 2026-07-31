"use client";

import { useState } from "react";

import { withBasePath } from "../../lib/asset";
import SportSectionTitle from "./SportSectionTitle";
import type { Match, Team } from "./sportLiveGamesData";

type Category = "worldcup" | "football" | "basketball" | "baseball";

const CATEGORY_ICONS: Record<Category, { active: string; inactive: string }> = {
  worldcup: {
    active: withBasePath("/assets/sport/live/icons/worldcup-active.png"),
    inactive: withBasePath("/assets/sport/live/icons/worldcup-inactive.png"),
  },
  football: {
    active: withBasePath("/assets/sport/live/icons/football-active.png"),
    inactive: withBasePath("/assets/sport/live/icons/football-inactive.png"),
  },
  basketball: {
    active: withBasePath("/assets/sport/live/icons/basketball-active.png"),
    inactive: withBasePath("/assets/sport/live/icons/basketball-inactive.png"),
  },
  baseball: {
    active: withBasePath("/assets/sport/live/icons/baseball-active.png"),
    inactive: withBasePath("/assets/sport/live/icons/baseball-inactive.png"),
  },
};

const CATEGORY_ORDER: Category[] = ["worldcup", "football", "basketball", "baseball"];

function CategoryToggle({ active, onSelect }: { active: Category; onSelect: (category: Category) => void }) {
  return (
    <div className="flex items-center gap-[20px]">
      {CATEGORY_ORDER.map((category) => (
        <button key={category} type="button" aria-label={category} onClick={() => onSelect(category)}>
          <img
            alt=""
            src={category === active ? CATEGORY_ICONS[category].active : CATEGORY_ICONS[category].inactive}
            className="h-[48px] w-[46px]"
          />
        </button>
      ))}
    </div>
  );
}

function LeagueDropdown({ label }: { label: string }) {
  return (
    <div className="flex shrink-0 items-center gap-[50px] rounded-full bg-[#3e4140] px-[20px] py-[10px]">
      <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-white">{label}</p>
      <img alt="" src={withBasePath("/assets/shared/arrow-chevron-gray.svg")} className="h-[8px] w-[13px] rotate-90" />
    </div>
  );
}

function EnglandFlag() {
  return (
    <div className="relative size-full bg-white">
      <div className="absolute inset-y-0 left-1/2 w-[9px] -translate-x-1/2 bg-[#b72336]" />
      <div className="absolute inset-x-0 top-1/2 h-[9px] -translate-y-1/2 bg-[#b72336]" />
    </div>
  );
}

function TeamBadge({ team, align }: { team: Team; align: "left" | "right" }) {
  const flag = (
    <div className="size-[40px] shrink-0 overflow-hidden rounded-full border border-[#f4f4f4] bg-white">
      {team.flag === "england" ? <EnglandFlag /> : <img alt="" src={team.flag} className="size-full object-cover" />}
    </div>
  );
  const label = (
    <div className={`flex flex-col ${align === "right" ? "items-end" : "items-start"} whitespace-nowrap tracking-[0.15px]`}>
      <p className="text-[14px] font-bold text-[#3e4140]">{team.name}</p>
      <p className="text-[12px] font-medium text-[#23f3d5]">{team.sub}</p>
    </div>
  );
  return (
    <div className="flex items-center gap-[20px]">
      {align === "left" ? (
        <>
          {flag}
          {label}
        </>
      ) : (
        <>
          {label}
          {flag}
        </>
      )}
    </div>
  );
}

function ScoreDigit({ value, leading }: { value: number; leading: boolean }) {
  return (
    <div className="relative flex w-[23px] flex-col items-center">
      <p className="text-[36px] font-bold leading-[36px] tracking-[0.36px] text-[#3e4140]">{value}</p>
      {leading && <div className="mt-[4px] h-[3px] w-[23px] rounded-full bg-[#8d54d8]" />}
    </div>
  );
}

function Score({ score }: { score: [number, number] }) {
  const [a, b] = score;
  return (
    <div className="flex items-center gap-[10px]">
      <div className="flex items-start gap-[10px]">
        <ScoreDigit value={a} leading={a > b} />
        <p className="text-[36px] font-bold leading-[36px] tracking-[0.36px] text-[#3e4140]">:</p>
        <ScoreDigit value={b} leading={b > a} />
      </div>
      <div className="flex w-[18px] flex-col gap-[3px]">
        <div className="flex h-[18px] items-center justify-center rounded-[5px] bg-[#23f3d5] px-[3px]">
          <p className="text-[12px] font-bold tracking-[0.15px] text-[#3e4140]">上</p>
        </div>
        <div className="flex h-[18px] items-center justify-center rounded-[5px] bg-[#f4f4f4] px-[3px]">
          <p className="text-[12px] font-bold tracking-[0.15px] text-[#3e4140]">下</p>
        </div>
      </div>
    </div>
  );
}

function MatchRow({ match }: { match: Match }) {
  return (
    <div className="flex items-center gap-[40px] rounded-full border border-[#01fab0] bg-white/50 px-[40px] py-[10px] backdrop-blur-[10px]">
      <div className="flex w-[98px] shrink-0 flex-col whitespace-nowrap">
        <p className="text-[36px] leading-[36px] tracking-[0.36px] text-[#b2b2b2]">{match.time}</p>
        <p className="text-[12px] tracking-[0.15px] text-[#8d54d8]">{match.offset}</p>
      </div>
      <div className="h-[93px] w-px shrink-0 bg-[#f4f4f4]" />
      <div className="flex flex-1 items-center justify-between">
        <TeamBadge team={match.team1} align="left" />
        <Score score={match.score} />
        <TeamBadge team={match.team2} align="right" />
      </div>
      <button
        type="button"
        aria-label="賽事詳情"
        className="flex size-[45px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[10px]"
      >
        <img alt="" src={withBasePath("/assets/shared/arrow-chevron-white.svg")} className="h-[13px] w-[8px]" />
      </button>
    </div>
  );
}

function PageNumber({ label, active }: { label: string; active: boolean }) {
  return (
    <div
      className={`flex size-[46px] shrink-0 items-center justify-center rounded-full text-[20px] font-bold tracking-[0.35px] ${
        active ? "bg-[#23f3d5] text-white" : "bg-[#f4f4f4] text-[#3e4140]"
      }`}
    >
      {label}
    </div>
  );
}

export type CategoryData = {
  dropdownLabel?: string;
  matches: Match[];
};

export default function LiveGamesCard({ data }: { data: Record<Category, CategoryData> }) {
  const [active, setActive] = useState<Category>("worldcup");
  const { dropdownLabel, matches } = data[active];

  return (
    <div className="flex w-full flex-col gap-[20px]">
      <div className="flex items-center justify-between pl-[20px]">
        <div className="flex items-center gap-[40px]">
          <SportSectionTitle>即時賽事</SportSectionTitle>
          <CategoryToggle active={active} onSelect={setActive} />
        </div>
        {dropdownLabel && <LeagueDropdown label={dropdownLabel} />}
      </div>

      <div className="flex flex-col gap-[10px]">
        {matches.map((match, index) => (
          <MatchRow key={index} match={match} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-[20px]">
        <button type="button" aria-label="上一頁" className="flex size-[45px] items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[10px]">
          <img alt="" src={withBasePath("/assets/shared/arrow-chevron-white.svg")} className="h-[13px] w-[8px] rotate-180" />
        </button>
        <PageNumber label="01" active />
        <PageNumber label="02" active={false} />
        <PageNumber label="03" active={false} />
        <PageNumber label="04" active={false} />
        <button type="button" aria-label="下一頁" className="flex size-[45px] items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[10px]">
          <img alt="" src={withBasePath("/assets/shared/arrow-chevron-white.svg")} className="h-[13px] w-[8px]" />
        </button>
      </div>
    </div>
  );
}
