import { AiFillBell } from "react-icons/ai";
import Link from "next/link";

const NavbarNotifications = () => {
  return (
    <Link href={`/notifications`}>
      <a>
        <AiFillBell className="text-3xl m-1 text-gray-700" />
      </a>
    </Link>
  );
};

export default NavbarNotifications;
