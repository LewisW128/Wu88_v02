import { CASINO_FILTERS, scrollToCasinoSection } from "./casinoFilters";

export default function CasinoFilterChips({
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
      {CASINO_FILTERS.map((filter, index) => (
        <button
          key={filter.label}
          type="button"
          onClick={() => {
            onSelect(index);
            scrollToCasinoSection(filter.target);
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
