import { auth, firebase } from "lib/Firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavbarItems from "./NavbarItems";
import { Avatar, Dropdown } from "flowbite-react";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState<firebase.User | null>(null);
  const signUpWithGoogle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider).catch(alert);
      router.push("/");
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto m-2 mb-4">
        <header className="flex">
          <Link href="/">
            <a className="text-xl font-bold px-4 py-2 my-auto">Animedia</a>
          </Link>
          <div className="flex ml-auto">
            {!!user ? (
              <div className="my-auto">
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      alt="User settings"
                      img={`${user.photoURL}`}
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user.displayName}</span>
                    <span className="block truncate text-sm font-medium">
                      {user.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
            ) : (
              <button
                className="bg-green-600 hover:bg-green-700 rounded text-white px-4 h-8 my-auto"
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
