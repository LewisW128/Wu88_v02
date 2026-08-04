import { withBasePath } from "../../lib/asset";

const VIP_EXPERIENCE = 700;
const VIP_EXPERIENCE_MAX = 1500;

// Figma's "Actions" icon (COMPONENTS LIBRARY, node 519:3184) built from its
// real layered assets -- a dark crown (Subtract + Group1079 points + Line14
// base) with a small teal badge dot (Ellipse27) at the bottom-right corner.
function LvIcon() {
  return (
    <div className="relative size-[40px] shrink-0">
      <div className="absolute bottom-[1.6px] right-[1.6px] size-[16px]">
        <img alt="" className="block size-full" src={withBasePath("/assets/profile/member/lv-badge-dot.svg")} />
      </div>
      <div className="absolute left-[9.29px] top-[15.83px] h-[20.508px] w-[28.389px]">
        <img alt="" className="block size-full" src={withBasePath("/assets/profile/member/lv-crown-subtract.svg")} />
      </div>
      <div className="absolute left-[4.8px] top-[3.64px] h-[9.289px] w-[30.4px]">
        <img alt="" className="block size-full" src={withBasePath("/assets/profile/member/lv-crown-points.svg")} />
      </div>
      <div className="absolute left-[9.6px] top-[32.67px] h-[3.2px] w-[19.2px]">
        <img alt="" className="block size-full" src={withBasePath("/assets/profile/member/lv-crown-line.svg")} />
      </div>
    </div>
  );
}

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
              <svg viewBox="0 0 18 18" className="size-[18px]">
                <circle cx="9" cy="9" r="9" fill="#23f3d5" />
                <path d="M5 9.3L7.6 12L13 6" stroke="#3e4140" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="whitespace-nowrap text-[14px] font-bold tracking-[0.15px] text-[#23f3d5]">已驗證</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[282px] min-w-0 flex-1 overflow-hidden rounded-[50px] border border-[#dadada]">
        <img alt="" src={withBasePath("/assets/profile/member/vip-card-bg.png")} className="pointer-events-none absolute inset-0 size-full object-cover" />
        <div className="absolute left-[19px] top-[19px] flex items-center gap-[20px]">
          <LvIcon />
          <p className="whitespace-nowrap text-[36px] font-bold tracking-[0.36px] text-[#3e4140]">Lv. 35</p>
        </div>
        <div className="absolute bottom-[18px] left-[19px] right-[19px] flex flex-col gap-[10px]">
          <div className="flex items-center justify-between">
            <p className="whitespace-nowrap text-[14px]">
              <span className="text-[#3e4140]">VIP 經驗</span>{" "}
              <span className="font-bold text-[#8d54d8]">{VIP_EXPERIENCE}</span>{" "}
              <span className="text-[12px] text-[#fa812f]">/ {VIP_EXPERIENCE_MAX.toLocaleString()}</span>
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
