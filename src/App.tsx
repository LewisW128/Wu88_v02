import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Filter from "./components/Filter";
import Cotainer from "./components/Cotainer";
import FormBar from "./components/FormBar";
import Recommend from "./components/Recommend";
import Hot from "./components/Hot";
import RewardAndWinList from "./components/RewardAndWinList";
import PromotionsBusinessService from "./components/PromotionsBusinessService";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex w-full">
        <div className="sticky top-0 z-10 h-screen">
          <Sidebar />
        </div>

        <div className="min-w-0 flex-1">
          <div className="relative">
            <Cotainer />
            <div className="absolute left-[40px] top-[47px]">
              <Filter />
            </div>
            <div className="absolute right-[40px] top-[20px]">
              <Profile />
            </div>
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
  );
}

export default App;
