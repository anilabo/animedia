import { Dispatch, FormEvent, SetStateAction } from "react";
import { firebase } from "lib/Firebase";
import axios from "axios";

export const useCreateWatchLog = async (
  anime: Anime,
  progress: "watched" | "watching" | "will_watch",
  setWatchedUsers: Dispatch<SetStateAction<User[]>>,
  e?: FormEvent<HTMLFormElement>,
  opinion?: string,
  finishedAt?: string,
) => {
  e?.preventDefault();
  const token = await firebase.auth().currentUser?.getIdToken();
  const params = {
    token,
    progress,
    opinion,
    finished_at: finishedAt,
  };
  axios.post(
    `${process.env.NEXT_PUBLIC_ANILABO_URL}/animes/${anime.public_uid}/watch_logs`,
    params
  ).then((res) => {
    setWatchedUsers(res.data.watched_users)
  });
};
