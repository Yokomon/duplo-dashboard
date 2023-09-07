import { HiMiniArrowTrendingUp } from "@react-icons/all-files/hi2/HiMiniArrowTrendingUp";
import { IStatsCard } from "../components/StatsCard";

export const getStatsCard: () => Array<IStatsCard> = () => {
  return [
    {
      icon: HiMiniArrowTrendingUp,
      title: "Total Applications",
      amount: 5672,
      iconColor: "text-green-500",
      svgColor: "text-[#38CB89]",
      bgColor: "bg-green-100",
    },
    {
      icon: HiMiniArrowTrendingUp,
      title: "Shortlisted candidates",
      amount: 3045,
      iconColor: "text-[#FFA600]",
      svgColor: "text-[#FFA600]",
      bgColor: "bg-orange-100",
    },
    {
      icon: HiMiniArrowTrendingUp,
      title: "Rejected candidates",
      amount: 1055,
      iconColor: "text-[#FF5630]",
      svgColor: "text-[#FF5630]",
      bgColor: "bg-rose-100",
    },
  ];
};
