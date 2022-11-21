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
      {!!currentUser ? (
        <div className="max-w-6xl m-2 md:mx-auto mb-10">
          <div className="grid md:grid-cols-3 gap-4 text-gray-600 ">
            <div className="flex flex-col gap-4">
              <div className="h-80 bg-red-500">ニュースを表示</div>
            </div>
            <div className="md:col-span-2 flex flex-col gap-4">
              {user && <UserActivityLists user={user} headline={'Notifications'} lists={user.passive_notifications} />}
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
