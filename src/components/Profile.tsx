import avatar from "../assets/profile/avatar.png";
import iconCrown from "../assets/profile/icon-crown.svg";
import iconMoney from "../assets/profile/icon-money.svg";
import iconNotify from "../assets/profile/icon-notify.svg";
import btnBg from "../assets/profile/btn-bg.svg";

export default function Profile() {
  return (
    <div className="flex items-center gap-[40px] rounded-full border border-[#dadada] bg-white/60 px-[40px] py-[23px] backdrop-blur-[20px]">
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[20px]">
          <div
            className="relative size-[59px] shrink-0 rounded-full p-[2px]"
            style={{
              backgroundImage:
                "linear-gradient(-48.0664842153752deg, rgb(72,186,206) 0%, rgb(72,186,206) 20%, rgb(154,113,241) 45%, rgb(182,90,253) 55%, rgb(141,84,216) 70%, rgb(111,79,189) 85%, rgb(100,78,179) 100%)",
            }}
          >
            <img alt="" src={avatar} className="size-full rounded-full object-cover" />
            <div
              className="absolute bottom-0 right-0 size-[21px] overflow-hidden rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(-48.0664842153752deg, rgb(72,186,206) 17.1%, rgb(154,113,241) 77.3%, rgb(182,90,253) 100%)",
              }}
            >
              <img alt="" src={iconCrown} className="absolute left-[3px] top-[3px] size-[15px]" />
            </div>
          </div>
          <div className="flex w-[128px] flex-col items-start gap-[5px]">
            <div className="flex items-center gap-[10px]">
              <p className="whitespace-nowrap text-[12px] font-bold tracking-[0.15px] text-[#3e4140]">LUCKY777</p>
              <div className="rounded-full bg-[#8d54d8] px-[5px] py-px">
                <p className="whitespace-nowrap text-[12px] font-medium tracking-[0.15px] text-white">LV.12</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <img alt="" src={iconMoney} className="size-[25px]" />
              <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#3e4140]">10,000,000</p>
            </div>
          </div>
        </div>

        <div className="relative h-[53px] w-[88px] shrink-0">
          <div className="pointer-events-none absolute inset-[-18.19%_-11.36%_-54.65%_-34.09%]">
            <img alt="" src={btnBg} className="block size-full max-w-none" />
          </div>
          <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-center">
            <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#444242]">儲值</p>
          </div>
        </div>
      </div>
      <img alt="" src={iconNotify} className="size-[25px] shrink-0" />
    </div>
  );
}
