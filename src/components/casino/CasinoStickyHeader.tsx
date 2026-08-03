import PageStickyHeader from "../PageStickyHeader";
import CasinoFilterChips from "./CasinoFilterChips";

export default function CasinoStickyHeader({ active, onSelect }: { active: number; onSelect: (index: number) => void }) {
  return (
    <PageStickyHeader
      anchorId="casino-filter-anchor"
      zIndex={20}
      chips={<CasinoFilterChips active={active} onSelect={onSelect} className="flex items-center gap-[10px]" />}
    />
  );
}
