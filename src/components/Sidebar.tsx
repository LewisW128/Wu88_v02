"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { withBasePath } from "../lib/asset";
const NAV_ITEMS = [
  { icon: withBasePath("/assets/icons/home.svg"), title: "首頁", sub: "CASINO", href: "/" },
  { icon: withBasePath("/assets/icons/casino.svg"), title: "賭場", sub: "LIVE", href: "/casino" },
  { icon: withBasePath("/assets/icons/sport.svg"), title: "體育", sub: "SPORT", href: "/sport" },
  { icon: withBasePath("/assets/icons/gift.svg"), title: "優惠活動", sub: "PROMO", href: "/promotions" },
];

// Normalize away a trailing slash (except the root "/") since next.config's
// trailingSlash: true makes usePathname() return "/casino/" while href values
// here are written without one.
function normalizePathname(pathname: string) {
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export default function Sidebar() {
  const pathname = normalizePathname(usePathname());

  return (
    <div className="h-full w-[291px] shrink-0 overflow-y-hidden bg-white">
      <div className="relative min-h-[1117px] w-[291px]">
        <img alt="" src={withBasePath("/assets/sidebar/sidebar-bg.svg")} className="pointer-events-none absolute left-0 top-0 h-[1117px] w-[291px]" />

        <div className="absolute left-1/2 top-[40px] w-[150px] -translate-x-1/2">
          <img alt="WU88.ONE" src={withBasePath("/assets/sidebar/logo.svg")} className="w-full" />
        </div>

        <nav className="absolute inset-x-0 top-[130px] z-10 flex flex-col items-end pl-[20px]">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href !== null && pathname === item.href;
            const content = (
              <>
                {isActive && (
                  <>
                    <img alt="" src={withBasePath("/assets/sidebar/rectangle1.svg")} className="absolute bottom-[3px] left-[7px] h-[112px] w-[194px]" />
                    <img alt="" src={withBasePath("/assets/sidebar/rectangle3.svg")} className="absolute left-0 top-[1px] h-[112px] w-full" />
                  </>
                )}
                <div className="relative z-10 ml-[56px] size-[25px] shrink-0">
                  <img alt="" src={item.icon} className="size-full" />
                </div>
                <div className="relative z-10 ml-[40px] flex flex-col items-start whitespace-nowrap">
                  <p className="text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">{item.title}</p>
                  <p className="text-[14px] tracking-[0.15px] text-[#23f3d5]">{item.sub}</p>
                </div>
              </>
            );
            const className = "relative flex h-[122px] w-full shrink-0 cursor-pointer items-center";
            return item.href ? (
              <Link key={item.title} href={item.href} className={className}>
                {content}
              </Link>
            ) : (
              <div key={item.title} className={className}>
                {content}
              </div>
            );
          })}
        </nav>

        {/* Figma's "AD" instance (Components Library node 1:1654 -> 561:3777)
            lives inside the sidebar's own layout, anchored to its bottom-right --
            not a floating/dismissible overlay. Hidden on /profile since those
            pages shouldn't show it. */}
        {!pathname.startsWith("/profile") && (
          <div className="absolute bottom-0 right-0 h-[408px] w-[257px]">
            <img alt="" src={withBasePath("/assets/shared/sidebar-ad.svg")} className="pointer-events-none absolute inset-0 size-full" />
            <Link
              href="/promotions"
              aria-label="領取獎勵"
              className="absolute bottom-[17.66px] left-1/2 h-[52.99px] w-[200.47px] -translate-x-1/2"
            />
          </div>
        )}
      </div>
    </div>
  );
}
