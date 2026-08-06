"use client";

import { useState } from "react";

import ScaleBelowBreakpoint from "../../components/ScaleBelowBreakpoint";
import Sidebar from "../../components/Sidebar";
import PromotionsStickyHeader from "../../components/promotions/PromotionsStickyHeader";
import PromotionsHero from "../../components/promotions/PromotionsHero";
import PromotionsFilterChips from "../../components/promotions/PromotionsFilterChips";
import PromotionsShowcase from "../../components/promotions/PromotionsShowcase";
import Footer from "../../components/Footer";

export default function PromotionsPage() {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <ScaleBelowBreakpoint maxZoom={0.9}>
      <div className="min-h-screen bg-white">
        <div className="flex w-full">
          <div className="sticky top-0 z-10" style={{ height: "min(calc(100vh / var(--page-zoom, 1)), 1117px)" }}>
            <Sidebar />
          </div>

          <div className="min-w-0 flex-1">
            <PromotionsStickyHeader active={activeFilter} onSelect={setActiveFilter} />

            <div className="relative -mt-[111px]">
              <PromotionsHero />
            </div>

            <div className="relative z-10 -mt-[171px] flex flex-col gap-[40px] pb-[40px] pl-[40px] pt-[20px]">
              <div id="promotions-filter-anchor" className="pl-[20px] pr-[40px]">
                <PromotionsFilterChips active={activeFilter} onSelect={setActiveFilter} />
              </div>
              <PromotionsShowcase activeFilter={activeFilter} />
            </div>

            <div className="-ml-[291px] w-[calc(100%+291px)]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </ScaleBelowBreakpoint>
  );
}
