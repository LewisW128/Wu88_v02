export const PROMOTIONS_FILTERS = ["全部", "新會員", "獨家優惠", "電子場館", "VIP特權", "體育賽事"];

// Same active-tag gradient used by SportCategoryTags/CasinoFilterChips --
// one shared tag style across the site.
const ACTIVE_GRADIENT = "linear-gradient(-56deg, rgb(72,186,206) 22%, rgb(154,113,241) 69%, rgb(141,84,216) 142%, rgb(100,78,179) 222%)";

export default function PromotionsFilterChips({
  active,
  onSelect,
  className,
}: {
  active: number;
  onSelect: (index: number) => void;
  className?: string;
}) {
  return (
    <div className={className || "scrollbar-hide flex w-full gap-[20px] overflow-x-auto"}>
      {PROMOTIONS_FILTERS.map((label, index) => (
        <button
          key={label}
          type="button"
          onClick={() => onSelect(index)}
          className="shrink-0 whitespace-nowrap rounded-full px-[20px] py-[10px] text-[16px] font-bold tracking-[0.15px] text-white transition-colors"
          style={index === active ? { backgroundImage: ACTIVE_GRADIENT } : { backgroundColor: "#3e4140" }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
