import { useEffect, useState } from "react";
import { useCurrentUser } from "./useCurrentUser";

export const useCheckWatchLog = (anime: Anime) => {
  const currentUser = useCurrentUser();
  const [progrss, setProgress] = useState<AnimeWatchingProgressType | null>();

  useEffect(() => {
    if (anime.watched_users.filter((user) => user.uid == currentUser?.uid)[0]) {
      setProgress("watched");
    } else if (anime.watching_users.filter((user) => user.uid == currentUser?.uid)[0]) {
      setProgress("watching");
    } else if (anime.will_watch_users.filter((user) => user.uid == currentUser?.uid)[0]) {
      setProgress("will_watch");
    } else {
      setProgress(null)
    }
  }, [anime, currentUser]);

  return progrss;
};
