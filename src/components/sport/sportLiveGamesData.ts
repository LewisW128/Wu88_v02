import { withBasePath } from "../../lib/asset";

export type Team = {
  name: string;
  sub: string;
  flag: string;
};

export type Match = {
  time: string;
  offset: string;
  team1: Team;
  team2: Team;
  score: [number, number];
  activeHalf?: "top" | "bottom";
};

const norway: Team = { name: "挪威", sub: "NORWAY", flag: withBasePath("/assets/sport/live/flags/norway.svg") };
const england: Team = { name: "英國", sub: "ENGLAND", flag: withBasePath("/assets/sport/live/flags/england.svg") };

export const WORLD_CUP_MATCHES: Match[] = [
  { time: "32:14", offset: "+02:50", team1: england, team2: norway, score: [2, 1] },
  {
    time: "32:14",
    offset: "+02:50",
    team1: { name: "法國", sub: "FRANCE", flag: withBasePath("/assets/sport/live/flags/france.svg") },
    team2: { name: "西班牙", sub: "SPAIN", flag: withBasePath("/assets/sport/live/flags/spain.svg") },
    score: [2, 4],
  },
  {
    time: "32:14",
    offset: "+02:50",
    team1: { name: "巴西", sub: "BRAZIL", flag: withBasePath("/assets/sport/live/flags/brazil.svg") },
    team2: { name: "德國", sub: "GERMANY", flag: withBasePath("/assets/sport/live/flags/germany.svg") },
    score: [2, 0],
  },
];

export const BASKETBALL_MATCHES: Match[] = [
  {
    time: "32:14",
    offset: "+02:50",
    team1: { name: "金州勇士", sub: "GSW", flag: withBasePath("/assets/sport/live/basketball/gsw.png") },
    team2: { name: "底特律活塞", sub: "DET", flag: withBasePath("/assets/sport/live/basketball/det.png") },
    score: [2, 5],
    activeHalf: "bottom",
  },
  {
    time: "32:14",
    offset: "+02:50",
    team1: { name: "丹佛金塊", sub: "DEN", flag: withBasePath("/assets/sport/live/basketball/den.png") },
    team2: { name: "達拉斯獨行俠", sub: "DAL", flag: withBasePath("/assets/sport/live/basketball/dal.png") },
    score: [2, 1],
    activeHalf: "bottom",
  },
  {
    time: "32:14",
    offset: "+02:50",
    team1: { name: "布魯克林籃網", sub: "BKN", flag: withBasePath("/assets/sport/live/basketball/bkn.png") },
    team2: { name: "亞特蘭大老鷹", sub: "ATL", flag: withBasePath("/assets/sport/live/basketball/atl.png") },
    score: [8, 5],
    activeHalf: "bottom",
  },
];

export const FOOTBALL_MATCHES: Match[] = [
  {
    time: "32:14",
    offset: "+02:50",
    team1: { name: "英格蘭超級聯賽", sub: "EPL", flag: withBasePath("/assets/sport/live/football/epl.svg") },
    team2: { name: "阿斯頓維拉", sub: "ASTON-VILLA", flag: withBasePath("/assets/sport/live/football/aston-villa.svg") },
    score: [2, 1],
  },
  {
    time: "32:14",
    offset: "+02:50",
    team1: { name: "兵工廠", sub: "ARSENAL", flag: withBasePath("/assets/sport/live/football/arsenal.svg") },
    team2: { name: "切爾西", sub: "CHELSEA", flag: withBasePath("/assets/sport/live/football/chelsea.svg") },
    score: [2, 1],
  },
  {
    time: "32:14",
    offset: "+02:50",
    team1: { name: "利物浦足球俱樂部", sub: "LIVERPOOL", flag: withBasePath("/assets/sport/live/football/liverpool.svg") },
    team2: { name: "布蘭特福德", sub: "BRENDFORD", flag: withBasePath("/assets/sport/live/football/brentford.svg") },
    score: [2, 1],
  },
];

export const BASEBALL_MATCHES: Match[] = [
  {
    time: "32:14",
    offset: "+02:50",
    team1: { name: "洋基", sub: "YANKNEES", flag: withBasePath("/assets/sport/live/baseball/yankees.png") },
    team2: { name: "雙城", sub: "TWIN CITIES", flag: withBasePath("/assets/sport/live/baseball/twincities.png") },
    score: [9, 1],
  },
  {
    time: "32:14",
    offset: "+02:50",
    team1: { name: "天使", sub: "ANGELS", flag: withBasePath("/assets/sport/live/baseball/angels.png") },
    team2: { name: "挪威", sub: "NORWAY", flag: withBasePath("/assets/sport/live/baseball/logo4.png") },
    score: [2, 5],
  },
  {
    time: "32:14",
    offset: "+02:50",
    team1: { name: "英國", sub: "ENGLAND", flag: withBasePath("/assets/sport/live/baseball/logo5.png") },
    team2: { name: "挪威", sub: "NORWAY", flag: withBasePath("/assets/sport/live/baseball/logo6.png") },
    score: [0, 1],
  },
];
