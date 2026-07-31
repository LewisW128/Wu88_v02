"use client";

import { useState } from "react";

const CATEGORIES = ["全部", "足球", "籃球", "棒球", "賽車", "電競"];

const ACTIVE_GRADIENT =
  "linear-gradient(-49.83deg, rgb(1,250,176) 23.317%, rgb(20,232,184) 7.4137%, rgb(72,186,206) 22.121%, rgb(154,113,241) 65.287%, rgb(182,90,253) 78.918%, rgb(141,84,216) 131.17%, rgb(111,79,189) 176.61%, rgb(100,78,179) 203.87%)";

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
