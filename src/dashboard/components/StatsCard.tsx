import { IconType } from "@react-icons/all-files";
import React, { HTMLProps } from "react";

export interface IStatsCard {
  title: string;
  icon: IconType;
  iconColor: HTMLProps<HTMLElement>["className"];
  amount: number;
  svgColor: string;
  bgColor: string;
}

export const StatsCard: React.FC<IStatsCard> = ({
  title,
  amount,
  icon,
  iconColor,
  svgColor,
  bgColor,
}) => {
  const circumference = 50 * 2 * Math.PI;

  return (
    <div className="bg-gray-50 rounded-md w-[22rem] p-4 flex justify-between items-start hover:cursor-pointer hover:shadow-md duration-500">
      <div className="space-y-4">
        <h3 className="text-gray-400 font-medium text-sm tracking-wider">
          {title}
        </h3>
        <h1 className="text-2xl">{amount}</h1>
        <div className="flex items-center space-x-2">
          <div className={`${bgColor} bg-green-100 rounded-full p-1 w-fit`}>
            {React.createElement(icon, { size: 10, className: iconColor })}
          </div>
          <p className="text-xs text-gray-400">+14% inc</p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-gray-50 relative rounded-full">
        <p className="flex items-center text-gray-600 absolute justify-center top-10 left-8">
          +74%
        </p>
        <svg className="w-32 h-32 transform translate-x-1 translate-y-1">
          <circle
            className="text-gray-300"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          <circle
            className={svgColor}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (60 / 90) * circumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
        </svg>
      </div>
    </div>
  );
};
