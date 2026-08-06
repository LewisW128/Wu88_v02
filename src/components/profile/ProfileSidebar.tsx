"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { withBasePath } from "../../lib/asset";

const NAV_ITEMS = [
  { icon: withBasePath("/assets/profile/icons/overview.svg"), title: "總覽", sub: "OVERVIEW", href: "/profile" },
  { icon: withBasePath("/assets/profile/icons/account.svg"), title: "賬戶明細", sub: "A/C", href: "/profile/account" },
  { icon: withBasePath("/assets/profile/icons/member-info.svg"), title: "會員資料", sub: "PROFILE", href: "/profile/member" },
  { icon: withBasePath("/assets/profile/icons/rewards.svg"), title: "領獎中心", sub: "SOC", href: "/profile/rewards" },
  { icon: withBasePath("/assets/profile/icons/help.svg"), title: "協助中心", sub: "HELP" },
];

function NavRow({ icon, title, sub, href, active }: { icon: string; title: string; sub: string; href?: string; active?: boolean }) {
  const content = (
    <div className="relative flex h-[122px] w-full shrink-0 items-center">
      {active && (
        <>
          <img alt="" src={withBasePath("/assets/sidebar/rectangle1.svg")} className="absolute bottom-[3px] left-[7px] h-[112px] w-[194px]" />
          <img alt="" src={withBasePath("/assets/sidebar/rectangle3.svg")} className="absolute left-0 top-[1px] h-[112px] w-full" />
        </>
      )}
      <div className="relative z-10 ml-[56px] size-[25px] shrink-0">
        <img alt="" src={icon} className="size-full" />
      </div>
      <div className="relative z-10 ml-[40px] flex flex-col items-start whitespace-nowrap">
        <p className="text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">{title}</p>
        <p className="text-[14px] tracking-[0.15px] text-[#23f3d5]">{sub}</p>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block w-full shrink-0">
      {content}
    </Link>
  ) : (
    content
  );
}

function BackButton() {
  return (
    <Link
      href="/"
      aria-label="返回首頁"
      className="absolute left-[40px] top-[40px] z-10 flex size-[60px] items-center justify-center rounded-[20px] bg-[#e2ff25] drop-shadow-[0px_10px_20px_rgba(226,255,37,0.25)]"
    >
      <div className="flex size-[25px] items-center justify-center rounded-full bg-[#3e4140]">
        <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[8px] w-[5px] rotate-180" />
      </div>
    </Link>
  );
}

// Dedicated sub-nav for the profile section (Figma "Sidebar" style=Profilepage,
// node 82:1866) -- swapped in only on /profile, replacing the main site
// Sidebar (which links to home/casino/sport/promotions, not relevant here).
// Reuses the homepage Sidebar's exact active-row shape (rectangle1/3.svg)
// and row layout, just with a back button instead of the logo and a
// different nav list.
export default function ProfileSidebar() {
  const pathname = usePathname();
  const normalized = (pathname ?? "").replace(/\/+$/, "") || "/";

  return (
    <div className="h-full w-[291px] shrink-0 overflow-y-hidden bg-white">
      <div className="relative min-h-[1117px] w-[291px]">
        <img alt="" src={withBasePath("/assets/sidebar/sidebar-bg.svg")} className="pointer-events-none absolute left-0 top-0 h-[1117px] w-[291px]" />

        <BackButton />

        <nav className="absolute inset-x-0 top-[130px] z-10 flex flex-col items-end pl-[20px]">
          {NAV_ITEMS.map((item) => (
            <NavRow key={item.title} {...item} active={!!item.href && normalized === item.href} />
          ))}
          <div className="h-px w-[271px] shrink-0 bg-[#dadada]" />
          <NavRow icon={withBasePath("/assets/profile/icons/logout.svg")} title="登出" sub="LOGOUT" />
        </nav>
      </div>
    </div>
  );
}
