


import { withBasePath } from "../lib/asset";

function PromoButton({ text }: { text: string }) {
  return (
    <div className="absolute bottom-[20px] left-[20px] h-[53px] w-[128px]">
      <img alt="" src={withBasePath("/assets/promotions/btn-bg2.svg")} className="pointer-events-none absolute inset-0 block size-full max-w-none" />
      <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-between">
        <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#444242]">{text}</p>
        <div className="flex size-[25px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[5.556px]">
          <img alt="" src={withBasePath("/assets/reward-announcement/rectangle1.svg")} className="h-[6.111px] w-[3.333px]" />
        </div>
      </div>
    </div>
  );
}

function Promotions() {
  return (
    <div className="flex w-full flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <img alt="" src={withBasePath("/assets/promotions/icon-title.svg")} className="size-[45px]" />
          <p className="text-[20px] font-bold tracking-[0.35px] text-[#444242]">優惠活動</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">更多優惠</p>
          <img alt="" src={withBasePath("/assets/promotions/vector1.svg")} className="h-[13px] w-[33px]" />
        </div>
      </div>
      <div className="flex gap-[20px]">
        <div className="relative h-[210px] w-[331px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-tr-[50px] border border-[#dadada]">
          <img alt="" src={withBasePath("/assets/promotions/signin-art.png")} className="pointer-events-none absolute inset-0 size-full object-cover" />
          <p className="absolute left-[20px] top-[20px] whitespace-nowrap text-[20px] tracking-[0.35px] text-[#3e4140]">每日簽到禮</p>
          <p className="absolute left-[20px] top-[44px] whitespace-nowrap text-[20px] tracking-[0.35px] text-[#3e4140]">
            天天贈<span className="text-[#23f3d5]">彩點</span>
          </p>
          <PromoButton text="立即領取" />
        </div>
        <div className="relative h-[210px] w-[331px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-tr-[50px] bg-[#8d54d8]">
          <p className="absolute left-[20px] top-[20px] whitespace-nowrap text-[20px] tracking-[0.35px] text-white">武財神風輪盤</p>
          <p className="absolute left-[20px] top-[44px] whitespace-nowrap text-[20px] tracking-[0.35px] text-white">
            天天轉 <span className="text-[25px] font-bold text-[#23f3d5]">8,888</span>
          </p>
          <PromoButton text="立即下注" />
        </div>
        <div className="relative h-[210px] w-[331px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-tr-[50px] bg-[#8d54d8]">
          <p className="absolute left-[20px] top-[20px] whitespace-nowrap text-[20px] tracking-[0.35px] text-white">超商儲值禮</p>
          <p className="absolute left-[20px] top-[44px] whitespace-nowrap text-[20px] tracking-[0.35px] text-white">
            送 <span className="text-[25px] font-bold text-[#23f3d5]">G-CLASS</span>
          </p>
          <PromoButton text="立即儲值" />
        </div>
      </div>
    </div>
  );
}

const PARTNER_NAMES = ["CQ9", "歐博", "狼堡", "翼盾", "SUPERMAN", "META"];

function Business() {
  return (
    <div className="flex w-full flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <img alt="" src={withBasePath("/assets/business/icon-title.svg")} className="size-[45px]" />
          <p className="text-[20px] font-bold tracking-[0.35px] text-[#444242]">頂級合作廠商</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <button className="flex h-[45px] items-center justify-center rounded-full border border-[#dadada] bg-white/25 px-[20px] backdrop-blur-[10px]">
            <img alt="" src={withBasePath("/assets/business/arrow-left.svg")} className="h-[13px] w-[24px]" />
          </button>
          <button className="flex h-[45px] items-center justify-center rounded-full border border-[#23f3d5] bg-[rgba(35,243,213,0.8)] px-[20px] backdrop-blur-[10px]">
            <img alt="" src={withBasePath("/assets/business/arrow-right.svg")} className="h-[13px] w-[24px]" />
          </button>
        </div>
      </div>
      <div className="relative flex h-[164px] w-full items-center gap-[50px] overflow-hidden rounded-br-[50px] rounded-tl-[50px] border border-[#dadada] px-[30px]">
        <img alt="" src={withBasePath("/assets/business/ellipse.svg")} className="pointer-events-none absolute -right-[110px] -top-[30px] size-[366px]" />
        {PARTNER_NAMES.map((name) => (
          <div key={name} className="relative flex h-[85px] w-[85px] shrink-0 items-center justify-center text-center">
            <p className="text-[14px] font-bold tracking-wide text-[#3e4140]">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Service() {
  return (
    <div className="relative h-[544px] w-[284px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-tr-[50px] bg-[#8d54d8]">
      <img
        alt=""
        src={withBasePath("/assets/service/mascot.png")}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[570px] w-[416px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
      />
      <div className="absolute bottom-0 left-0 h-[151px] w-full bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-[38px] left-[25px] h-[63px] w-[234px]">
        <img alt="" src={withBasePath("/assets/service/btn-bg2.svg")} className="pointer-events-none absolute inset-0 block size-full max-w-none" />
        <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-between">
          <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#444242]">聯繫客服</p>
          <div className="flex size-[25px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[5.556px]">
            <img alt="" src={withBasePath("/assets/reward-announcement/rectangle1.svg")} className="h-[6.111px] w-[3.333px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PromotionsBusinessService() {
  return (
    <div className="flex w-full items-center gap-[40px]">
      <div className="flex flex-1 flex-col gap-[40px]">
        <Promotions />
        <Business />
      </div>
      <Service />
    </div>
  );
}
