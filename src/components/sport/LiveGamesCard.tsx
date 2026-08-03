"use client";

import { useEffect, useRef, useState } from "react";

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

function TeamBadge({ team }: { team: Team }) {
  return (
    <div className="flex items-center gap-[20px]">
      <div className="size-[40px] shrink-0 overflow-hidden rounded-full bg-white">
        <img alt="" src={team.flag} className="size-full object-cover" />
      </div>
      <div className="flex flex-col items-start whitespace-nowrap tracking-[0.15px]">
        <p className="text-[14px] font-bold text-[#3e4140]">{team.name}</p>
        <p className="text-[12px] font-medium text-[#23f3d5]">{team.sub}</p>
      </div>
    </div>
  );
}

function ScoreDigit({ value, leading }: { value: number; leading: boolean }) {
  // Switching category tabs swaps the whole match list, so scores jump
  // straight to new values -- roll the old digit out and the new one in
  // instead of just popping, so the change reads as an update, not a reload.
  // mountedRef guards the very first render so the whole board doesn't play
  // an unwanted intro animation on page load, only on later changes.
  const prevValueRef = useRef(value);
  const mountedRef = useRef(false);
  const [outgoing, setOutgoing] = useState<number | null>(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    if (prevValueRef.current === value) return;
    setOutgoing(prevValueRef.current);
    prevValueRef.current = value;
    const timeout = setTimeout(() => setOutgoing(null), 350);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="relative flex w-[23px] flex-col items-center">
      <div className="relative h-[36px] w-full overflow-hidden">
        {outgoing !== null && (
          <p
            key={`out-${outgoing}`}
            className="animate-score-flip-out absolute inset-0 text-center text-[36px] font-bold leading-[36px] tracking-[0.36px] text-[#3e4140]"
          >
            {outgoing}
          </p>
        )}
        <p
          key={`in-${value}`}
          className={`absolute inset-0 text-center text-[36px] font-bold leading-[36px] tracking-[0.36px] text-[#3e4140] ${outgoing !== null ? "animate-score-flip-in" : ""}`}
        >
          {value}
        </p>
      </div>
      {leading && <div className="mt-[4px] h-[3px] w-[23px] rounded-full bg-[#8d54d8] shadow-[0px_10px_10px_rgba(141,84,216,0.5)]" />}
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
    <div className="flex w-full items-center gap-[40px] rounded-full border border-[#01fab0] bg-white/50 px-[40px] py-[10px] backdrop-blur-[10px]">
      <div className="flex w-[98px] shrink-0 flex-col whitespace-nowrap">
        <p className="text-[36px] leading-[36px] tracking-[0.36px] text-[#b2b2b2]">{match.time}</p>
        <p className="text-[12px] tracking-[0.15px] text-[#8d54d8]">{match.offset}</p>
      </div>
      <div className="h-[93px] w-px shrink-0 bg-[#f4f4f4]" />
      {/* Figma's SportInformations spec positions team2 at a literal
          left:860px within a literal 974px-wide box (860/974 = 88.296%).
          That box only fits because Figma's own canvas gives this row
          ~1357px total. This project's actual content column (sidebar +
          page padding subtracted from the page's design width) is
          narrower than that, so a literal w-[974px] shrink-0 box can't
          shrink to fit and overflows the row's rounded border. Using
          flex-1 (fluid) + a PERCENTAGE offset for team2 keeps the exact
          same proportional layout Figma intends -- team2's flag still
          lands at an identical x across every row for a given render
          (invariant to team-name length, same guarantee as before) --
          while actually fitting whatever width this column has. */}
      <div className="relative h-[41px] min-w-0 flex-1">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <TeamBadge team={match.team1} />
        </div>
        <div className="absolute left-[calc(50%+3px)] top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Score score={match.score} activeHalf={match.activeHalf} />
        </div>
        <div className="absolute left-[88.296%] top-1/2 -translate-y-1/2">
          <TeamBadge team={match.team2} />
        </div>
      </div>
      <button
        type="button"
        aria-label="賽事詳情"
        className="ml-auto flex size-[45px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[10px]"
      >
        <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[13px] w-[8px]" />
      </button>
    </div>
  );
}

function PageNumber({ label, active, onSelect }: { label: string; active: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={active}
      className={`flex size-[46px] shrink-0 items-center justify-center rounded-full text-[20px] font-bold tracking-[0.35px] transition-colors ${
        active ? "bg-[#23f3d5] text-white" : "bg-[#f4f4f4] text-[#3e4140]"
      }`}
    >
      {label}
    </button>
  );
}

const TOTAL_PAGES = 4;

export type CategoryData = {
  dropdownLabel?: string;
  matches: Match[];
};

export default function LiveGamesCard({ data }: { data: Record<Category, CategoryData> }) {
  const [active, setActive] = useState<Category>("worldcup");
  const [page, setPage] = useState(1);
  const { dropdownLabel, matches } = data[active];

  const handleSelectCategory = (category: Category) => {
    setActive(category);
    setPage(1);
  };

  const isFirstPage = page === 1;
  const isLastPage = page === TOTAL_PAGES;

  return (
    <div className="flex w-full flex-col gap-[20px] pr-[40px]">
      <div className="flex items-center justify-between pl-[20px]">
        <div className="flex items-center gap-[40px]">
          <SportSectionTitle>即時賽事</SportSectionTitle>
          <CategoryToggle active={active} onSelect={handleSelectCategory} />
        </div>
        {dropdownLabel && <LeagueDropdown label={dropdownLabel} />}
      </div>

      <div className="flex flex-col gap-[10px]">
        {matches.map((match, index) => (
          <MatchRow key={index} match={match} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-[20px]">
        <button
          type="button"
          aria-label="上一頁"
          disabled={isFirstPage}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="flex size-[45px] items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[10px] disabled:cursor-not-allowed"
        >
          <img
            alt=""
            src={withBasePath(isFirstPage ? "/assets/shared/arrow-chevron-gray.svg" : "/assets/shared/arrow-chevron-teal.svg")}
            className="h-[13px] w-[8px] rotate-180"
          />
        </button>
        {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => (
          <PageNumber key={n} label={String(n).padStart(2, "0")} active={page === n} onSelect={() => setPage(n)} />
        ))}
        <button
          type="button"
          aria-label="下一頁"
          disabled={isLastPage}
          onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
          className="flex size-[45px] items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[10px] disabled:cursor-not-allowed"
        >
          <img
            alt=""
            src={withBasePath(isLastPage ? "/assets/shared/arrow-chevron-gray.svg" : "/assets/shared/arrow-chevron-teal.svg")}
            className="h-[13px] w-[8px]"
          />
        </button>
      </div>
    </div>
  );
}
