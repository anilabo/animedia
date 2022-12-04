import UserWithdrawalComponent from "components/User/base/Withdrawal";
import { NextPage } from "next";
import { parseCookies } from "nookies";

type InitialProps = { user: User };

const UserWithdrawalPage: NextPage<InitialProps> = ({ user }) => {
  return <UserWithdrawalComponent user={user} />;
};

UserWithdrawalPage.getInitialProps = async (context) => {
  const cookie = parseCookies(context);
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_ANILABO_URL}/users/${cookie.uid}`
  );
  const user = await data.json();
  if (context.res && (!cookie.uid || !user)) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
  }
  return { user };
};

export default UserWithdrawalPage;
