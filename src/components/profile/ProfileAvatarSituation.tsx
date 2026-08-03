import { withBasePath } from "../../lib/asset";

// The "Level=Lv28-40" asset is exported at Figma's exact Avatar Situation
// size (459x760, already baking in the decorative purple ribbon accents) --
// render it at that native size directly rather than cropping/rescaling it.
export default function ProfileAvatarSituation() {
  return <img alt="" src={withBasePath("/assets/profile/avatar/level-lv28-40.png")} className="pointer-events-none block h-[760px] w-[459px]" />;
}
