import ScaleBelowBreakpoint from "../../../components/ScaleBelowBreakpoint";
import Footer from "../../../components/Footer";
import ProfileSidebar from "../../../components/profile/ProfileSidebar";
import { withBasePath } from "../../../lib/asset";

function EditIcon() {
  return <img alt="" src={withBasePath("/assets/shared/edit-pencil.svg")} className="absolute right-0 top-[3.5px] size-[25px]" />;
}

function InfoField({ label, value, muted = false, editable = true, full = false }: { label: string; value: string; muted?: boolean; editable?: boolean; full?: boolean }) {
  return (
    <div className={`relative h-[70px] ${full ? "col-span-2" : ""}`}>
      <p className="whitespace-nowrap text-[16px] font-medium tracking-[0.15px] text-[#a2a2a2]">{label}</p>
      <div className="absolute inset-x-0 top-[38px] h-[32px]">
        <p className={`whitespace-nowrap text-[20px] font-bold tracking-[0.35px] ${muted ? "text-[#dadada]" : "text-[#3e4140]"}`}>{value}</p>
        {editable && <EditIcon />}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">{children}</p>;
}

function TopBar() {
  return (
    <div className="relative h-[198px] w-full overflow-hidden rounded-[50px] border border-[#f4f4f4] bg-white">
      <img alt="" src={withBasePath("/assets/profile/member/topbar-bg.svg")} className="pointer-events-none absolute inset-0 size-full" />
      <div className="absolute left-[39px] top-[19px] flex h-[158px] items-center gap-[20px]">
        <div className="size-[158px] shrink-0 overflow-hidden rounded-full border border-[#8d54d8]">
          <img alt="" src={withBasePath("/assets/profile/avatar.png")} className="size-full object-cover" />
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <p className="whitespace-nowrap text-[36px] font-bold tracking-[0.36px] text-[#3e4140]">欠錢不還因為沒錢還</p>
          <div className="flex items-center gap-[20px]">
            <p className="whitespace-nowrap text-[16px] font-medium tracking-[0.15px] text-[#a2a2a2]">ID 20260612</p>
            <div className="flex items-center gap-[10px] rounded-[20px] bg-[#3e4140] px-[10px] py-[5px]">
              <p className="whitespace-nowrap text-[14px] font-bold tracking-[0.15px] text-white">VIP Lv.35</p>
              <img alt="" src={withBasePath("/assets/shared/arrow-chevron-white.svg")} className="h-[11px] w-[6px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProfileMemberPage() {
  return (
    <ScaleBelowBreakpoint designWidth={1728} maxZoom={0.9}>
      <div className="min-h-screen bg-[#f5f5f5]">
        <div className="flex w-full">
          <div className="sticky top-0 z-10" style={{ height: "min(calc(100vh / var(--page-zoom, 1)), 1117px)" }}>
            <ProfileSidebar />
          </div>

          <div className="relative min-w-0 flex-1">
            <div className="flex flex-col gap-[40px] pb-[40px] pl-[40px] pr-[40px] pt-[40px]">
              <div className="flex items-center gap-[20px]">
                <img alt="" src={withBasePath("/assets/profile/icons/member-info.svg")} className="size-[60px]" />
                <p className="whitespace-nowrap text-[36px] font-bold tracking-[0.36px] text-[#3e4140]">會員資料</p>
              </div>

              <TopBar />

              <div className="flex flex-col items-start gap-[20px]">
                <SectionTitle>安全與隱私</SectionTitle>
                <div className="grid w-full grid-cols-2 gap-x-[40px] gap-y-[40px] rounded-[50px] bg-white p-[40px]">
                  <InfoField label="手機" value="0912***7890" muted editable={false} full />
                  <InfoField label="信箱" value="nickolas@gmail.com" muted editable={false} full />
                  <InfoField label="帳戶密碼" value="＊＊＊＊＊＊＊＊" />
                  <InfoField label="託售密碼" value="＊＊＊＊＊＊＊＊" />
                </div>
              </div>

              <div className="flex flex-col items-start gap-[20px]">
                <SectionTitle>帳戶</SectionTitle>
                <div className="grid w-full grid-cols-2 gap-x-[40px] gap-y-[40px] rounded-[50px] bg-white p-[40px]">
                  <InfoField label="帳號" value="Mikamiyua12345" />
                  <InfoField label="戶名" value="未填寫" />
                  <InfoField label="暱稱" value="欠錢不還因為沒錢還" full />
                  <InfoField label="出生日期" value="1999 / 01 / 04" full />
                  <InfoField label="地址" value="台北市信義區市府路 1 號" full />
                </div>
              </div>

              <div className="grid w-full grid-cols-1 gap-y-[40px] rounded-[50px] bg-white p-[40px]">
                <InfoField label="語系切換" value="繁體中文" full />
                <InfoField label="時區設定" value="GMT +08:00" full />
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
