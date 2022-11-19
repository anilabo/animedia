import axios from "axios";
import UserAllCommentsComponent from "components/User/base/AllComments";
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

const UserAllCommentsPage: NextPage<InitialProps> = ({ user }) => {
  return (
    <UserAllCommentsComponent user={user} />
  );
};

export default UserAllCommentsPage;
