
import { withBasePath } from "../lib/asset";

const GAMES_LINKS_1 = ["電子遊戲", "真人娛樂", "彩球遊戲", "棋牌遊戲"];
const GAMES_LINKS_2 = ["捕魚遊戲", "電競娛樂"];
const SPORTS_LINKS_1 = ["SUPER體育", "WG體育", "AP體育", "熊貓體育"];
const SPORTS_LINKS_2 = ["LIVE體育", "天群體育"];
const MEMBER_LINKS_1 = ["總攬", "帳戶明細", "會員資料", "領獎中心"];
const MEMBER_LINKS_2 = ["安全中心", "協助中心"];

function LinkColumn({ title, columns }: { title: string; columns: string[][] }) {
  return (
    <div className="flex flex-col gap-[16px] border-r border-[#152d51] px-[24px] py-[10px] first:pl-0 last:border-none last:pr-0">
      <p className="whitespace-nowrap text-[16px] font-medium tracking-[0.15px] text-white">{title}</p>
      <div className="flex gap-[20px]">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-[12px] whitespace-nowrap text-[14px] text-[#dadada] opacity-50">
            {col.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function AppDownload({
  platform,
  badgeIcon,
  badgeBoxSize,
  badgeBoxLeft,
  badgeBoxTop,
  iconSize,
  iconWidth,
  iconHeight,
}: {
  platform: string;
  badgeIcon: string;
  badgeBoxSize: number;
  badgeBoxLeft: number;
  badgeBoxTop: number;
  iconSize: number;
  iconWidth: number;
  iconHeight: number;
}) {
  return (
    <div className="relative h-[60px] w-[240px] shrink-0 overflow-hidden rounded-[20px]">
      <div
        className="absolute flex items-center justify-center"
        style={{ left: badgeBoxLeft, top: badgeBoxTop, width: badgeBoxSize, height: badgeBoxSize }}
      >
        <div className="rotate-[30deg]">
          <div className="relative overflow-hidden" style={{ width: iconSize, height: iconSize }}>
            <img
              alt=""
              src={badgeIcon}
              className="pointer-events-none absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
              style={{ width: iconWidth, height: iconHeight }}
            />
          </div>
        </div>
      </div>
      <div className="absolute left-[83px] top-[7px] flex items-center gap-[15px]">
        <div className="flex flex-col text-white">
          <p className="text-[12px]">立即掃碼下載</p>
          <p className="text-[20px] font-semibold">{platform}</p>
        </div>
        <img alt="" src={withBasePath("/assets/footer/qr-code.png")} className="size-[46px] rounded-[5px] object-cover" />
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#021128] pb-[60px] pt-[60px]">
      <div className="absolute -top-[108px] left-[291px] h-[227px] w-[calc(100%-291px)] rounded-bl-[50px] bg-white" />

      <div className="relative flex flex-wrap justify-between gap-[24px] py-[10px] pl-[331px] pr-[40px] pt-[100px]">
        <div className="flex flex-col gap-[20px] sm:flex-row sm:items-center sm:gap-[24px]">
          <AppDownload
            platform="ANDROID"
            badgeIcon={withBasePath("/assets/footer/icon-android-badge.svg")}
            badgeBoxSize={146.825}
            badgeBoxLeft={-45}
            badgeBoxTop={-24}
            iconSize={107.483}
            iconWidth={67.378}
            iconHeight={84.464}
          />
          <AppDownload
            platform="iOS 26.5"
            badgeIcon={withBasePath("/assets/footer/icon-apple-badge.svg")}
            badgeBoxSize={126.406}
            badgeBoxLeft={-31.05}
            badgeBoxTop={-20.26}
            iconSize={92.536}
            iconWidth={70.586}
            iconHeight={82.291}
          />
        </div>
        <div className="flex flex-wrap">
          <LinkColumn title="賭場" columns={[GAMES_LINKS_1, GAMES_LINKS_2]} />
          <LinkColumn title="體育" columns={[SPORTS_LINKS_1, SPORTS_LINKS_2]} />
          <LinkColumn title="會員中心" columns={[MEMBER_LINKS_1, MEMBER_LINKS_2]} />
        </div>
      </div>

      <div className="relative mt-[80px] flex items-center gap-[10px] pl-[331px] pr-[40px]">
        <div className="flex size-[33px] items-center justify-center rounded-[10px] bg-[#061f45]">
          <img alt="" src={withBasePath("/assets/footer/icon-whatsapp.svg")} className="size-[20px]" />
        </div>
        <div className="flex size-[33px] items-center justify-center rounded-[10px] bg-[#061f45]">
          <img alt="" src={withBasePath("/assets/footer/icon-telegram.svg")} className="size-[20px]" />
        </div>
        <div className="flex size-[33px] items-center justify-center rounded-[10px] bg-[#061f45]">
          <img alt="" src={withBasePath("/assets/footer/icon-instagram.svg")} className="size-[20px]" />
        </div>
        <div className="flex size-[33px] items-center justify-center rounded-[10px] bg-[#061f45]">
          <img alt="" src={withBasePath("/assets/footer/icon-more.svg")} className="size-[17px]" />
        </div>
        <div className="flex h-[33px] w-[69px] items-center justify-between rounded-[10px] border border-white px-[8px]">
          <img alt="" src={withBasePath("/assets/footer/qr-frame.png")} className="size-[21px] rounded-full" />
          <img alt="" src={withBasePath("/assets/footer/flag-arrow.svg")} className="size-[16px]" />
        </div>
      </div>

      <div className="relative mt-[40px] flex items-center justify-between border-t-[0.5px] border-white pl-[331px] pr-[40px] pt-[24px] text-[12px] tracking-[0.15px] text-[#bfbfbf]">
        <p>2026LIFEHIGH來嗨，本平台僅供 18 歲以上人士娛樂使用</p>
        <p>適度娛樂・理性投注</p>
      </div>
    </footer>
  );
}
