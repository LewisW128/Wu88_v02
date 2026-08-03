
import Link from "next/link";

import { withBasePath } from "../lib/asset";

function AvatarBadge() {
  return (
    <Link href="/profile" aria-label="會員中心" className="relative block size-[59px] shrink-0">
      <img alt="" src={withBasePath("/assets/profile/avatar.png")} className="absolute inset-0 size-full rounded-full object-cover" />
      <img alt="" src={withBasePath("/assets/profile/avatar-ring.svg")} className="pointer-events-none absolute inset-0 size-full" />
      <div
        className="absolute bottom-0 right-0 size-[21px] overflow-hidden rounded-full"
        style={{
          backgroundImage: "linear-gradient(-48.1deg, #14E8B8 0%, #48BACE 35.06%, #9A71F1 78.61%, #B65AFD 100%)",
        }}
      >
        <img alt="" src={withBasePath("/assets/profile/icon-crown.svg")} className="absolute left-[3px] top-[3px] size-[15px]" />
      </div>
    </Link>
  );
}

function NameAndBalance() {
  return (
    <div className="flex w-[128px] flex-col items-start gap-[5px]">
      <div className="flex items-center gap-[10px]">
        <p className="whitespace-nowrap text-[12px] font-bold tracking-[0.15px] text-[#3e4140]">LUCKY777</p>
        <div className="rounded-full bg-[#8d54d8] px-[5px] py-px">
          <p className="whitespace-nowrap text-[12px] font-medium tracking-[0.15px] text-white">LV.12</p>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <img alt="" src={withBasePath("/assets/icons/money.svg")} className="size-[25px]" />
        <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#3e4140]">10,000,000</p>
      </div>
    </div>
  );
}

function TopUpButton() {
  return (
    <div className="relative h-[53px] w-[88px] shrink-0">
      <div className="pointer-events-none absolute inset-[-18.19%_-11.36%_-54.65%_-34.09%]">
        <img alt="" src={withBasePath("/assets/profile/btn-bg.svg")} className="block size-full max-w-none" />
      </div>
      <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-center">
        <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#444242]">儲值</p>
      </div>
    </div>
  );
}

const NotifyIcon = () => <img alt="" src={withBasePath("/assets/icons/notify.svg")} className="size-[25px] shrink-0" />;

// The scrolled/compact nav bar (Figma 439:3383) sits directly on the sticky
// header's own translucent background -- no separate pill/border/fill of its
// own, just the bare elements spaced with gap-20/40, unlike the top-bar
// version which wraps everything in its own bordered pill.
export function ProfileCompact() {
  return (
    <div className="flex items-center gap-[40px]">
      <div className="flex h-[59px] items-center gap-[20px]">
        <AvatarBadge />
        <NameAndBalance />
        <TopUpButton />
      </div>
      <NotifyIcon />
    </div>
  );
}

export default function Profile() {
  return (
    <div className="flex items-center gap-[40px] rounded-full border border-[#dadada] bg-white/60 px-[30px] py-[15px] backdrop-blur-[20px]">
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[10px]">
          <AvatarBadge />
          <NameAndBalance />
        </div>
        <TopUpButton />
      </div>
      <NotifyIcon />
    </div>
  );
}
