import axios from "axios";
import UserWatchingAllAnimesComponent from "components/User/base/WatchingAllAnime";
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

const UserWatchingAllAnimesPage: NextPage<InitialProps> = ({ user }) => {
  return <UserWatchingAllAnimesComponent user={user} />;
};

export default UserWatchingAllAnimesPage;
