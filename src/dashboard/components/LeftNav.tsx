import { GiAtomicSlashes } from "@react-icons/all-files/gi/GiAtomicSlashes";
import clsx from "clsx";

import { getNavRoutes } from "../utils/getNavRoutes";
import { LinkItems } from "../../components/LinkItems";
import { MdOutlineLogout } from "@react-icons/all-files/md/MdOutlineLogout";

export const LeftNav = () => {
  return (
    <nav className="fixed inset-0 w-[18rem]  2xl:w-[18rem] bg-white">
      <div className="p-6 text-2xl flex items-center space-x-5">
        <GiAtomicSlashes size={38} className="text-blue-600" />
        <h3 className="font-medium">Human R.</h3>
      </div>
      <div className="px-6">
        {getNavRoutes().map(({ title, icon, url, path }, idx) => (
          <div
            key={path}
            className={clsx({
              "mt-8": title && idx !== 0,
              "my-1": true,
            })}
          >
            <LinkItems title={title} url={url} path={path} icon={icon} />
          </div>
        ))}
        <div>
          <LinkItems logOut url="/" icon={MdOutlineLogout} path="Logout" />
        </div>
      </div>
    </nav>
  );
};
