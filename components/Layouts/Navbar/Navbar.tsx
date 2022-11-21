import { auth, firebase } from "lib/Firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarItems from "./Items";
import { Dropdown } from "flowbite-react";
import axios from "axios";
import { useCurrentUser } from "hooks/useCurrentUser";
import { useEffect, useState, memo } from "react";
import { AiFillBell } from "react-icons/ai";
import Image from "next/image";
import NavbarLoggedInUserIcon from "./LoggedInUserIcon";

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
            const token = await res.user.getIdToken();
            const params = {
              token,
              user: { email: res.user.email },
            };
            axios
              .post(`${process.env.NEXT_PUBLIC_ANILABO_URL}/users`, params)
              .then(() => {
                router.push("/");
              });
          }
        })
        .catch(alert);
    } catch (error) {
      alert(error);
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
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={<AiFillBell className="text-3xl m-1 text-gray-700" />}
                >
                  <Dropdown.Item>
                    <div className="flex gap-2">
                      <Image
                        src={
                          "https://lh3.googleusercontent.com/a/ALm5wu3Fw2h0Z_Jt4u_F3sLDf4Ff7j0hViNCVxySpnif=s96-c"
                        }
                        className="rounded-full"
                        width={30}
                        height={30}
                      />
                      <p className="my-auto">higakijin follow Tellstyle.</p>
                    </div>
                  </Dropdown.Item>
                </Dropdown>
                <NavbarLoggedInUserIcon currentUser={currentUser} setIsSignedIn={setIsSignedIn} />
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
