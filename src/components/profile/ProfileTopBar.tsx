import { withBasePath } from "../../lib/asset";

// Figma's "MB_Profilepage" header variant (node 32:3398) -- unlike the
// standard site Profile bar, it has no avatar/name/LV badge, just the
// balance, top-up button, and message/notify icons.
export default function ProfileTopBar() {
  return (
    <div className="flex items-center gap-[40px] rounded-full border border-[#f4f4f4] bg-white/60 px-[30px] py-[15px] backdrop-blur-[20px]">
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[10px]">
          <img alt="" src={withBasePath("/assets/icons/money.svg")} className="size-[25px]" />
          <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">10,000,000</p>
        </div>
        <div className="relative h-[53px] w-[88px] shrink-0">
          <div className="pointer-events-none absolute inset-[-18.19%_-11.36%_-54.65%_-34.09%]">
            <img alt="" src={withBasePath("/assets/profile/btn-bg.svg")} className="block size-full max-w-none" />
          </div>
          <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-center">
            <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#444242]">儲值</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <img alt="" src={withBasePath("/assets/profile/icons/message.svg")} className="size-[25px] shrink-0" />
        <img alt="" src={withBasePath("/assets/icons/notify.svg")} className="size-[25px] shrink-0" />
      </div>
    </div>
  );
}
