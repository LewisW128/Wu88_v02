import PageStickyHeader from "../PageStickyHeader";
import PromotionsFilterChips from "./PromotionsFilterChips";

export default function PromotionsStickyHeader({ active, onSelect }: { active: number; onSelect: (index: number) => void }) {
  return (
    <PageStickyHeader
      anchorId="promotions-filter-anchor"
      zIndex={20}
      chips={<PromotionsFilterChips active={active} onSelect={onSelect} className="flex items-center gap-[10px]" />}
    />
  );
}
