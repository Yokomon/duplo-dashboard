import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export type User = {
  name: string;
  email: string;
  role: string;
};

interface IStoreList<T> {
  profile: T | null;
  reset: () => void;
  add: (value: T) => void;
}

const useStore = create<IStoreList<User>>()(
  devtools(
    persist(
      (set) => ({
        profile: { name: "", email: "", role: "" },
        add: (value) => set((state) => ({ ...state, profile: value })),
        reset: () => set((state) => ({ ...state, profile: null })),
      }),
      {
        name: "DuploTest",
      }
    )
  )
);

export default useStore;
