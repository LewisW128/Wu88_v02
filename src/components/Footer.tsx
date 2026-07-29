
import { withBasePath } from "../lib/asset";
const ABOUT_LINKS = ["平台介紹", "代理加盟", "隱私政策", "服務條款"];
const GAMES_LINKS_1 = ["熱門遊戲", "捕魚遊戲", "真人視訊", "彩票投注"];
const GAMES_LINKS_2 = ["電競娛樂", "體育競賽"];
const HELP_LINKS_1 = ["新手指南", "存提教學", "常見問題", "聯繫客服"];
const HELP_LINKS_2 = ["合作計劃"];

function LinkColumn({ title, columns }: { title: string; columns: string[][] }) {
  return (
    <div className="flex flex-col gap-[16px] border-r border-[#152d51] px-[40px] py-[10px] first:pl-0 last:border-none">
      <p className="whitespace-nowrap text-[16px] font-medium tracking-[0.15px] text-white">{title}</p>
      <div className="flex gap-[25px]">
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

function AppDownload({ platform, icon }: { platform: string; icon: string }) {
  return (
    <div className="flex h-[60px] w-[240px] items-center gap-[15px] rounded-[20px] pl-[20px]">
      <div className="flex flex-col text-white">
        <p className="text-[12px]">立即掃碼下載</p>
        <p className="text-[20px] font-semibold">{platform}</p>
      </div>
      <img alt="" src={icon} className="size-[46px] rounded-[5px] object-cover" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#021128] pb-[60px] pt-[60px]">
      <div className="absolute -top-[108px] left-[60px] h-[227px] w-[calc(100%-120px)] rounded-bl-[50px] bg-white" />

      <div className="relative flex flex-wrap justify-between gap-[40px] px-[60px] pt-[100px]">
        <div className="flex flex-col gap-[20px] sm:flex-row sm:items-center sm:gap-[40px]">
          <AppDownload platform="ANDROID" icon={withBasePath("/assets/footer/qr-code.png")} />
          <AppDownload platform="iOS 26.5" icon={withBasePath("/assets/footer/qr-code.png")} />
        </div>
        <div className="flex flex-wrap">
          <LinkColumn title="關於我們" columns={[ABOUT_LINKS]} />
          <LinkColumn title="遊戲類別" columns={[GAMES_LINKS_1, GAMES_LINKS_2]} />
          <LinkColumn title="幫助中心" columns={[HELP_LINKS_1, HELP_LINKS_2]} />
        </div>
      </div>

      <div className="relative mt-[80px] flex items-center gap-[10px] px-[60px]">
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

      <div className="relative mt-[40px] flex items-center justify-between border-t-[0.5px] border-white px-[104px] pt-[24px] text-[12px] tracking-[0.15px] text-[#bfbfbf]">
        <p>2026LIFEHIGH來嗨，本平台僅供 18 歲以上人士娛樂使用</p>
        <p>適度娛樂・理性投注</p>
      </div>
    </footer>
  );
}
