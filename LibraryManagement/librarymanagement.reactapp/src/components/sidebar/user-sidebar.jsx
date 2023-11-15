/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import Logo from "assets/img/logo/LibraryManagementLogo.png";
import routes from "./user-sidebar-routes";

const UserSidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mb-[30px] ml-8 mt-[30px] flex items-center`}>
        <div className="mb-5 mt-1 h-2.5 text-[26px] font-bold dark:text-white">
          <img className="h-[70px] w-full" src={Logo} alt="" />
        </div>
      </div>
      <div class="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Free Horizon Card */}
      <div className="flex justify-center">{/* <SidebarCard /> */}</div>

      {/* Nav item end */}
    </div>
  );
};

export default UserSidebar;
