import { formatDate } from "utils/formatDate";

interface InitialProps {
  user: User;
}

const UserSubscribedAt = ({ user }: InitialProps) => {
  return (
    <div className="text-gray-600 text-sm grid md:grid-cols-3 border md:border-none rounded">
      <div className="bg-gray-100 md:border-y md:border-l md:rounded-l w-full px-4 py-2 mx-auto">
        Subscribed at
      </div>
      <div className="md:col-span-2 md:border-y md:border-r w-full h-full md:rounded-r flex">
        <p className="m-auto text-green-500 p-2 md:p-0">{formatDate(user.created_at)}</p>
      </div>
    </div>
  );
};

export default UserSubscribedAt;
