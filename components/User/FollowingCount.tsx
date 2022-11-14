interface InitialProps {
  user: User
}

const UserFollowingCount = ({ user }: InitialProps) => {
  return (
    <div className="rounded border grid grid-cols-2 text-sm divide-x">
      <p className="w-full py-2 m-auto text-center">
        <b className="font-semibold text-green-500 text-md">9</b> Following
      </p>
      <p className="w-full py-2 m-auto text-center">
        <b className="font-semibold text-green-500 text-md">10</b> Followed
      </p>
    </div>
  );
};

export default UserFollowingCount;
