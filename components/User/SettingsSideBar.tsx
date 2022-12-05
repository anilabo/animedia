import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { RiDoorOpenLine } from "react-icons/ri";

type InitialProps = { user: User };

const UserSettingsSideBar = ({ user }: InitialProps) => {
  const router = useRouter();
  const Items = [
    {
      link: `/users/${user.uid}`,
      text: "Profile",
      icon: <MdAccountCircle className="w-6 h-6 mt-auto" />,
    },
    {
      link: "/users/settings",
      text: "Settings",
      icon: <IoMdSettings className="w-6 h-6 mt-auto" />,
    },
    {
      link: "/users/withdrawal",
      text: "Withdrawal",
      icon: <RiDoorOpenLine className="w-5 h-5 mt-auto" />,
    },
  ];
  return (
    <div className="lg:w-1/4 md:w-1/3 md:px-3">
      <div className="p-6 rounded border shadow">
        <div className="profile-pic text-center mb-5">
          <div>
            <div className="relative h-28 w-28 mx-auto">
              <Image
                src={user.photo_url}
                width={500}
                height={500}
                className="rounded"
              />
            </div>
            <div className="mt-4">
              <h5 className="text-lg font-semibold">{user.display_name}</h5>
              <p className="text-slate-400 text-sm">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-700">
          <ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
            {Items.map((item, index) => (
              <li key={index} className="navbar-item account-menu">
                <Link href={item.link}>
                  <a
                    className={`navbar-link flex items-center py-2 rounded hover:text-green-500 ${
                      item.link == router.pathname
                        ? "text-green-500"
                        : "text-slate-400"
                    }`}
                  >
                    <h6 className="mb-0 font-semibold flex my-auto gap-2">
                      {item.icon} {item.text}
                    </h6>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsSideBar;
