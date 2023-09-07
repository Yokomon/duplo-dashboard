import React from "react";
import { IconType } from "@react-icons/all-files";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import useStore from "../hooks/useStore";

export interface ILinkItems {
  title?: string;
  icon: IconType;
  path: string;
  url: string;
  logOut?: boolean;
}

export const LinkItems: React.FC<ILinkItems> = ({
  title,
  icon,
  path,
  url,
  logOut,
}) => {
  const { reset } = useStore();
  const { pathname } = useLocation();

  const handleLogout = () => {
    if (logOut) {
      reset();
    }
    return;
  };

  return (
    <div className="space-y-1">
      {title && (
        <h3 className="uppercase text-sm px-5 text-gray-500 font-medium tracking-wider mb-3">
          {title}
        </h3>
      )}
      <div
        onClick={handleLogout}
        className={clsx({
          "flex items-center space-x-4 text-gray-400 hover:bg-blue-500 hover:text-white cursor-pointer hover:shadow-sm duration-300 p-3 rounded-xl":
            true,
          "bg-blue-500 text-white":
            pathname.toLowerCase() === url.toLowerCase(),
          "hover:!bg-rose-400 text-rose-500": logOut,
        })}
      >
        {React.createElement(icon, { size: 20 })}
        <h5 className="font-medium tracking-wider text-sm">{path}</h5>
      </div>
    </div>
  );
};
