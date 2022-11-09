import { firebase } from "lib/Firebase";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user && setCurrentUser(user);
    });
  }, []);
  return currentUser;
};
