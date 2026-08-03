import ProfileTopBar from "./ProfileTopBar";

// Sticky, and always shows the same bar -- unlike the home page's
// StickyHeader, this one doesn't swap to a compact variant on scroll.
// Figma's profile-page header (MB_Profilepage, node 32:3398) has no
// avatar/name/LV badge, unlike the standard site Profile bar.
export default function ProfileHeader() {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-end bg-white pb-[15px] pr-[40px] pt-[20px]">
      <ProfileTopBar />
    </div>
  );
}
