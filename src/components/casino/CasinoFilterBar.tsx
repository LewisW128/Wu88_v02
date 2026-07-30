import CasinoFilterChips from "./CasinoFilterChips";

export default function CasinoFilterBar({ active, onSelect }: { active: number; onSelect: (index: number) => void }) {
  return <CasinoFilterChips active={active} onSelect={onSelect} />;
}
