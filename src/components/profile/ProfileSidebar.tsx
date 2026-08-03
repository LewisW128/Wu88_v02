"use client";

import { useRouter } from "next/navigation";

import { withBasePath } from "../../lib/asset";

function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      aria-label="返回"
      onClick={() => router.back()}
      className="absolute left-[40px] top-[40px] flex size-[60px] items-center justify-center rounded-[20px] bg-[#e2ff25] drop-shadow-[0px_10px_20px_rgba(226,255,37,0.25)]"
    >
      <div className="flex size-[25px] items-center justify-center rounded-full bg-[#3e4140]">
        <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[8px] w-[5px] rotate-180" />
      </div>
    </button>
  );
}

function OverviewIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 25" className={className}>
      <rect x="2" y="2" width="9" height="9" rx="2.5" fill="currentColor" />
      <rect x="14" y="2" width="9" height="9" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="2" y="14" width="9" height="9" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="14" width="9" height="9" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function AccountIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 25" className={className}>
      <rect x="3" y="4" width="19" height="17" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M7 9h11M7 13h11M7 17h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 25" className={className}>
      <rect x="3" y="3" width="19" height="19" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="10.5" cy="10" r="2.7" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M6 18c0-2.6 2-4 4.5-4s4.5 1.4 4.5 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 8l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RewardsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 25" className={className}>
      <path d="M7 4h11v6a5.5 5.5 0 0 1-11 0V4Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M7 6H4a2 2 0 0 0 2 4M18 6h3a2 2 0 0 1-2 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12.5 15v3.5M9 21.5h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HelpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 25" className={className}>
      <circle cx="12.5" cy="12.5" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M9.8 9.8a2.7 2.7 0 1 1 4 2.4c-1 .6-1.3 1-1.3 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="12.5" cy="17.3" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LogoutIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 25" className={className}>
      <path d="M12 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 12.5h11M17 8l4.5 4.5L17 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type NavItem = {
  icon: (props: { className?: string }) => React.JSX.Element;
  title: string;
  sub: string;
  active?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { icon: OverviewIcon, title: "總覽", sub: "OVERVIEW", active: true },
  { icon: AccountIcon, title: "賬戶明細", sub: "A/C" },
  { icon: ProfileIcon, title: "會員資料", sub: "PROFILE" },
  { icon: RewardsIcon, title: "領獎中心", sub: "SOC" },
  { icon: HelpIcon, title: "協助中心", sub: "HELP" },
];

function NavRow({ icon: Icon, title, sub, active }: NavItem) {
  return (
    <div
      className={`relative flex h-[122px] w-[271px] shrink-0 items-center ${
        active ? "rounded-[20px] border border-[#8d54d8] bg-white drop-shadow-[0px_5px_10px_rgba(141,84,216,0.15)]" : ""
      }`}
    >
      <Icon className={`ml-[56px] size-[25px] shrink-0 ${active ? "text-[#8d54d8]" : "text-[#3e4140]"}`} />
      <div className="ml-[40px] flex flex-col items-start whitespace-nowrap">
        <p className="text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">{title}</p>
        <p className="text-[14px] tracking-[0.15px] text-[#23f3d5]">{sub}</p>
      </div>
    </div>
  );
}

// Dedicated sub-nav for the profile section (Figma "Sidebar" style=Profilepage,
// node 82:1866) -- swapped in only on /profile, replacing the main site
// Sidebar (which links to home/casino/sport/promotions, not relevant here).
export default function ProfileSidebar() {
  return (
    <div className="relative h-full w-[291px] shrink-0 overflow-y-hidden bg-white">
      <div className="relative min-h-[1117px] w-[291px]">
        <img alt="" src={withBasePath("/assets/sidebar/sidebar-bg.svg")} className="pointer-events-none absolute left-0 top-0 h-[1117px] w-[291px]" />

        <BackButton />

        <nav className="absolute inset-x-0 top-[130px] z-10 flex flex-col items-end pl-[20px]">
          {NAV_ITEMS.map((item) => (
            <NavRow key={item.title} {...item} />
          ))}
          <div className="h-px w-[271px] shrink-0 bg-[#dadada]" />
          <NavRow icon={LogoutIcon} title="登出" sub="LOGOUT" />
        </nav>
      </div>
    </div>
  );
}
