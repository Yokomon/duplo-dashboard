import { collection, getDocs } from "firebase/firestore";

import { AdminResponse } from "../types/AdminResponse";
import { db } from "../../base";
import { Roles } from "../../types/Roles";

interface IParams {
  setData: (data: Array<AdminResponse>) => void;
}

export const getUserData = async ({ setData }: IParams) => {
  try {
    const fetchedData: Array<AdminResponse> = [];
    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      fetchedData.push({
        ...docData,
        actions:
          docData.role === Roles.ADMIN || docData.role === Roles.HR
            ? false
            : true,
        docId: doc.id,
      } as AdminResponse);
    });

    setData(fetchedData);
  } catch (error) {
    console.error(error);
  }
};
