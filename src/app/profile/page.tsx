import ScaleBelowBreakpoint from "../../components/ScaleBelowBreakpoint";
import Footer from "../../components/Footer";
import { Promotions, Service } from "../../components/PromotionsBusinessService";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileAvatarSituation from "../../components/profile/ProfileAvatarSituation";
import ProfileWallet from "../../components/profile/ProfileWallet";
import ProfileMemberInfo from "../../components/profile/ProfileMemberInfo";
import ProfileCollected from "../../components/profile/ProfileCollected";
import ProfileEverydayRewards from "../../components/profile/ProfileEverydayRewards";

export default function ProfilePage() {
  return (
    <ScaleBelowBreakpoint>
      <div className="min-h-screen bg-white">
        <div className="flex w-full">
          <div className="sticky top-0 z-10" style={{ height: "min(calc(100vh / var(--page-zoom, 1)), 1117px)" }}>
            <ProfileSidebar />
          </div>

          <div className="min-w-0 flex-1">
            <ProfileHeader />

            <div className="flex flex-col gap-[40px] pb-[40px] pl-[40px] pt-[20px]">
              <div className="flex items-start gap-[40px]">
                <div className="flex w-[420px] shrink-0 flex-col">
                  <ProfileAvatarSituation />
                  {/* Figma overlaps the wallet card up over the bottom of the
                      avatar photo (avatar h760 vs wallet starting at y481 --
                      a ~279px overlap) rather than stacking them cleanly. */}
                  <div className="relative z-10 -mt-[150px]">
                    <ProfileWallet />
                  </div>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-[40px]">
                  <ProfileMemberInfo />
                  <ProfileCollected />
                  <ProfileEverydayRewards />
                </div>
              </div>

              <div className="flex w-full items-center gap-[40px] pr-[40px]">
                <div className="min-w-0 flex-1">
                  <Promotions />
                </div>
                <Service />
              </div>
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
