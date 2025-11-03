import { create } from "zustand";

interface GroupStoreTypes {
  idArray: number[];
  setArrayA: (newId: number) => void;
  setArrayB: (removeArrayEmt: number[]) => void;
  setArrayC: (fullArray: number[]) => void;
}

export const useGroupMainArray = create<GroupStoreTypes>((set) => ({
  idArray: [],
  setArrayA: (newId) => {
    set((state) => ({ idArray: [...state.idArray, newId] }));
  },
  setArrayB: (removeArrayEmt) => set(() => ({ idArray: removeArrayEmt })),
  setArrayC: (fullArray) => set(() => ({ idArray: fullArray })),
}));
interface TrueFalseTypes {
  initState: boolean;
  setGroupCreateState: (newState: boolean) => void;
}

export const useTrueFalseAction = create<TrueFalseTypes>((set) => ({
  initState: false,
  setGroupCreateState: (newState) => set(() => ({ initState: newState })),
}));
