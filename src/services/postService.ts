import axios from "axios";
import type { Post } from "../types/Post";

const APP_URL = "http://127.0.0.1:8000/api";

export const getPosts = () => axios.get<Post[]>(APP_URL + `/posts`);

// Omit funciona para expluir un campo de lo generado en el tipo Post y tomar en cuenta el resto de los campos
export const createPost = (data: Omit<Post, "id">) =>
  axios.post<Post>(APP_URL + `/posts`, data);
