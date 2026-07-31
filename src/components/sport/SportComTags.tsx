import SportComChips from "./SportComChips";

// Renders in normal document flow (no sticky of its own) -- once scrolled
// behind the header, SportStickyHeader's "chips" stage takes over the exact
// same tag list, merged into the nav bar itself (mirrors CasinoFilterBar +
// CasinoStickyHeader's chips stage).
export default function SportComTags() {
  return (
    <div id="sport-com-anchor" className="flex items-center gap-[10px] pr-[40px]">
      <SportComChips />
    </div>
  );
}
