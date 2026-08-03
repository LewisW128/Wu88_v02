"use client";

import { useState } from "react";

const CATEGORIES = ["全部", "足球", "籃球", "棒球", "賽車", "電競"];

// Same active-tag gradient as CasinoFilterChips -- one shared tag style
// used across the site, so keep both literals in sync if it ever changes.
const ACTIVE_GRADIENT = "linear-gradient(-56deg, rgb(72,186,206) 22%, rgb(154,113,241) 69%, rgb(141,84,216) 142%, rgb(100,78,179) 222%)";

// Purely visual category filter -- News/Analyze each get their own local
// active state. Neither section ships per-category content, so selecting a
// tag doesn't (yet) re-filter the list below it.
export default function SportCategoryTags() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex items-center gap-[20px]">
      {CATEGORIES.map((label, index) => (
        <button
          key={label}
          type="button"
          onClick={() => setActive(index)}
          className="shrink-0 whitespace-nowrap rounded-full px-[20px] py-[10px] text-[16px] font-bold tracking-[0.15px] text-white transition-colors"
          style={index === active ? { backgroundImage: ACTIVE_GRADIENT } : { backgroundColor: "#3e4140" }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
