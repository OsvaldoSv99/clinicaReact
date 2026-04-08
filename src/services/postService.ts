import type { Post } from "../types/Post";
import { api } from "../api/axios";
import type { AxiosResponse } from "axios";

interface ApiResponse<T> {
  dato: T;
}

const unwrap = async <T>(
  promise: Promise<AxiosResponse<ApiResponse<T>>>
): Promise<T> => {
  const res = await promise;
  return res.data.dato;
};


export const getPosts = () => unwrap<Post[]>(api.get("/posts"));

export const getPost = (id: number | string) =>
  unwrap<Post>(api.get(`/posts/${id}`));

export const createPost = (data: Omit<Post, "id">) =>
  unwrap<Post>(api.post("/posts", data));

export const updatePost = (id: number | string, data: Omit<Post, "id">) =>
  unwrap<Post>(api.put(`/posts/${id}`, data));
