import { create } from "zustand";

export const useTodoStore = create((set) => ({
  dataSementara: {},
  setDataSementara: ({ id, name, email, username, phone, gendre }) => {
    const newData = { id, name, username, email, phone, gendre };
    set({ dataSementara: newData });
  },
  hapusDataSementara: () => set({ dataSementara: {} }),
}));
