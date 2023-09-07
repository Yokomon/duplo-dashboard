import { GiAtomicSlashes } from "@react-icons/all-files/gi/GiAtomicSlashes";
import { HiMiniUsers } from "@react-icons/all-files/hi2/HiMiniUsers";
import { useEffect, useState } from "react";
import { MdOutlineLogout } from "@react-icons/all-files/md/MdOutlineLogout";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { Table } from "./components/Table";
import { AdminResponse } from "./types/AdminResponse";
import { getUserData } from "./utils/getUserData";
import { LinkItems } from "../components/LinkItems";
import useStore from "../hooks/useStore";
import { db } from "../base";
import { Roles } from "../types/Roles";

export const AdminDashboard = () => {
  const { profile } = useStore();
  const navigate = useNavigate();

  const [data, setData] = useState<Array<AdminResponse>>([]);

  useEffect(() => {
    getUserData({ setData });
  }, []);

  useEffect(() => {
    if (profile?.role !== Roles.ADMIN) return navigate("/admin");
  }, [profile, navigate]);

  const handleClick = async (value: AdminResponse) => {
    const docRef = doc(db, "users", value.docId!);
    await updateDoc(docRef, {
      role: Roles.HR,
    });
    navigate(0);
  };

  return (
    <section className="flex items-start bg-gray-100 h-full w-full shadow-sm">
      <nav className="fixed inset-0 w-[18rem]  2xl:w-[18rem] bg-white">
        <div className="p-6 text-2xl flex items-center space-x-5">
          <GiAtomicSlashes size={38} className="text-blue-600" />
          <h3 className="font-medium">Admin Panel</h3>
        </div>
        <div className="px-6 space-y-8 flex flex-col justify-between h-[90%]">
          <LinkItems
            url="/admin-dashboard"
            title="menu"
            icon={HiMiniUsers}
            path="Users"
          />

          <div>
            <LinkItems logOut url="/" icon={MdOutlineLogout} path="Logout" />
          </div>
        </div>
      </nav>
      <main className="pl-[20rem] w-full pb-12 h-full overflow-scroll">
        <div>
          <h2 className="text-3xl mt-8">Welcome to the Admin panel</h2>
          <div className="flex my-10 items-center w-full h-full">
            <Table handleClick={handleClick} data={data} />
          </div>
        </div>
      </main>
    </section>
  );
};
