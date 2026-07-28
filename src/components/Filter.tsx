import iconSearch from "../assets/filter/icon-search.svg";

export default function Filter() {
  return (
    <div className="flex h-[45px] w-[319px] items-center gap-[10px] rounded-full border-2 border-[#3e4140] bg-white/50 px-[13px] backdrop-blur-[10px]">
      <img alt="" src={iconSearch} className="size-[25px]" />
      <p className="whitespace-nowrap text-[12px] font-medium tracking-[0.15px] text-[#dadada]">搜尋</p>
    </div>
  );
}
