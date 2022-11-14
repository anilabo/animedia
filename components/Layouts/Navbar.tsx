import { auth, firebase } from "lib/Firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarItems from "./NavbarItems";
import { Avatar, Dropdown } from "flowbite-react";
import { signOut } from "firebase/auth";
import axios from "axios";
import { useCurrentUser } from "hooks/useCurrentUser";

const Navbar = () => {
  const router = useRouter();
  const currentUser = useCurrentUser();
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
  const goToMyPage = () => {
    router.push(`/users/${currentUser?.uid}`)
  }
  const logout = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="max-w-6xl mx-auto m-2 mb-4">
        <header className="flex">
          <Link href="/">
            <a className="text-xl font-bold px-4 py-2 my-auto">Animedia</a>
          </Link>
          <div className="flex ml-auto">
            {currentUser ? (
              <div className="my-auto">
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      alt="User settings"
                      img={`${currentUser.photoURL}`}
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">
                      {currentUser.displayName}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {currentUser.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item onClick={() => goToMyPage()}>MyPage</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => logout()}>
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
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
};

export default Navbar;
