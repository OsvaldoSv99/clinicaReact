import type { AxiosResponse } from "axios";
import type { Paciente } from "../types/Paciente";
import { api } from "../api/axios";

interface ApiResponse<T> {
  dato: T;
}

const unwrap = async <T>(
  promise: Promise<AxiosResponse<ApiResponse<T>>>,
): Promise<T> => {
  const res = await promise;
  return res.data.dato;
};

export const getPaciente = () => unwrap<Paciente[]>(api.get("/paciente"));

export const createPaciente = (
  data: Omit<Paciente, "id" | "no_expediente" | "activo">,
) => unwrap<Paciente>(api.post("/paciente", data));

export const getPacienteById = (id: number) =>
  unwrap<Paciente>(api.get(`/paciente/${id}`));

export const updatePaciente = (
  id: number,
  data: Omit<Paciente, "id" | "no_expediente" | "activo">,
) => unwrap<Paciente>(api.put(`/paciente/${id}`, data));
