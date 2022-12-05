import axios from "axios";
import { firebase } from "lib/Firebase";

export const destroyUser = async (currentUser: firebase.User) => {
  const uid = currentUser.uid;
  const token = await currentUser.getIdToken();
  try {
    axios({
      method: "DELETE",
      url: `${process.env.NEXT_PUBLIC_ANILABO_URL}/users/${uid}`,
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    alert(error);
  }
};
