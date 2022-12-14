import Link from "next/link";
import { useRouter } from "next/router";

const NavbarItems = () => {
  const router = useRouter();

  return (
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
  );
};

export default NavbarItems;
