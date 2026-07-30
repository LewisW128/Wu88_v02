"use client";

import { useState } from "react";

import ScaleBelowBreakpoint from "../../components/ScaleBelowBreakpoint";
import Sidebar from "../../components/Sidebar";
import CasinoStickyHeader from "../../components/casino/CasinoStickyHeader";
import CasinoHero from "../../components/casino/CasinoHero";
import CasinoFilterBar from "../../components/casino/CasinoFilterBar";
import CasinoHotGames from "../../components/casino/CasinoHotGames";
import CasinoRecommend from "../../components/casino/CasinoRecommend";
import CasinoGeneralGames from "../../components/casino/CasinoGeneralGames";
import Footer from "../../components/Footer";

export default function CasinoPage() {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <ScaleBelowBreakpoint>
      <div className="min-h-screen bg-white">
        <div className="flex w-full">
          <div className="sticky top-0 z-10" style={{ height: "min(calc(100vh / var(--page-zoom, 1)), 1117px)" }}>
            <Sidebar />
          </div>

          <div className="min-w-0 flex-1">
            <CasinoStickyHeader active={activeFilter} onSelect={setActiveFilter} />

            <CasinoHero />

            <div className="relative flex flex-col gap-[40px] pb-[40px] pl-[40px] pt-[20px]">
              <div className="pl-[20px] pr-[40px]">
                <CasinoFilterBar active={activeFilter} onSelect={setActiveFilter} />
              </div>
              <CasinoHotGames />
              <CasinoRecommend />
              <CasinoGeneralGames />
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
