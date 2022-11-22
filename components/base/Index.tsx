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
      <UserActivityLists headline="Time Line" lists={notifications} />
    </>
  );
};

export default IndexComponent;
