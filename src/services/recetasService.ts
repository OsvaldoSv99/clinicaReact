import type { Receta } from "../types/Recetas";
import { api } from "../api/axios";
import type { AxiosResponse } from "axios";

interface ApiResponse<T> {
  dato: T;
}

const unwrap = async <T>(
  promise: Promise<AxiosResponse<ApiResponse<T>>>,
): Promise<T> => {
  const res = await promise;
  return res.data.dato;
};

export const getRecetas = (idPaciente: number | string) =>
  unwrap<Receta[]>(api.get(`/recetas/${idPaciente}`));
