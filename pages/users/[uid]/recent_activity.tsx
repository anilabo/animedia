import axios from "axios";
import UserRecentActivityComponent from "components/User/base/RecentActivity";
import { isNotFoundCode } from "hooks/useNotFound";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { uid } = context.query;

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_ANILABO_URL}/users/${uid}`
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

type InitialProps = { user: User }

const RecentActivityPage: NextPage<InitialProps> = ({ user }) => {

  return <UserRecentActivityComponent user={user} activities={user.active_notifications} />;
};

export default RecentActivityPage;
