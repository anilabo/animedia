import axios from "axios";
import { firebase } from "lib/Firebase";

type queryType = { user: { display_name: string; introduction: string } };

export const updateUser = async (
  currentUser: firebase.User,
  query: queryType
) => {
  const uid = currentUser.uid;
  const token = await currentUser.getIdToken();
  axios({
    method: "PATCH",
    url: `${process.env.NEXT_PUBLIC_ANILABO_URL}/users/${uid}`,
    headers: { Authorization: `Bearer ${token}` },
    data: query,
  });
};
