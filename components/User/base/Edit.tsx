import axios from "axios";
import { useCurrentUser } from "hooks/useCurrentUser";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const UserEditComponent = () => {
  const currentUser = useCurrentUser();
  const router = useRouter()
  const initial_value = {
    id: 0,
    display_name: "",
    email: "",
    uid: "",
    photo_url: "",
    created_at: "",
    updated_at: "",
  };
  const [user, setUser] = useState<UserShortInfo>(initial_value);
  const [displayName, setDisplayName] = useState<string>(
    currentUser?.displayName as string
  );
  const handleSubmit = async () => {
    if (currentUser) {
      const token = await currentUser.getIdToken();
      axios({
        method: "patch",
        url: `${process.env.NEXT_PUBLIC_ANILABO_URL}/users/${currentUser.uid}`,
        headers: { Authorization: `Bearer ${token}` },
        data: { user: { display_name: displayName } },
      }).then((res) => router.push(`/users/${res.data.uid}`));
    }
  };

  useEffect(() => {
    if (currentUser) {
      const getUser = async () => {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_ANILABO_URL}/users/${currentUser?.uid}`
          )
          .then((res) => setUser(res.data))
          .catch(() => setUser(initial_value));
      };
      getUser();
    }
  }, [currentUser]);

  return (
    <>
      <div className="flex flex-col text-gray-600">
        <div className="max-w-6xl mx-auto border rounded w-full">
          <p className="font-semibold px-4 py-2 border-b">Edit Profile</p>
          <div className="py-10 px-20">
            <div className="flex flex-col gap-10">
              <div className="flex gap-10">
                <span className="my-auto">Name</span>
                <input
                  type="text"
                  className="border-gray-300 rounded bg-gray-50 w-full"
                  defaultValue={user.display_name}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>
              <div className="flex gap-10">
                <span className="my-auto">Email</span>
                <input
                  type="text"
                  id="disabled-input"
                  title="You can't change your Email!"
                  aria-label="disabled input"
                  className="col-span-2 bg-gray-200 border border-gray-300 text-sm rounded block w-full p-2.5 cursor-not-allowed"
                  value={user.email}
                  disabled
                />
              </div>
              <div className="flex gap-10">
                <span className="my-auto">Image</span>
                <div className="h-20 w-20 col-span-2 border">
                  <Image src={user.photo_url} width={200} height={200} />
                </div>
              </div>
              <button
                className="w-fit ml-auto bg-green-500 rounded text-white px-4 py-1"
                onClick={() => handleSubmit()}
              >
                update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditComponent;
