import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAllBlogs = () => instance.get("/blog").then((res) => res.data);

export const getSingleBlog = (id) =>
  instance.get(`/blog/${id}`).then((res) => res.data);

export const addSingleBlog = (payload) =>
  instance.post("/blog", payload).then((res) => res.data);

export const editSingleBlog = ({ id, payload }) =>
  instance.put(`/blog/${id}`, payload).then((res) => res.data);

export const deleteSingleBlog = (id) =>
  instance.delete(`/blog/${id}`).then((res) => res.data);
