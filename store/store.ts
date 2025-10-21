import { create } from "zustand";

interface GroupStoreTypes {
  idArray: number[];
  setArrayA: (newId: number) => void;
  setArrayB: (removeArrayEmt: number[]) => void;
}

export const useGroupMainArray = create<GroupStoreTypes>((set) => ({
  idArray: [],
  setArrayA: (newId) => {
    set((state) => ({ idArray: [...state.idArray, newId] }));
  },
  setArrayB: (removeArrayEmt) => set(() => ({ idArray: removeArrayEmt })),
}));
