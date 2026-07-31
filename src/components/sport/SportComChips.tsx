const SPORT_COM_TAGS = ["SUPER 體育", "WG 體育", "AP 體育", "熊貓體育", "LIVE 體育", "天群體育"];

export default function SportComChips({ className }: { className?: string }) {
  return (
    <div className={className || "scrollbar-hide flex w-full items-center gap-[10px] overflow-x-auto"}>
      {SPORT_COM_TAGS.map((tag) => (
        <div
          key={tag}
          className="shrink-0 whitespace-nowrap rounded-full bg-[#3e4140] px-[20px] py-[10px] text-[16px] font-bold tracking-[0.15px] text-white"
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
