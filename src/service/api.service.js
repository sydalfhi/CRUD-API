// api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
});

export const getAllData = () => api.get("/data");
export const getOneData = (id) => api.get(`/data/${id}`);
export const createData = (newData) => api.post("/data", newData);
export const updateData = (id, updatedData) =>
  api.put(`/data/${id}`, updatedData);
export const patchData = (id, patchData) => api.patch(`/data/${id}`, patchData);
export const deleteData = (id) => api.delete(`/data/${id}`);
