import { auth, Firebase } from "lib/Firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  const router = useRouter();
  const [userImage, setUserImage] = useState("");
  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
  const signUpWithGoogle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const provider = new Firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider).catch(alert);
      router.push("/");
    } catch (err) {
      alert(err);
    }
  };

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      setUserImage(user?.photoURL as string);
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
            {isSignedIn ? (
              <div className="relative">
                <div
                  className="h-10 w-10 object-cover my-auto cursor-pointer"
                  onClick={() => setIsVisibleDropdown(!isVisibleDropdown)}
                >
                  <Image
                    src={userImage}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                {isVisibleDropdown && (
                  <div className="absolute button-0 right-0 text-gray-600 bg-white mt-1">
                    <p className="border-t border-x rounded-t px-4 py-2 hover:bg-green-200">
                      Profile
                    </p>
                    <p className="border-b border-x rounded-b px-4 py-2 hover:bg-green-200">
                      Logout
                    </p>
                  </div>
                )}
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
