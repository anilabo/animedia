import axios from "axios";
import UserSettingsComponent from "components/User/base/Settings";
import { isNotFoundCode } from "hooks/useNotFound";
import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_ANILABO_URL}/users/${cookies.uid}`
    );
    const user = await res.data;
    return {
      props: { user },
    };
  } catch (error) {
    return {
      props: {},
      notFound: isNotFoundCode(error),
    };
  }
};

type InitialProps = { user: User };

const UserSettingsPage: NextPage<InitialProps> = ({ user }) => {
  return <UserSettingsComponent user={user} />;
};

export default UserSettingsPage;
