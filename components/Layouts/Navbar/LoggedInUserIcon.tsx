import { signOut } from "firebase/auth";
import { Avatar, Dropdown } from "flowbite-react";
import { firebase, auth } from "lib/Firebase";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { Dispatch, SetStateAction } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdAccountCircle, MdLightbulb } from "react-icons/md";
import { TiArrowBack } from "react-icons/ti";

type InitialProps = {
  currentUser: firebase.User;
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
};

const NavbarLoggedInUserIcon = ({
  currentUser,
  setIsSignedIn,
}: InitialProps) => {
  const router = useRouter();
  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsSignedIn(false);
        destroyCookie(null, "uid");
        location.replace("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const DropDownItems = [
    {
      text: "MyPage",
      onClick: () => router.push(`/users/${currentUser.uid}`),
      icon: <MdAccountCircle className="w-5 h-5" />,
    },
    {
      text: "Recent activity",
      onClick: () => router.push(`/users/${currentUser.uid}/recent_activity`),
      icon: <MdLightbulb className="w-5 h-5" />,
    },
    {
      text: "Settings",
      onClick: () => router.push(`/users/settings`),
      icon: <IoMdSettings className="w-5 h-5" />,
    },
  ];

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
      {DropDownItems.map((item, index) => (
        <Dropdown.Item onClick={item.onClick} key={index} className="gap-2">
          {item.icon}
          {item.text}
        </Dropdown.Item>
      ))}
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => logout()} className="gap-2">
        <TiArrowBack className="w-5 h-5" />
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
};

export default NavbarLoggedInUserIcon;
