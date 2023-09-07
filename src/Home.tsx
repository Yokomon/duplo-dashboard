import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useStore from "./hooks/useStore";
import { Roles } from "./types/Roles";

export const Home = () => {
  const { profile, reset } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (profile?.role === Roles.ADMIN) return navigate("/admin-dashboard");
    if (profile?.role !== Roles.USER) return navigate("/");
  }, [profile, navigate]);

  return (
    <div className="w-full flex items-center justify-center flex-col h-full space-y-4 bg-gray-50 text-3xl">
      <h2>You are welcome to the Duplo test app {profile?.name}</h2>
      <p className="text-gray-400 text-sm">
        You need authorization from admin to proceed to HR Dashboard.
      </p>
      <button
        className="text-sm rounded-md bg-rose-300 p-2 px-6 text-white"
        onClick={() => reset()}
      >
        Log out
      </button>
    </div>
  );
};
