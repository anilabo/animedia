import { Dropdown } from "flowbite-react";
import { AiFillBell } from "react-icons/ai";
import Image from "next/image";
import { firebase } from "lib/Firebase";
import { useEffect, useState } from "react";
import axios from "axios";
import ActivityDescription from "../ActivityDescription";
import Link from "next/link";

type InitialProps = { currentUser: firebase.User };

const NavbarNotifications = ({ currentUser }: InitialProps) => {
  const [notifications, setNotifications] = useState<Activity[]>([]);

  const getPassiveNotifications = async () => {
    const uid = currentUser.uid;
    axios
      .get(`${process.env.NEXT_PUBLIC_ANILABO_URL}/users/${uid}`)
      .then((res) => {
        setNotifications(res.data.passive_notifications);
      })
      .catch((error) => {
        setNotifications([]);
      });
  };

  useEffect(() => {
    getPassiveNotifications();
  }, []);

  console.log(notifications);

  return (
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<AiFillBell className="text-3xl m-1 text-gray-700" />}
    >
      {notifications[0] ? (
        <>
          {notifications.map((notification) => (
            <Dropdown.Item key={notification.id}>
              <Link href={`/notifications`}>
                <a className="flex gap-2">
                  <Image
                    src={notification.operative_user.photo_url}
                    className="rounded-full"
                    width={30}
                    height={30}
                  />
                  <div className="my-auto">
                    <ActivityDescription activity={notification} />
                  </div>
                </a>
              </Link>
            </Dropdown.Item>
          ))}
        </>
      ) : (
        <Dropdown.Item>There are no notifications.</Dropdown.Item>
      )}
    </Dropdown>
  );
};

export default NavbarNotifications;
