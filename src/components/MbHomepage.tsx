import type { ReactNode } from "react";
import avatarPhoto from "../assets/profile/avatar.png";
import iconCrown from "../assets/profile/icon-crown.svg";
import iconMoney from "../assets/profile/icon-money.svg";
import iconNotify from "../assets/profile/icon-notify.svg";
import avatarDefault from "../assets/mb-homepage/avatar-default.png";
import iconMessage from "../assets/mb-homepage/icon-message.svg";
import pillDark from "../assets/mb-homepage/pill-dark.svg";
import pillPurple from "../assets/mb-homepage/pill-purple.svg";
import pillTeal from "../assets/mb-homepage/pill-teal.svg";
import pillYellow from "../assets/mb-homepage/pill-yellow.svg";

function PillButton({ bg, label, textClass, shadowClass = "" }: { bg: string; label: string; textClass: string; shadowClass?: string }) {
  return (
    <div className={`relative h-[53px] w-[88px] shrink-0 ${shadowClass}`}>
      <img alt="" src={bg} className="pointer-events-none absolute inset-0 size-full" />
      <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-center">
        <p className={`whitespace-nowrap text-[16px] font-bold tracking-[0.15px] ${textClass}`}>{label}</p>
      </div>
    </div>
  );
}

function RegisterLoginButtons() {
  return (
    <div className="flex items-center gap-[10px]">
      <PillButton bg={pillPurple} label="註冊" textClass="text-white" shadowClass="drop-shadow-[0px_10px_5px_rgba(141,84,216,0.5)]" />
      <PillButton bg={pillTeal} label="登入" textClass="text-[#444242]" />
    </div>
  );
}

function UnbindButton({ dense = false }: { dense?: boolean }) {
  return (
    <PillButton
      bg={pillDark}
      label="未綁定"
      textClass="text-white"
      shadowClass={dense ? "drop-shadow-[0px_10px_10px_rgba(62,65,64,0.25)]" : "drop-shadow-[0px_10px_5px_rgba(62,65,64,0.25)]"}
    />
  );
}

function TopUpButton() {
  return <PillButton bg={pillYellow} label="儲值" textClass="text-[#444242]" shadowClass="drop-shadow-[0px_10px_10px_rgba(226,255,37,0.25)]" />;
}

function VipIdentity() {
  return (
    <>
      <div className="relative size-[59px] shrink-0 rounded-full border-2 border-[#01fab0]">
        <img alt="" src={avatarPhoto} className="size-full rounded-full object-cover" />
        <div
          className="absolute bottom-0 right-0 size-[21px] overflow-hidden rounded-full"
          style={{
            backgroundImage:
              "linear-gradient(-48deg, rgb(1,250,176) 90%, rgb(72,186,206) 10%, rgb(182,90,253) 91%, rgb(100,78,179) 312%)",
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
    </>
  );
}

export type MbHomepageStyle = "Homepage" | "MB_Profilepage";
export type MbHomepageState = "Unloggin" | "UnBind" | "VIP";

type MbHomepageProps = {
  style?: MbHomepageStyle;
  state?: MbHomepageState;
};

export default function MbHomepage({ style = "Homepage", state = "Unloggin" }: MbHomepageProps) {
  const isHomepage = style === "Homepage";

  let left: ReactNode;
  if (isHomepage && state === "Unloggin") {
    left = (
      <>
        <div className="flex items-center gap-[10px]">
          <img alt="" src={avatarDefault} className="size-[59px] shrink-0 rounded-full" />
          <p className="whitespace-nowrap text-[12px] font-bold tracking-[0.15px] text-[#3e4140]">PLAYER 12345</p>
        </div>
        <RegisterLoginButtons />
      </>
    );
  } else if (isHomepage && state === "UnBind") {
    left = (
      <>
        <div className="flex items-center gap-[10px]">
          <div className="relative size-[59px] shrink-0 overflow-hidden rounded-full border-2 border-[#01fab0]">
            <img alt="" src={avatarPhoto} className="size-full object-cover" />
          </div>
          <p className="whitespace-nowrap text-[12px] font-bold tracking-[0.15px] text-[#3e4140]">LUCKY777</p>
        </div>
        <UnbindButton />
      </>
    );
  } else if (isHomepage && state === "VIP") {
    left = (
      <>
        <div className="flex items-center gap-[20px]">
          <VipIdentity />
        </div>
        <TopUpButton />
      </>
    );
  } else if (state === "Unloggin") {
    left = <RegisterLoginButtons />;
  } else if (state === "UnBind") {
    left = <UnbindButton dense />;
  } else {
    left = (
      <>
        <div className="flex items-center gap-[10px]">
          <img alt="" src={iconMoney} className="size-[25px] shrink-0" />
          <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">10,000,000</p>
        </div>
        <TopUpButton />
      </>
    );
  }

  return (
    <div
      className={`flex items-center gap-[40px] rounded-full border border-[#dadada] bg-white/60 px-[40px] backdrop-blur-[20px] ${
        isHomepage ? "py-[20px]" : "py-[23px]"
      }`}
    >
      <div className="flex items-center gap-[20px]">{left}</div>
      {!isHomepage && (
        <div className="flex items-center gap-[40px]">
          <img alt="" src={iconMessage} className="size-[25px] shrink-0" />
          <img alt="" src={iconNotify} className="size-[25px] shrink-0" />
        </div>
      )}
      {isHomepage && <img alt="" src={iconNotify} className="size-[25px] shrink-0" />}
    </div>
  );
}
