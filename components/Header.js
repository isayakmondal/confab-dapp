import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import confabLogo from "../public/images/confab-logo-color.png";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-amber-600 border-b-2 border-amber-700  ">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src={confabLogo}
            placeholder="blur"
            title="Confab"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-amber-700 border-8 rounded-full">
            {/* avatar */}
            <Avatar logoutOnPress />
          </div>
          {/* Welcome Message */}
          <h1 className="text-3xl ">Welcome to Confab's Metaverse</h1>
          {/* Change Username */}
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
