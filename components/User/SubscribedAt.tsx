import { formatDate } from "utils/formatDate";

interface InitialProps {
  user: User;
}

const UserSubscribedAt = ({ user }: InitialProps) => {
  return (
    <div className="text-gray-600 text-sm grid grid-cols-3">
      <div className="bg-gray-100 border-y border-l rounded-l w-full px-4 py-2 mx-auto">
        Subscribed at
      </div>
      <div className="col-span-2 border-y border-r w-full h-full rounded-r flex">
        <p className="m-auto text-green-500">{formatDate(user.created_at)}</p>
      </div>
    </div>
  );
};

export default UserSubscribedAt;
