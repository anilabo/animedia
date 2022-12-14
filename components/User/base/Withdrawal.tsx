import UserSettingsSideBar from "../SettingsSideBar";
import UserWithdrawalForm from "../WithdrawalForm";

type InitialProps = { user: User }

const UserWithdrawalComponent = ({ user }: InitialProps) => {
  return (
    <div className="md:flex max-w-6xl mx-auto">
      <UserSettingsSideBar user={user} />
      <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
        <UserWithdrawalForm />
      </div>
    </div>
  );
};

export default UserWithdrawalComponent;
