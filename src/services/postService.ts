import axios from "axios";
import type { Post } from "../types/Post";

const APP_URL = "http://127.0.0.1:8000/api";

interface ApiResponse<T> {
  dato: T;
}

export const getPosts = () =>
  axios.get<ApiResponse<Post[]>>(APP_URL + `/posts`);

// Omit funciona para expluir un campo de lo generado en el tipo Post y tomar en cuenta el resto de los campos
export const createPost = (data: Omit<Post, "id">) =>
  axios.post<ApiResponse<Post>>(APP_URL + `/posts`, data);

export const getPost = (id: number | string) =>
  axios.get<ApiResponse<Post>>(APP_URL + `/posts/` + id);

export const updatePost = (id: number | string, data: Omit<Post, "id">) =>
  axios.put<ApiResponse<Post>>(APP_URL + `/posts/` + id, data);
