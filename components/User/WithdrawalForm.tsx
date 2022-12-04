import { useCurrentUser } from "hooks/useCurrentUser";
import { auth } from "lib/Firebase";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { useState } from "react";
import { toast } from "react-toastify";
import { destroyUser } from "services/user/destroy";

const UserWithdrawalForm = () => {
  const currentUser = useCurrentUser();
  const router = useRouter();
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const handleClick = () => {
    currentUser &&
      destroyUser(currentUser).then(() => {
        auth.signOut();
        currentUser.delete();
        destroyCookie(null, "uid");
        toast.success("Success to delete. Good bye!");
        router.push("/");
      });
  };

  return (
    <div className="border rounded shadow p-6 flex flex-col gap-6">
      <h5 className="text-lg font-semibold mb-4">Withdrawal :</h5>
      <div>
        <p>Delete account? </p>
        <p>
          All current user's data will be deleted (such as opinion, comments,
          watch logs).
        </p>
        <p className="text-red-500 font-bold">
          This operation can never be returned.
        </p>
      </div>
      <div className="flex gap-2">
        <input
          onChange={(e) => setIsConfirmed(e.target.checked)}
          id="red-checkbox"
          type="checkbox"
          className="w-4 h-4 my-auto text-red-500 rounded border-red-500 ring-0 focus:ring-0"
        />
        <p className="font-semibold">Yes, I understand to delete my account.</p>
      </div>
      <button
        onClick={() => handleClick()}
        className={`rounded  text-white  px-4 py-1 w-fit ${
          isConfirmed ? "bg-red-500 hover:bg-red-600" : "bg-red-400"
        }`}
        disabled={!isConfirmed}
      >
        Delete user!
      </button>
    </div>
  );
};

export default UserWithdrawalForm;
