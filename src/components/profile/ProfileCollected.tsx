import Recommend, { type GameCard } from "../Recommend";
import { withBasePath } from "../../lib/asset";

// Same card carousel as the home page's Recommend ("所有遊戲") -- Figma's
// Collected section is the identical layout with a different header/title
// and game list, so it reuses Recommend directly instead of duplicating it.
const COLLECTED_GAMES: GameCard[] = [
  { main: "OLYPUS HEIGHTS", sub: "SLOT", badge: "HOT", image: withBasePath("/assets/profile/collected/game1.png"), specialShape: true },
  { main: "魔龍傳奇", sub: "SLOT", badge: null, image: withBasePath("/assets/products/moronglianqi.png") },
  { main: "跳起來", sub: "SLOT", badge: "NEW", image: withBasePath("/assets/products/tiaoqilai.png"), specialShape: true },
  { main: "胡到了", sub: "SLOT", badge: "HOT", image: withBasePath("/assets/products/hudaole.png"), specialShape: true },
  { main: "飛天財神", sub: "SLOT", badge: null, image: withBasePath("/assets/products/feitiancaishen.png") },
  { main: "啤酒派對", sub: "SLOT", badge: null, image: withBasePath("/assets/products/pijiupaidui.png") },
  { main: "火燒連環船", sub: "SLOT", badge: null, image: withBasePath("/assets/products/huoshaolianhuanchuan.png") },
  { main: "發福神", sub: "SLOT", badge: null, image: withBasePath("/assets/products/faifushen.png") },
];

function CollectedLogo() {
  return (
    <div className="absolute left-[20px] top-[20px] flex items-center gap-[10px]">
      <svg viewBox="0 0 25 25" className="size-[25px]">
        <path
          d="M12.5 21.5S3 15.5 3 9.5C3 6.5 5.5 4 8.5 4c1.9 0 3.4 1 4 2.3C13.1 5 14.6 4 16.5 4 19.5 4 22 6.5 22 9.5c0 6-9.5 12-9.5 12z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
      <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-white">我的收藏</p>
    </div>
  );
}

export default function ProfileCollected() {
  return <Recommend logo={<CollectedLogo />} moreLabel="所有收藏" games={COLLECTED_GAMES} />;
}
