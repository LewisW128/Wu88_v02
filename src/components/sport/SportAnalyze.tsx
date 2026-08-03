import { withBasePath } from "../../lib/asset";
import SportCategoryTags from "./SportCategoryTags";
import SportSectionTitle from "./SportSectionTitle";

const ARTICLES = [
  {
    img: withBasePath("/assets/sport/analyze/item1.png"),
    title: "世足/阿根廷慶功他不爽！貝林漢拍對手後腦恐遭禁賽",
    date: "2026年7月17日週五 上午10:41",
    excerpt:
      "英格蘭今在世界盃4強賽以1比2不敵阿根廷，比賽結束英格蘭中場貝林漢（Jude Bellingham）淚謝球迷後，被鏡頭拍到打阿根廷替補球員巴柯（Valentin Barco）的後腦引發軒然大波，恐面臨國際足總追加禁賽處罰。雙方此役火藥味十足，全場共出現26次犯規，英格蘭在第55分鐘破門以1比0領先，眼看就要拿到自1966年以來首張世界盃決賽門票，沒想到第85分鐘與傷停補時階段被阿根廷逆轉。",
  },
  {
    img: withBasePath("/assets/sport/analyze/item2.png"),
    title: "不想待在英超了嗎？阿根廷晉級決賽功臣發文嘲笑英格蘭惹怒球迷",
    date: "2026年7月17日週五 上午10:41",
    excerpt:
      "阿根廷能在四強賽2:1擊敗英格蘭，25歲中場大將費南德斯功不可沒，他在第85分鐘以一記精彩長射破網，讓阿根廷追成1:1平手，這位效力英超藍軍切爾西的好手，似乎是鐵了心要離開了，在自己的IG上發文嘲笑英格蘭，也讓英格蘭球迷對他更感冒。",
  },
  {
    img: withBasePath("/assets/sport/analyze/item3.png"),
    title: "NBA》熱火昔日兄弟撕破臉！Adebayo爆揍Herro內幕曝光 NBA官方決定不罰了",
    date: "2026年7月17日週五 上午10:41",
    excerpt:
      "邁阿密熱火昔日兩大主力Bam Adebayo與Tyler Herro，日前在拉斯維加斯爆發肢體衝突，不過，這場風波似乎將高高舉起、輕輕放下。根據《ESPN》權威記者Shams Charania報導，聯盟發言人證實，在與兩位球員及球員工會溝通後，各方都希望盡快息事寧人，因此官方決定不對動手的Adebayo進行任何處罰。",
  },
  {
    img: withBasePath("/assets/sport/analyze/item4.png"),
    title: "中職／奪金還是虛耗職業球員風險？亞運棒球徵召該重新去定位了",
    date: "2026年7月17日週五 上午10:41",
    excerpt:
      "近來名古屋亞運棒球中華隊球員徵召爭議，出現富邦悍將、台鋼雄鷹去跟棒協「協調」後，沒有支援球員，以及有高達8位旅外球員徵召，包括受傷開刀的徐若熙、大聯盟球員鄭宗哲，筆者認為，球團、棒協及運動部應該坐下來針對補充役球員的徵召進行討論、協商，不然4年後的亞運，還是會出現相同的問題。",
  },
  {
    img: withBasePath("/assets/sport/analyze/item5.png"),
    title: "佐佐木朗希6局「斷崖式下滑」原因曝光！羅伯斯揭真相　再捎大谷回歸好消息",
    date: "2026年7月17日週五 上午10:41",
    excerpt:
      "道奇日籍投手佐佐木朗希今（31日）先發對戰水手，主投5又1/3局失2分，收下本季第5勝，也是近期2連勝。不過他在前5局無失分的情況下，第6局卻突然球速、控球同步下滑。賽後總教練羅伯斯（Dave Roberts）透露，主因是右小腿抽筋，並大讚佐佐木下半季展現出更強烈的自信心。",
  },
  {
    img: withBasePath("/assets/sport/analyze/item6.png"),
    title: "MLB》最強核彈頭！大谷翔平明天復出 道奇主帥公布棒次",
    date: "2026年7月17日週五 上午10:41",
    excerpt:
      "近來名古屋亞運棒球中華隊球員徵召爭議，出現富邦悍將、台鋼雄鷹去跟棒協「協調」後，沒有支援球員，以及有高達8位旅外球員徵召，包括受傷開刀的徐若熙、大聯盟球員鄭宗哲，筆者認為，球團、棒協及運動部應該坐下來針對補充役球員的徵召進行討論、協商。",
  },
  {
    img: withBasePath("/assets/sport/analyze/item7.png"),
    title: "MLB／騎滑板車撞消防車　巨人隊貝德離譜事蹟+1！左腳骨折宣告本季報銷",
    date: "2026年7月17日週五 上午10:41",
    excerpt:
      "舊金山巨人隊外野手貝德（Harrison Bader）因離譜意外，本賽季確定提前畫下句點。巨人隊總教練維特洛（Tony Vitello）31日證實，32歲的貝德將缺席2026年剩餘賽事，主因雖為其既有的左腳足底筋膜炎，但上週末發生的一起離譜車禍，更讓傷勢狀況雪上加霜。",
  },
  {
    img: withBasePath("/assets/sport/analyze/item8.png"),
    title: "FIFA主席偷賣世界盃股權！UEFA怒聯手55國封殺所有賽事　痛批：非可交易商品",
    date: "2026年7月17日週五 上午10:41",
    excerpt:
      "歐洲足球總會（UEFA）昨（30）日召開緊急會議，旗下55個會員協會一致通過決議，將全面杯葛國際足球總會（FIFA）主辦的所有賽事，以反對FIFA主席因凡提諾（Gianni Infantino）提出出售世界盃部分股權予私人投資者的計畫。",
  },
];

function ArticleRow({ img, title, date, excerpt }: { img: string; title: string; date: string; excerpt: string }) {
  return (
    <div className="flex h-[177px] w-full items-center gap-[20px]">
      <div className="h-[177px] w-[281px] shrink-0 overflow-hidden rounded-[25px] bg-[#3e4140]">
        <img alt="" src={img} className="size-full object-cover" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-[13px]">
        <p className="line-clamp-1 text-[20px] font-bold leading-[32px] tracking-[0.35px] text-[#3e4140]">{title}</p>
        <p className="whitespace-nowrap text-[12px] font-medium tracking-[0.15px] text-[#dadada]">{date}</p>
        <p className="line-clamp-3 text-[16px] font-medium leading-[24px] tracking-[0.15px] text-[#b2b2b2]">{excerpt}</p>
      </div>
    </div>
  );
}

export default function SportAnalyze() {
  return (
    <div id="sport-section-analyze" className="relative flex w-full flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[40px] pl-[20px]">
          <SportSectionTitle>賽事分析</SportSectionTitle>
          <SportCategoryTags />
        </div>
        <div className="flex items-center gap-[10px] py-[5px] pr-[40px]">
          <p className="whitespace-nowrap text-[20px] font-bold leading-[32px] tracking-[0.35px] text-[#3e4140]">更多分析</p>
          <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[13px] w-[8px]" />
        </div>
      </div>

      <div
        className="scrollbar-teal-thin flex h-[768px] w-full flex-col gap-[20px] overflow-y-auto pr-[40px]"
        style={{ maskImage: "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)" }}
      >
        {ARTICLES.map((article) => (
          <ArticleRow key={article.title} {...article} />
        ))}
      </div>
    </div>
  );
}
