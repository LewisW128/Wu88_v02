export const CASINO_FILTERS = [
  { label: "熱門", target: "hot" },
  { label: "WU88 推薦", target: "recommend" },
  { label: "電子遊戲", target: "slot" },
  { label: "真人娛樂", target: "real" },
  { label: "彩票遊戲", target: "lottery" },
  { label: "棋牌遊戲", target: "poker" },
  { label: "捕魚遊戲", target: "fishing" },
  { label: "電競遊戲", target: "esports" },
];

export function scrollToCasinoSection(target: string | null) {
  if (!target) return;
  document.getElementById(`casino-section-${target}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
