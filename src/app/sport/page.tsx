import ScaleBelowBreakpoint from "../../components/ScaleBelowBreakpoint";
import Sidebar from "../../components/Sidebar";
import SportStickyHeader from "../../components/sport/SportStickyHeader";
import SportHero from "../../components/sport/SportHero";
import SportComTags from "../../components/sport/SportComTags";
import SportLiveGames from "../../components/sport/SportLiveGames";
import SportNews from "../../components/sport/SportNews";
import SportAnalyze from "../../components/sport/SportAnalyze";
import Footer from "../../components/Footer";

export default function SportPage() {
  return (
    <ScaleBelowBreakpoint maxZoom={0.9}>
      <div className="min-h-screen bg-white">
        <div className="flex w-full">
          <div className="sticky top-0 z-10" style={{ height: "min(calc(100vh / var(--page-zoom, 1)), 1117px)" }}>
            <Sidebar />
          </div>

          <div className="min-w-0 flex-1">
            <SportStickyHeader />

            <div className="relative -mt-[111px]">
              <SportHero />
            </div>

            <div className="relative z-10 -mt-[171px] flex flex-col gap-[40px] pb-[40px] pl-[40px] pt-[20px]">
              <SportComTags />
              <SportLiveGames />
              <SportNews />
              <SportAnalyze />
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
