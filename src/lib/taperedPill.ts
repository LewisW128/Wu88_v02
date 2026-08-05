// Hand-drawn (not stretched from an image) tapered pill: left edge is full
// height, the top edge slants down toward the right so the right side sits
// shorter -- matches the real CTA button's left-tall/right-short silhouette.
// Path is authored directly against the button's own fixed W/H, so it's
// never scaled/stretched and the rounded corners can't warp.
export function taperedPillPath(w: number, h: number, r = 15, t = 8) {
  return `M${r} 0
    L${w - r} ${t}
    A${r} ${r} 0 0 1 ${w} ${t + r}
    L${w} ${h - r}
    A${r} ${r} 0 0 1 ${w - r} ${h}
    L${r} ${h}
    A${r} ${r} 0 0 1 0 ${h - r}
    L0 ${r}
    A${r} ${r} 0 0 1 ${r} 0
    Z`;
}
