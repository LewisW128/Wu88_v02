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
    <ScaleBelowBreakpoint designWidth={1728}>
      <div className="min-h-screen bg-white">
        <div className="flex w-full">
          <div className="sticky top-0 z-10" style={{ height: "min(calc(100vh / var(--page-zoom, 1)), 1117px)" }}>
            <ProfileSidebar />
          </div>

          <div className="min-w-0 flex-1">
            {/* Figma has no shared header row spanning both columns -- the
                avatar column starts flush at the very top (y=0), while the
                header only sits above the right column's own content
                (member info etc), so it's nested there instead of full-width. */}
            <div className="flex items-start gap-[40px] pb-[40px] pl-[40px]">
              <div className="flex w-[459px] shrink-0 flex-col items-end">
                <ProfileAvatarSituation />
                {/* Wallet (420 wide) is narrower than the avatar photo
                    (459 wide) and right-aligned to it, overlapping up
                    over its bottom by the exact Figma amount (avatar h760,
                    wallet starts at y481 -> 279px) -- covers the shoulders,
                    not the face. */}
                <div className="relative z-10 -mt-[279px] w-[420px]">
                  <ProfileWallet />
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-[40px]">
                <ProfileHeader />
                <ProfileMemberInfo />
                <ProfileCollected />
                <ProfileEverydayRewards />
              </div>
            </div>

            <div className="flex flex-col gap-[40px] pb-[40px] pl-[40px]">
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
