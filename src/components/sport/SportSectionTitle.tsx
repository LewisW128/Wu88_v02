import { withBasePath } from "../../lib/asset";

export default function SportSectionTitle({ children }: { children: string }) {
  return (
    <div className="relative flex h-[46px] w-[93px] shrink-0 items-center overflow-hidden px-[4px]">
      <img
        alt=""
        src={withBasePath("/assets/shared/title-accent.svg")}
        className="pointer-events-none absolute left-[-1px] top-1/2 h-[53px] w-[52px] -translate-y-1/2 rotate-[8deg]"
      />
      <p className="relative whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">{children}</p>
    </div>
  );
}
