import axios from "axios";
import UserFollowingsComponent from "components/User/base/Followings";
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

type InitialProps = { user: User };

const UserFollowingsPage: NextPage<InitialProps> = ({ user }) => {
  return <UserFollowingsComponent user={user} />;
};

export default UserFollowingsPage;
