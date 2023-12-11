import { create } from "zustand";

const useTodoStore = create((set) => ({
  dataSementara: {},
  setDataSementara: ({ id, name, username, phone, gendre }) => {
    const newData = { id, name, username, phone, gendre };
    set({ dataSementara: newData });
  },
}));
