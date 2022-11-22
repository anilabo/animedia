import axios from "axios";
import ProgressBar from "components/Layouts/ProgressBar";
import UserActivityLists from "components/User/ActivityLists";
import { useCurrentUser } from "hooks/useCurrentUser";
import { useEffect, useState } from "react";

const NotificationsComponent = () => {
  const [user, setUser] = useState<User>();
  const currentUser = useCurrentUser();

  useEffect(() => {
    if (!!currentUser) {
      const uid = currentUser.uid;
      const token = currentUser.getIdToken();
      const params = { token };
      axios
        .get(`${process.env.NEXT_PUBLIC_ANILABO_URL}/users/${uid}`, { params })
        .then((res) => setUser(res.data));
    }
  }, [currentUser]);

  return (
    <>
      {!!currentUser && user ? (
        <div className="max-w-6xl m-2 md:mx-auto mb-10">
          <div className="grid md:grid-cols-3 gap-4 text-gray-600 ">
            <div className="flex flex-col gap-4">
              <div className="rounded border flex">
                <p className="py-4 mx-auto">
                  There are{" "}
                  <b className="font-semibold">
                    {user.passive_notifications.length}
                  </b>{" "}
                  unread notifications.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col gap-4">
              <UserActivityLists
                headline={"Notifications"}
                lists={user.passive_notifications}
              />
            </div>
          </div>
        </div>
      ) : (
        <ProgressBar />
      )}
    </>
  );
};

export default NotificationsComponent;
