import axios from "axios";
import UserActivityLists from "components/User/ActivityLists";
import { useCurrentUser } from "hooks/useCurrentUser";
import { useEffect, useState } from "react";

const IndexComponent = () => {
  const currentUser = useCurrentUser();
  const [pageNum, setPageNum] = useState<number>(1);
  const [notifications, setNotifications] = useState<Activity[]>([]);

  useEffect(() => {
    const getToken = async () => {
      const token = await currentUser?.getIdToken();
      const params = { token };
      if (!!currentUser && params) {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_ANILABO_URL}/timelines?page=${pageNum}`,
            { params }
          )
          .then((res) => setNotifications(res.data))
          .catch((error) => setNotifications([]));
      }
    };
    getToken();
  }, [pageNum, currentUser]);

  return (
    <>
      
      <div className="max-w-6xl m-2 md:mx-auto mb-10">
        <div className="grid md:grid-cols-3 gap-4 text-gray-600 ">
          <div className="flex flex-col gap-4">
            <p>アニメディアへようこそ！</p>
          </div>
          <div className="md:col-span-2 flex flex-col gap-4">
            <UserActivityLists headline="Time Line" lists={notifications} />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexComponent;
