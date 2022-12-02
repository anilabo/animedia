import { signOut } from "firebase/auth";
import { Avatar, Dropdown } from "flowbite-react";
import { firebase, auth } from "lib/Firebase";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { Dispatch, SetStateAction } from "react";

type InitialProps = { currentUser: firebase.User, setIsSignedIn: Dispatch<SetStateAction<boolean>> };

const NavbarLoggedInUserIcon = ({ currentUser, setIsSignedIn }: InitialProps) => {
  const router = useRouter()
  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsSignedIn(false);
        router.reload();
      })
      .catch((error) => {
        alert(error);
      });
    destroyCookie(null, 'uid')
  };
  
  return (
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={
        <Avatar
          alt="User settings"
          img={`${currentUser.photoURL}`}
          rounded={true}
        />
      }
    >
      <Dropdown.Header>
        <span className="block text-sm">{currentUser.displayName}</span>
        <span className="block truncate text-sm font-medium">
          {currentUser.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item onClick={() => router.push(`/users/${currentUser.uid}`)}>
        MyPage
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => router.push(`/users/${currentUser.uid}/recent_activity`)}
      >
        Recent activity
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => router.push(`/users/edit`)}
      >
        Edit Profile
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => logout()}>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export default NavbarLoggedInUserIcon;
