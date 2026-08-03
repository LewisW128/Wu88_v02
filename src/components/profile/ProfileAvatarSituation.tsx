import { withBasePath } from "../../lib/asset";

// The "Level=Lv28-40" asset already bakes in the decorative purple ribbon
// accents Figma shows around the photo -- no separate mask/gradient needed,
// just pick the art matching the member's level bracket.
export default function ProfileAvatarSituation() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden">
      <img alt="" src={withBasePath("/assets/profile/avatar/level-lv28-40.png")} className="pointer-events-none absolute inset-0 size-full object-cover object-top" />
    </div>
  );
}
