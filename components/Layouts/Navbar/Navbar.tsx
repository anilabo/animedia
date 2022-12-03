import { auth, firebase } from "lib/Firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarItems from "./Items";
import axios from "axios";
import { useCurrentUser } from "hooks/useCurrentUser";
import { useEffect, useState, memo } from "react";
import NavbarLoggedInUserIcon from "./LoggedInUserIcon";
import NavbarNotifications from "./Notifications";
import { signOut } from "firebase/auth";
import { setCookie } from 'nookies'

const Navbar = memo(() => {
  const router = useRouter();
  const currentUser = useCurrentUser();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(!!currentUser);
  const signUpWithGoogle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth
        .signInWithPopup(provider)
        .then(async (res) => {
          if (res.user) {
            setCookie(null, 'uid', res.user.uid, { path: '/' })
            const token = await res.user.getIdToken();
            const params = {
              token,
              user: { email: res.user.email },
            };
            axios
              .post(`${process.env.NEXT_PUBLIC_ANILABO_URL}/users`, params)
              .then(() => {
                router.reload()
              })
              .catch((error) => {
                alert(error)
                signOut(auth)
                setIsSignedIn(false)
              });
          }
        })
    } catch (error) {
      alert(error);
      signOut(auth)
      setIsSignedIn(false)
    }
  };

  useEffect(() => {
    setIsSignedIn(!!currentUser);
  }, [currentUser]);

  return (
    <>
      <div className="max-w-6xl mx-auto m-2 mb-4">
        <header className="flex">
          <Link href="/">
            <a className="text-xl font-bold px-4 py-2 my-auto">Animedia</a>
          </Link>
          <div className="flex ml-auto px-2">
            {isSignedIn && currentUser ? (
              <div className="my-auto flex gap-2">
                <NavbarNotifications />
                <NavbarLoggedInUserIcon
                  currentUser={currentUser}
                  setIsSignedIn={setIsSignedIn}
                />
              </div>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-700 rounded text-white px-4 h-8 my-auto"
                onClick={signUpWithGoogle}
              >
                Login
              </button>
            )}
          </div>
        </header>
        <NavbarItems />
      </div>
    </>
  );
});

export default Navbar;
