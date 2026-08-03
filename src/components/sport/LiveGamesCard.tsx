"use client";

import { useState } from "react";

import { withBasePath } from "../../lib/asset";
import SportSectionTitle from "./SportSectionTitle";
import { BaseballIcon, BasketballIcon, FifaCupIcon, FootballIcon } from "./SportCategoryIcons";
import type { Match, Team } from "./sportLiveGamesData";

type Category = "worldcup" | "football" | "basketball" | "baseball";

const CATEGORY_ICONS: Record<Category, (props: { className?: string }) => React.JSX.Element> = {
  worldcup: FifaCupIcon,
  football: FootballIcon,
  basketball: BasketballIcon,
  baseball: BaseballIcon,
};

const CATEGORY_ORDER: Category[] = ["worldcup", "football", "basketball", "baseball"];

function CategoryToggle({ active, onSelect }: { active: Category; onSelect: (category: Category) => void }) {
  return (
    <div className="flex items-center gap-[20px]">
      {CATEGORY_ORDER.map((category) => {
        const Icon = CATEGORY_ICONS[category];
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            aria-label={category}
            onClick={() => onSelect(category)}
            className={`relative flex h-[48px] w-[46px] items-center justify-center rounded-[10px] ${isActive ? "bg-[#3e4140] text-white" : "bg-[#f4f4f4] text-[#3e4140]"}`}
          >
            <Icon className="size-[25px]" />
            {isActive && <div className="absolute bottom-[5px] h-[3px] w-[12px] rounded-full bg-[#23f3d5]" />}
          </button>
        );
      })}
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

function TeamBadge({ team, align }: { team: Team; align: "left" | "right" }) {
  const flag = (
    <div className="size-[40px] shrink-0 overflow-hidden rounded-full bg-white">
      <img alt="" src={team.flag} className="size-full object-cover" />
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

function Score({ score, activeHalf = "top" }: { score: [number, number]; activeHalf?: "top" | "bottom" }) {
  const [a, b] = score;
  return (
    <div className="flex items-center gap-[10px]">
      <div className="flex items-start gap-[10px]">
        <ScoreDigit value={a} leading={a > b} />
        <p className="text-[36px] font-bold leading-[36px] tracking-[0.36px] text-[#3e4140]">:</p>
        <ScoreDigit value={b} leading={b > a} />
      </div>
      <div className="flex w-[18px] flex-col gap-[3px]">
        <div className={`flex h-[18px] items-center justify-center rounded-[5px] px-[3px] ${activeHalf === "top" ? "bg-[#23f3d5]" : "bg-[#dadada]"}`}>
          <p className="text-[12px] font-bold tracking-[0.15px] text-[#3e4140]">上</p>
        </div>
        <div className={`flex h-[18px] items-center justify-center rounded-[5px] px-[3px] ${activeHalf === "bottom" ? "bg-[#23f3d5]" : "bg-[#f4f4f4]"}`}>
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
        <Score score={match.score} activeHalf={match.activeHalf} />
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
