import LiveGamesCard from "./LiveGamesCard";
import { BASEBALL_MATCHES, BASKETBALL_MATCHES, FOOTBALL_MATCHES, WORLD_CUP_MATCHES } from "./sportLiveGamesData";

export default function SportLiveGames() {
  return (
    <LiveGamesCard
      data={{
        worldcup: { matches: WORLD_CUP_MATCHES },
        football: { dropdownLabel: "英超", matches: FOOTBALL_MATCHES },
        basketball: { dropdownLabel: "NBA", matches: BASKETBALL_MATCHES },
        baseball: { dropdownLabel: "MLB", matches: BASEBALL_MATCHES },
      }}
    />
  );
}
