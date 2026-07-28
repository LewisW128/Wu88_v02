import arrowGray from "../assets/shared/arrow-chevron-gray.svg";
import arrowTeal from "../assets/shared/arrow-chevron-teal.svg";

export default function SlideArrows({
  canScrollLeft,
  canScrollRight,
  onLeft,
  onRight,
  className = "",
}: {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onLeft: () => void;
  onRight: () => void;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-[10px] ${className}`}>
      <button
        type="button"
        aria-label="向左滑動"
        onClick={onLeft}
        disabled={!canScrollLeft}
        className="flex size-[45px] items-center justify-center rounded-full bg-[#3e4140]"
      >
        <img alt="" src={canScrollLeft ? arrowTeal : arrowGray} className="h-[13px] w-[8px] rotate-180" />
      </button>
      <button
        type="button"
        aria-label="向右滑動"
        onClick={onRight}
        disabled={!canScrollRight}
        className="flex size-[45px] items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[10px]"
      >
        <img alt="" src={canScrollRight ? arrowTeal : arrowGray} className="h-[13px] w-[8px]" />
      </button>
    </div>
  );
}
