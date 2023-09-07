import { RxDashboard } from "@react-icons/all-files/rx/RxDashboard";
import { ILinkItems } from "../../components/LinkItems";
import { TbMessage2 } from "@react-icons/all-files/tb/TbMessage2";
import { RxCalendar } from "@react-icons/all-files/rx/RxCalendar";
import { FaToolbox } from "@react-icons/all-files/fa/FaToolbox";
import { HiMiniUsers } from "@react-icons/all-files/hi2/HiMiniUsers";
import { GiAtomicSlashes } from "@react-icons/all-files/gi/GiAtomicSlashes";
import { PiDesktopTowerFill } from "@react-icons/all-files/pi/PiDesktopTowerFill";
import { TbReportAnalytics } from "@react-icons/all-files/tb/TbReportAnalytics";
import { TbSettings } from "@react-icons/all-files/tb/TbSettings";

export const getNavRoutes: () => Array<ILinkItems> = () => {
  return [
    {
      title: "Menu",
      icon: RxDashboard,
      url: "/dashboard",
      path: "Dashboard",
    },
    {
      icon: TbMessage2,
      url: "/",
      path: "Message",
    },
    {
      icon: RxCalendar,
      url: "/",
      path: "Calendar",
    },

    {
      title: "Recruitment",
      icon: FaToolbox,
      url: "/",
      path: "Jobs",
    },
    {
      icon: HiMiniUsers,
      url: "/",
      path: "Candidates",
    },
    {
      icon: GiAtomicSlashes,
      url: "/",
      path: "My Referrals",
    },
    {
      icon: PiDesktopTowerFill,
      url: "/",
      path: "Career site",
    },

    {
      title: "Organization",
      icon: HiMiniUsers,
      url: "/",
      path: "Employee",
    },
    {
      icon: GiAtomicSlashes,
      url: "/",
      path: "Structure",
    },
    {
      icon: TbReportAnalytics,
      url: "/",
      path: "Report",
    },
    {
      icon: TbSettings,
      url: "/",
      path: "Settings",
    },
  ];
};
