"use client";

import { useState } from "react";

const FILTERS = [
  { label: "熱門", target: null },
  { label: "WU88 推薦", target: "recommend" },
  { label: "電子遊戲", target: "slot" },
  { label: "真人娛樂", target: "real" },
  { label: "彩票遊戲", target: "lottery" },
  { label: "棋牌遊戲", target: "poker" },
  { label: "捕魚遊戲", target: "fishing" },
  { label: "電競遊戲", target: "esports" },
];

export default function CasinoFilterBar() {
  const [active, setActive] = useState(0);

  return (
    <div className="scrollbar-hide flex w-full gap-[20px] overflow-x-auto">
      {FILTERS.map((filter, index) => (
        <button
          key={filter.label}
          type="button"
          onClick={() => {
            setActive(index);
            if (filter.target) {
              document.getElementById(`casino-section-${filter.target}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="shrink-0 whitespace-nowrap rounded-full px-[20px] py-[10px] text-[16px] font-bold tracking-[0.15px] text-white transition-colors"
          style={
            index === active
              ? { backgroundImage: "linear-gradient(-56deg, rgb(72,186,206) 22%, rgb(154,113,241) 69%, rgb(141,84,216) 142%, rgb(100,78,179) 222%)" }
              : { backgroundColor: "#3e4140" }
          }
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
