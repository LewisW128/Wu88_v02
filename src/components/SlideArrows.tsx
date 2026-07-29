
import { withBasePath } from "../lib/asset";
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
        <img alt="" src={canScrollLeft ? withBasePath("/assets/shared/arrow-chevron-teal.svg") : withBasePath("/assets/shared/arrow-chevron-gray.svg")} className="h-[13px] w-[8px] rotate-180" />
      </button>
      <button
        type="button"
        aria-label="向右滑動"
        onClick={onRight}
        disabled={!canScrollRight}
        className="flex size-[45px] items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[10px]"
      >
        <img alt="" src={canScrollRight ? withBasePath("/assets/shared/arrow-chevron-teal.svg") : withBasePath("/assets/shared/arrow-chevron-gray.svg")} className="h-[13px] w-[8px]" />
      </button>
    </div>
  );
}
