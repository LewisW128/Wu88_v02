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
    <ScaleBelowBreakpoint>
      <div className="min-h-screen bg-white">
        <div className="flex w-full">
          <div className="sticky top-0 z-10" style={{ height: "calc(100vh / var(--page-zoom, 1))" }}>
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
