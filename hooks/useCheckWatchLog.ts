import { useEffect, useState } from "react";
import { useCurrentUser } from "./useCurrentUser";

export const useCheckWatchLog = (
  anime: Anime,
  progress: "watched" | "watching" | "will_watch"
) => {
  const currentUser = useCurrentUser();
  const [judge, setJudge] = useState<boolean>(false);

  useEffect(() => {
    let result: boolean = false

    switch (progress) {
      case "watched":
        result = !!anime.watched_users.filter((user) => user.uid == currentUser?.uid)[0]
        break
      case "watching":
        result = !!anime.watching_users.filter((user) => user.uid == currentUser?.uid)[0]
        break
      case "will_watch":
        result = !!anime.will_watch_users.filter((user) => user.uid == currentUser?.uid)[0]
        break
    }

    setJudge(result)
  }, [anime, currentUser]);

  return judge;
};
