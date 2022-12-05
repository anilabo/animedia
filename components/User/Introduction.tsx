type InitialProps = { user: User };

const UserIntroduction = ({ user }: InitialProps) => {
  return (
    <>
      {user.introduction && (
        <div className="rounded border shadow px-10 py-4">
          {user.introduction}
        </div>
      )}
    </>
  );
};

export default UserIntroduction;
