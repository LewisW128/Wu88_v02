
import { withBasePath } from "../lib/asset";
export default function Filter() {
  return (
    <div className="flex h-[45px] w-[319px] items-center gap-[10px] rounded-full border border-[#dadada] bg-white/80 px-[14px] backdrop-blur-[10px]">
      <img alt="" src={withBasePath("/assets/icons/search.svg")} className="size-[25px]" />
      <p className="whitespace-nowrap text-[12px] font-medium tracking-[0.15px] text-[#a2a2a2]">搜尋</p>
    </div>
  );
}
