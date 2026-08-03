import { withBasePath } from "../../lib/asset";

type Transaction = {
  label: string;
  date: string;
  amount: string;
  negative?: boolean;
};

const TRANSACTIONS: Transaction[] = [
  { label: "信用卡儲值", date: "06/12 13:30", amount: "$1,000,000" },
  { label: "託售", date: "06/12 13:30", amount: "- $5,000", negative: true },
  { label: "返水", date: "06/12 13:30", amount: "$10,000" },
  { label: "返水", date: "06/12 13:30", amount: "$10,000" },
  { label: "返水", date: "06/12 13:30", amount: "$10,000" },
  { label: "託售", date: "06/12 13:30", amount: "- $100,000", negative: true },
  { label: "託售", date: "06/12 13:30", amount: "- $100,000", negative: true },
  { label: "返水", date: "06/12 13:30", amount: "$10,000" },
  { label: "返水", date: "06/12 13:30", amount: "$10,000" },
];

function TransactionRow({ label, date, amount, negative }: Transaction) {
  return (
    <div className="flex h-[67px] w-full shrink-0 items-center justify-between rounded-[25px] bg-[#fafafa] px-[20px]">
      <div className="flex flex-col items-start gap-[5px]">
        <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#3e4140]">{label}</p>
        <p className="whitespace-nowrap text-[12px] text-[#bfbfbf]">{date}</p>
      </div>
      <div className="flex items-center gap-[10px]">
        <p className={`whitespace-nowrap text-[16px] font-bold tracking-[0.15px] ${negative ? "text-[#ff5a99]" : "text-[#8d54d8]"}`}>{amount}</p>
        <img alt="" src={withBasePath("/assets/shared/arrow-chevron-gray.svg")} className="h-[11px] w-[6px] rotate-90" />
      </div>
    </div>
  );
}

function WalletActionButton({ label, primary }: { label: string; primary?: boolean }) {
  return (
    <button
      type="button"
      className={`flex h-[53px] flex-1 items-center justify-between rounded-full px-[20px] ${
        primary ? "bg-[#e2ff25] drop-shadow-[0px_10px_10px_rgba(226,255,37,0.25)]" : "border border-[#dadada] bg-white"
      }`}
    >
      <p className="text-[16px] font-bold tracking-[0.15px] text-[#444242]">{label}</p>
      <div className="flex size-[25px] items-center justify-center rounded-full bg-[#3e4140]">
        <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[8px] w-[5px]" />
      </div>
    </button>
  );
}

export default function ProfileWallet() {
  return (
    <div className="flex h-[798px] w-full flex-col gap-[20px] rounded-bl-[50px] rounded-tr-[50px] border border-[#8d54d8] bg-white/80 p-[19px] backdrop-blur-[10px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <img alt="" src={withBasePath("/assets/icons/wallet.svg")} className="size-[45px]" />
          <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#444242]">錢包總覽</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#3e4140]">所有遊戲</p>
          <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[11px] w-[6px]" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-[5px]">
        <p className="text-[14px] text-[#bfbfbf]">帳戶餘額</p>
        <p className="text-[36px] font-bold text-[#3e4140]">10,000,000</p>
      </div>

      <div className="flex items-center gap-[20px]">
        <WalletActionButton label="儲值" primary />
        <WalletActionButton label="託售" />
      </div>

      <div
        className="scrollbar-teal-thin flex min-h-0 flex-1 flex-col gap-[10px] overflow-y-auto"
        style={{ maskImage: "linear-gradient(to bottom, black 0%, black 92%, transparent 100%)" }}
      >
        {TRANSACTIONS.map((tx, index) => (
          <TransactionRow key={index} {...tx} />
        ))}
      </div>
    </div>
  );
}
