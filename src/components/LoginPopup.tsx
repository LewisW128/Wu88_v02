"use client";

import { useRef, useState } from "react";

import { withBasePath } from "../lib/asset";
function AccountIcon() {
  return (
    <div className="relative size-[25px] shrink-0 overflow-hidden">
      <div className="absolute left-[8.19px] top-[3px] size-[9px]">
        <img alt="" src={withBasePath("/assets/login-popup/icon-account-ring.svg")} className="absolute -inset-[11.11%] block size-full max-w-none" />
      </div>
      <div className="absolute left-[11.69px] top-[7.98px] h-px w-[2px]">
        <img alt="" src={withBasePath("/assets/login-popup/icon-account-neck.svg")} className="absolute inset-[0_-50%_-100%_-50%] block size-full max-w-none" />
      </div>
      <div className="absolute left-[13px] top-[13px] size-[10px]">
        <img alt="" src={withBasePath("/assets/login-popup/icon-head.svg")} className="absolute inset-0 block size-full max-w-none" />
      </div>
      <div className="absolute left-[calc(50%+0.5px)] top-[15px] h-[8px] w-[18px] -translate-x-1/2">
        <img alt="" src={withBasePath("/assets/login-popup/icon-account-body.svg")} className="absolute inset-[-12.5%_-5.56%] block size-full max-w-none" />
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <div className="relative size-[25px] shrink-0 overflow-hidden">
      <div className="absolute inset-[52%_8%_8%_52%]">
        <img alt="" src={withBasePath("/assets/login-popup/icon-head.svg")} className="absolute inset-0 block size-full max-w-none" />
      </div>
      <div className="absolute inset-[40%_16%_12%_16%] rounded-[3px] border-2 border-solid border-[#3e4140]" />
      <div className="absolute bottom-[62%] left-1/2 top-[12%] w-[7px] -translate-x-1/2">
        <img alt="" src={withBasePath("/assets/login-popup/icon-lock-tab.svg")} className="absolute -inset-[15.38%_14.29%] block size-full max-w-none" />
      </div>
      <div className="absolute left-[10.5px] top-[13px] h-[6px] w-[4px]">
        <img alt="" src={withBasePath("/assets/login-popup/icon-lock-body.svg")} className="absolute inset-0 block size-full max-w-none" />
      </div>
    </div>
  );
}

function LoginField({ icon, placeholder }: { icon: React.ReactNode; placeholder: string }) {
  return (
    <div className="relative h-[45px] w-[300px] shrink-0 overflow-hidden rounded-[10px] border border-solid border-[#8d54d8] bg-white">
      <div className="absolute left-[9px] top-[9px]">{icon}</div>
      <p className="absolute left-[48px] top-1/2 -translate-y-1/2 whitespace-nowrap text-[12px] tracking-[0.15px] text-[#a2a2a2]">
        {placeholder}
      </p>
    </div>
  );
}

function ActionButton({ label, bg, textColor }: { label: string; bg: string; textColor: string }) {
  return (
    <div className="relative h-[53px] w-[143px] shrink-0">
      <img alt="" src={bg} className="absolute inset-0 size-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px]" style={{ color: textColor }}>
          {label}
        </p>
      </div>
    </div>
  );
}

const DOT_GRID_ROWS = 6;
const DOT_GRID_COLS = 6;

export default function LoginPopup({ onClose }: { onClose?: () => void }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 2, y: y * 2 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  const parallax = (depth: number) => ({
    transform: `translate3d(${(tilt.x * depth).toFixed(2)}px, ${(tilt.y * depth).toFixed(2)}px, 0)`,
  });

  return (
    <div
      className="relative h-[630.898px] w-[976px] max-w-full overflow-hidden rounded-bl-[100px] rounded-tr-[100px] border-[0.565px] border-solid border-[#dadada] backdrop-blur-[10px]"
      style={{ backgroundImage: "linear-gradient(122.688deg, rgba(255,255,255,0.25) 36.871%, rgb(255,255,255) 50.441%)" }}
    >
      {/* background blob */}
      <div className="pointer-events-none absolute left-[-78.56px] top-[180.38px] h-[370px] w-[458px]">
        <img alt="" src={withBasePath("/assets/login-popup/blob-teal.svg")} className="absolute -inset-[13.51%_10.92%] block size-full max-w-none" />
      </div>

      {/* right-side photo panel — tilts and shifts layers to follow the cursor, like a camera dolly */}
      <div
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="absolute right-[-0.56px] top-[-0.56px] h-[630.898px] w-[488px] overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative size-full transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${(-tilt.y * 6).toFixed(2)}deg) rotateY(${(tilt.x * 6).toFixed(2)}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="pointer-events-none absolute left-[163.69px] top-[-348.89px] h-[743.296px] w-[785.657px] transition-transform duration-300 ease-out"
            style={parallax(6)}
          >
            <img alt="" src={withBasePath("/assets/login-popup/photo-frame-shadow.svg")} className="absolute inset-0 block size-full max-w-none" />
          </div>
          <div
            className="pointer-events-none absolute right-[-116px] top-[42.95px] h-[171px] w-[181px] transition-transform duration-300 ease-out"
            style={parallax(14)}
          >
            <img alt="" src={withBasePath("/assets/login-popup/shard-top-right.svg")} className="absolute inset-0 block size-full max-w-none" />
          </div>
          <div
            className="pointer-events-none absolute right-[255.3px] top-[155.32px] h-[262.639px] w-[276.759px] transition-transform duration-300 ease-out"
            style={parallax(10)}
          >
            <img alt="" src={withBasePath("/assets/login-popup/shard-mid.svg")} className="absolute inset-0 block size-full max-w-none" />
          </div>
          <div
            className="pointer-events-none absolute right-[-21px] top-[229.95px] h-[234px] w-[246px] transition-transform duration-300 ease-out"
            style={parallax(12)}
          >
            <img alt="" src={withBasePath("/assets/login-popup/shard-bottom-right.svg")} className="absolute inset-0 block size-full max-w-none" />
          </div>

          <div
            className="pointer-events-none absolute left-[61.56px] top-[15.81px] h-[581.194px] w-[387.463px] shadow-[0px_127.083px_28.241px_0px_rgba(255,255,255,0.25)] transition-transform duration-300 ease-out"
            style={parallax(22)}
          >
            <img alt="" src={withBasePath("/assets/login-popup/hero-photo.png")} className="absolute inset-0 size-full max-w-none object-cover" />
          </div>

          <div className="pointer-events-none absolute left-[-292.96px] top-[202.39px] flex size-[673.581px] items-center justify-center">
            <div className="-scale-y-100 -rotate-135">
              <div
                className="h-[294.746px] w-[657.842px]"
                style={{ backgroundImage: "linear-gradient(183.649deg, rgba(255,255,255,0) 6.23%, rgb(255,255,255) 40.207%)" }}
              />
            </div>
          </div>
          <div className="pointer-events-none absolute left-[63.1px] top-[168.72px] flex size-[775.813px] items-center justify-center">
            <div className="-rotate-45">
              <div
                className="h-[439.323px] w-[657.842px]"
                style={{ backgroundImage: "linear-gradient(185.43deg, rgba(255,255,255,0) 6.23%, rgb(255,255,255) 40.207%)" }}
              />
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-[45.19px] right-[45.19px] flex flex-col gap-[4.377px] transition-transform duration-300 ease-out"
            style={parallax(-6)}
          >
            {Array.from({ length: DOT_GRID_ROWS }).map((_, row) => (
              <div key={row} className="flex items-center gap-[4.377px]">
                {Array.from({ length: DOT_GRID_COLS }).map((_, col) => (
                  <img key={col} alt="" src={withBasePath("/assets/login-popup/dot.svg")} className="size-[2.189px]" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* left content */}
      <div className="absolute left-[93.44px] top-1/2 flex -translate-y-1/2 flex-col items-center gap-[80px]">
        <div className="flex flex-col items-start gap-[40px]">
          <div className="flex flex-col items-start gap-[10px]">
            <div className="w-[240px]">
              <img alt="WU88 武財神 ONE" src={withBasePath("/assets/login-popup/logo.svg")} className="h-auto w-full" />
            </div>
            <p className="text-[16px] font-medium tracking-[0.15px] text-[#a2a2a2]">請輸入您的帳號和密碼</p>
          </div>
          <div className="flex flex-col items-start gap-[20px]">
            <LoginField icon={<AccountIcon />} placeholder="請輸入您的帳號" />
            <LoginField icon={<LockIcon />} placeholder="請輸入您的6-12位英文字母及數字" />
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <ActionButton label="註冊" bg={withBasePath("/assets/login-popup/btn-register-bg.svg")} textColor="#ffffff" />
          <ActionButton label="登入" bg={withBasePath("/assets/login-popup/btn-login-bg.svg")} textColor="#444242" />
        </div>
      </div>

      <p className="absolute bottom-[57.38px] left-[93.44px] whitespace-nowrap text-[12px] font-medium tracking-[0.15px] text-[#a2a2a2]">
        Ver. 7.10.1101
      </p>

      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute left-[39.44px] top-[39.38px] size-[25px] cursor-pointer overflow-hidden"
      >
        <img alt="" src={withBasePath("/assets/login-popup/icon-close.svg")} className="absolute left-1/2 top-1/2 h-[9.209px] w-[9.192px] -translate-x-1/2 -translate-y-1/2 max-w-none" />
      </button>

      <div className="pointer-events-none absolute left-[487.44px] top-[471.38px] h-[128px] w-[134px]">
        <img alt="" src={withBasePath("/assets/login-popup/corner-squiggle.svg")} className="absolute inset-0 block size-full max-w-none" />
      </div>
    </div>
  );
}
