import UserSettingsComponent from "components/User/base/Settings";
import { NextPage } from "next";
import { parseCookies } from "nookies";

type InitialProps = { user: User };

const UserSettingsPage: NextPage<InitialProps> = ({ user }) => {
  return <UserSettingsComponent user={user} />;
};

// SSRだとブラウザバック時にcookieが空になる現象がおきるので、getInitialPropsで回避
UserSettingsPage.getInitialProps = async (context) => {
  const cookie = parseCookies(context)
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_ANILABO_URL}/users/${cookie.uid}`
  );
  const user = await data.json();
  if (context.res && (!cookie.uid || !user)) {
    context.res.writeHead(302, { Location: '/' })
    context.res.end()
  }
  return { user };
};

export default UserSettingsPage;
