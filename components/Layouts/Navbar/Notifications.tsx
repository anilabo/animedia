import { Dropdown } from "flowbite-react";
import { AiFillBell } from "react-icons/ai";
import Image from "next/image";

const NavbarNotifications = () => {
  return (
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<AiFillBell className="text-3xl m-1 text-gray-700" />}
    >
      <Dropdown.Item>
        <div className="flex gap-2">
          <Image
            src={
              "https://lh3.googleusercontent.com/a/ALm5wu3Fw2h0Z_Jt4u_F3sLDf4Ff7j0hViNCVxySpnif=s96-c"
            }
            className="rounded-full"
            width={30}
            height={30}
          />
          <p className="my-auto">higakijin follow Tellstyle.</p>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default NavbarNotifications;
