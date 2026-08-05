import { withBasePath } from "../../lib/asset";

const VIP_EXPERIENCE = 700;
const VIP_EXPERIENCE_MAX = 1500;

export default function ProfileMemberInfo() {
  const progress = Math.min(100, (VIP_EXPERIENCE / VIP_EXPERIENCE_MAX) * 100);

  return (
    <div className="flex w-full items-center gap-[40px] pr-[40px]">
      <div className="flex w-[327px] shrink-0 flex-col gap-[74px]">
        <div className="flex flex-col items-start gap-[10px]">
          <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">歡迎回來 !</p>
          <p className="whitespace-nowrap text-[36px] font-bold tracking-[0.36px] text-[#8d54d8]">欠錢不還因為沒錢還</p>
          <p className="whitespace-nowrap text-[16px] font-medium tracking-[0.15px] text-[#bfbfbf]">ID 20260612</p>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#3e4140]">電子郵件</p>
          <div className="flex items-center gap-[10px]">
            <p className="whitespace-nowrap text-[16px] font-medium tracking-[0.15px] text-[#bfbfbf]">nickolas@gmail.com</p>
            <div className="flex items-center gap-[5px]">
              <img alt="" src={withBasePath("/assets/profile/member/icon-verified.svg")} className="size-[18px]" />
              <p className="whitespace-nowrap text-[14px] font-bold tracking-[0.15px] text-[#23f3d5]">已驗證</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[282px] min-w-0 flex-1 overflow-hidden rounded-[50px] border border-[#dadada]">
        <img alt="" src={withBasePath("/assets/profile/member/vip-card-bg.png")} className="pointer-events-none absolute inset-0 size-full object-cover object-right" />
        <div className="absolute left-[19px] top-[19px] flex items-center gap-[20px]">
          <img alt="" src={withBasePath("/assets/profile/member/icon-vip-lv.svg")} className="size-[40px]" />
          <p className="whitespace-nowrap text-[36px] font-bold tracking-[0.36px] text-[#3e4140]">Lv. 35</p>
        </div>
        <div className="absolute bottom-[18px] left-[19px] right-[19px] flex flex-col gap-[10px]">
          <div className="flex items-center justify-between">
            <p className="whitespace-nowrap text-[14px]">
              <span className="text-[#b2b2b2]">VIP 經驗</span>{" "}
              <span className="font-bold text-[#8d54d8]">{VIP_EXPERIENCE}</span>{" "}
              <span className="text-[12px] text-[#b2b2b2]">/ {VIP_EXPERIENCE_MAX.toLocaleString()}</span>
            </p>
            <div className="flex h-[25px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] px-[6px] py-[5px] backdrop-blur-[6px]">
              <img alt="" src={withBasePath("/assets/profile/member/exp-plus.svg")} className="size-[14px]" />
            </div>
          </div>
          <div className="h-[10px] w-full overflow-hidden rounded-full border border-[#bfbfbf] bg-white">
            <img
              alt=""
              src={withBasePath("/assets/profile/member/exp-bar-fill.png")}
              className="h-full rounded-full object-cover object-left"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="whitespace-nowrap text-[14px] text-[#b2b2b2]">
            已經連續儲值 <span className="font-bold text-[#8d54d8]">50,000</span>
          </p>
        </div>
      </div>
    </div>
  );
}
