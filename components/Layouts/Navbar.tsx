import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const searchAnimes = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?keyword=${keyword}`);
  };

  useEffect(()=> {
    if (router.isReady) {
      setKeyword(router.query.keyword as string)
    }
  }, [router]);

  return (
    <>
      <div className="max-w-6xl mx-auto m-2 mb-4">
        <header className="flex">
          <Link href="/">
            <a className="text-xl font-bold px-4 py-2">Animedia</a>
          </Link>
          <form onSubmit={(e) => searchAnimes(e)} className="my-auto">
            <input
              className="border border-gray-600"
              type="text"
              defaultValue={router.query.keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </form>
        </header>
        <nav className="flex">
          <ul className="grid grid-cols-10 divide-solid w-full text-sm text-center">
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
