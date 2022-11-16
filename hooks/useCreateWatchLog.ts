import { Dispatch, FormEvent, SetStateAction } from "react";
import { firebase } from "lib/Firebase";
import axios from "axios";

export const useCreateWatchLog = async (
  anime: Anime,
  progress: AnimeWatchingProgressType,
  setWatchedUsers: Dispatch<SetStateAction<User[]>>,
  setWatchingProgress: Dispatch<SetStateAction<AnimeWatchingProgressType | null>>,
  e?: FormEvent<HTMLFormElement>,
  opinion?: string,
  finishedAt?: string,
  hasSpoiler?: boolean
) => {
  e?.preventDefault();
  const token = await firebase.auth().currentUser?.getIdToken();
  const params = {
    token,
    progress,
    opinion,
    finished_at: finishedAt,
    is_spoiler: hasSpoiler
  };
  axios.post(
    `${process.env.NEXT_PUBLIC_ANILABO_URL}/animes/${anime.public_uid}/watch_logs`,
    params
  ).then((res) => {
    setWatchedUsers(res.data.watched_users)
    setWatchingProgress(progress)
  });
};
