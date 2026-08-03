import Profile from "../Profile";

// Sticky, but always shows the full Profile bar -- unlike the home page's
// StickyHeader, this one doesn't swap to the compact variant on scroll.
export default function ProfileHeader() {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-end px-[40px] pb-[15px] pt-[20px]">
      <Profile />
    </div>
  );
}
