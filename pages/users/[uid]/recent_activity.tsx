import axios from "axios";
import UserRecentActivityComponent from "components/User/base/RecentActivity";
import { isNotFoundCode } from "hooks/useNotFound";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { uid } = context.query;

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_ANILABO_URL}/users/${uid}/notifications`
    );
    const activities = await res.data;
    return {
      props: { activities },
    };
  } catch (error) {
    return {
      props: {},
      notFound: isNotFoundCode(error),
    };
  }
};

type InitialProps = { activities: Activity[] }

const RecentActivityPage: NextPage<InitialProps> = ({ activities }) => {
  return <UserRecentActivityComponent activities={activities} />;
};

export default RecentActivityPage;
