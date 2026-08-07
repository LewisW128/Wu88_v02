"use client";

import { useState } from "react";
import ScaleBelowBreakpoint from "../../../components/ScaleBelowBreakpoint";
import Footer from "../../../components/Footer";
import ProfileSidebar from "../../../components/profile/ProfileSidebar";
import { withBasePath } from "../../../lib/asset";

const TAGS = ["常見問題", "關於我們", "USDT 儲值流程", "超商儲值流程", "雲支付儲值流程", "支付寶綁定流程"];

const QUESTIONS = [
  "允許我在WU88遊戲嗎？",
  "如果我要玩體育博彩以外的其他遊戲，還需要註冊新的帳號嗎？",
  "在WU88儲值與託售，我的註冊姓名是否需要與身分證上面的姓名一致？",
  "我每天可以提交多少筆儲值交易？",
  "如果我不投注可以託售嗎？",
  "每天最高託售金額是多少？",
  "為什麼託售狀態顯示「成功」，而我的託售卡卻沒有收到錢？",
  "什麼是「未完成流水」？",
  "支援存取WU88服務網站的瀏覽器是什麼？",
  "什麼是滾球？",
  "我如何確認賽事是否將會開出滾球盤口？",
  "「未確認」顯示在投注單是什麼意思？",
  "盤口及滾球賽事相關資訊一直都是正確的嗎？",
];

// Same active-tag gradient as SportCategoryTags / CasinoFilterChips /
// ProfileAccountPage's Tab -- one shared style used across the site.
const ACTIVE_GRADIENT = "linear-gradient(-56deg, rgb(72,186,206) 22%, rgb(154,113,241) 69%, rgb(141,84,216) 142%, rgb(100,78,179) 222%)";

function FilterTag({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="whitespace-nowrap rounded-full px-[20px] py-[10px] text-[16px] font-bold tracking-[0.15px] text-white transition-colors"
      style={active ? { backgroundImage: ACTIVE_GRADIENT } : { backgroundColor: "#3e4140" }}
    >
      {label}
    </button>
  );
}

function QaRow({ question }: { question: string }) {
  return (
    <div className="flex h-[113px] w-full items-center justify-between rounded-[50px] border border-[#8d54d8] bg-white/80 px-[40px] py-[33px] backdrop-blur-[10px]">
      <p className="text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">{question}</p>
      <div className="flex size-[45px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[10px]">
        <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[11px] w-[6px]" />
      </div>
    </div>
  );
}

export default function ProfileHelpPage() {
  const [activeTag, setActiveTag] = useState(TAGS[0]);

  return (
    <ScaleBelowBreakpoint designWidth={1728} maxZoom={0.9}>
      <div className="min-h-screen bg-white">
        <div className="flex w-full">
          <div className="sticky top-0 z-10" style={{ height: "min(calc(100vh / var(--page-zoom, 1)), 1117px)" }}>
            <ProfileSidebar />
          </div>

          <div className="relative min-w-0 flex-1 overflow-hidden">
            <img
              alt=""
              src={withBasePath("/assets/profile/help/hero.svg")}
              className="pointer-events-none absolute right-0 top-0 z-0 h-[826px] w-[1437px] max-w-none"
            />

            <div className="relative z-10 flex flex-col gap-[40px] pb-[40px] pl-[40px] pr-[40px] pt-[40px]">
              <div className="flex items-center gap-[20px]">
                <img alt="" src={withBasePath("/assets/profile/icons/help.svg")} className="size-[60px]" />
                <p className="whitespace-nowrap text-[36px] font-bold tracking-[0.36px] text-[#3e4140]">協助中心</p>
              </div>

              <div className="mt-[412px] flex flex-col items-start gap-[20px]">
                <div className="flex items-center gap-[20px]">
                  {TAGS.map((tag) => (
                    <FilterTag key={tag} label={tag} active={activeTag === tag} onClick={() => setActiveTag(tag)} />
                  ))}
                </div>

                <div className="flex w-full flex-col items-start gap-[20px]">
                  {QUESTIONS.map((question, i) => (
                    <QaRow key={i} question={question} />
                  ))}
                </div>
              </div>
            </div>

            <div className="-ml-[291px] w-[calc(100%+291px)]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </ScaleBelowBreakpoint>
  );
}
