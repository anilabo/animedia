import { auth, Firebase } from "lib/Firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

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
        <nav className="flex">
          <ul className="grid grid-cols-5 md:grid-cols-10 divide-solid w-full text-sm text-center">
            <Link href="/">
              <a>
                <li className="px-2 py-1 border-r border-b-4 border-b-white hover:border-b-green-500">
                  Home
                </li>
              </a>
            </Link>
            <li className="px-2 py-1 border-r border-b-4 border-b-white hover:border-b-green-500">
              Manage
            </li>
            <li className="px-2 py-1 border-r border-b-4 border-b-white hover:border-b-green-500">
              Review
            </li>
            <li className="px-2 py-1 border-r border-b-4 border-b-white hover:border-b-green-500">
              Connect
            </li>
            <Link href="/search">
              <a>
                <li
                  className={`px-2 py-1 border-r border-b-4 hover:border-b-green-500 ${
                    router.pathname.includes("/search")
                      ? "border-b-green-500"
                      : "border-b-white"
                  }`}
                >
                  Search
                </li>
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
