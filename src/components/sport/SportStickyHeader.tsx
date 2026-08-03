import PageStickyHeader from "../PageStickyHeader";
import SportComChips from "./SportComChips";

export default function SportStickyHeader() {
  return <PageStickyHeader anchorId="sport-com-anchor" zIndex={30} chips={<SportComChips className="flex items-center gap-[10px]" />} />;
}
