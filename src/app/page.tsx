import ScaleBelowBreakpoint from "../components/ScaleBelowBreakpoint";
import Sidebar from "../components/Sidebar";
import StickyHeader from "../components/StickyHeader";
import Cotainer from "../components/Cotainer";
import FormBar from "../components/FormBar";
import Recommend from "../components/Recommend";
import Hot from "../components/Hot";
import RewardAndWinList from "../components/RewardAndWinList";
import PromotionsBusinessService from "../components/PromotionsBusinessService";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <ScaleBelowBreakpoint maxZoom={0.8}>
      <div className="min-h-screen bg-white">
        <div className="flex w-full">
          {/* Capped at the sidebar's own content height (1117px, the ad banner's
              bottom edge) so it never balloons past that at extreme zoom levels
              and ends up covering the footer, which bleeds full-width underneath
              this column. */}
          <div className="sticky top-0 z-10" style={{ height: "min(calc(100vh / var(--page-zoom, 1)), 1117px)" }}>
            <Sidebar />
          </div>

          <div className="min-w-0 flex-1">
            <StickyHeader />

            <div className="relative -mt-[125px]">
              <Cotainer />
            </div>

            <div className="relative -mt-[119px] flex flex-col gap-[40px] pb-[40px] pl-[40px]">
              <FormBar />
              <Recommend />
              <Hot />
              <RewardAndWinList />
              <PromotionsBusinessService />
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
