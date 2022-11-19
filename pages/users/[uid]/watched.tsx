import axios from "axios";
import UserWatchedAllAnimesComponent from "components/User/base/WatchedAllAnime";
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

const UserWatchedAllAnimesPage: NextPage<InitialProps> = ({ user }) => {
  return <UserWatchedAllAnimesComponent user={user} />;
};

export default UserWatchedAllAnimesPage;
