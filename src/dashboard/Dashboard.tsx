import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useStore from "../hooks/useStore";
import { LeftNav } from "./components/LeftNav";
import { Main } from "./components/Main";
import { ProfileDrawer } from "./components/ProfileDrawer";
import { Roles } from "../types/Roles";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { profile } = useStore();

  useEffect(() => {
    if (profile?.role !== Roles.HR) {
      return navigate("/home");
    }
  }, [profile, navigate]);

  return (
    <section className="flex items-start bg-gray-100 h-full w-full shadow-sm">
      <LeftNav />
      <Main />
      <ProfileDrawer />
    </section>
  );
};
