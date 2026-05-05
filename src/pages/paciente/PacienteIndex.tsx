import { useEffect, useState } from "react";
import type { Paciente } from "../../types/Paciente";
import { getPaciente } from "../../services/pacienteService";
import { Link, useOutletContext } from "react-router-dom";
import TextDark from "../../configuration/TextDark";
import DarkTable from "../../configuration/DarkTable";

type OutletContext = {
  dark: boolean;
};

function PacienteIndex() {
  const { dark } = useOutletContext<OutletContext>();

  const [paciente, setPaciente] = useState<Paciente[]>([]);
  useEffect(() => {
    getPaciente().then((paciente) => setPaciente(paciente));
  }, []);

  return (
    <div
      className={
        "container mx-auto px-4 py-8 " +
        (dark ? "bg-gray-900 text-white" : "bg-white text-black")
      }
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <TextDark dark={dark} as="h1" className="text-2xl font-bold">
          Lista de Pacientes
        </TextDark>
        <Link
          to="/pacientes/create"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Crear Paciente
        </Link>
      </div>
      <DarkTable dark={dark} className="shadow-sm rounded-lg">
        <thead
          className={
            "text-xs uppercase " +
            (dark ? "text-gray-300 bg-gray-700" : "text-gray-700 bg-gray-50")
          }
        >
          <tr>
            <th className="px-6 py-3">Nombre</th>
            <th className="px-6 py-3">CURP</th>
            <th className="px-6 py-3">Domicilio</th>
            <th className="px-6 py-3">Teléfono</th>
            <th className="px-6 py-3">Contacto</th>
            <th className="px-6 py-3">Teléfono Contacto</th>
            <th className="px-6 py-3">Estado</th>
            <th className="px-6 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paciente.map((paciente) => (
            <tr
              key={paciente.id}
              className={
                "border-b " +
                (dark
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50")
              }
            >
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  {paciente.nombre} {paciente.apellido_paterno}{" "}
                  {paciente.apellido_materno}
                </TextDark>
              </td>
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  {paciente.curp}
                </TextDark>
              </td>
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  {paciente.domicilio}
                </TextDark>
              </td>
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  {paciente.telefono}
                </TextDark>
              </td>
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  {paciente.contacto_nombre}
                </TextDark>
              </td>
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  {paciente.contacto_telefono}
                </TextDark>
              </td>
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  {paciente.activo === "1" ? "Activo" : "Inactivo"}
                </TextDark>
              </td>
              <td className="px-6 py-4">
                <Link
                  to={`/pacientes/edit/${paciente.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
                >
                  Editar
                </Link>
                <Link
                  to={`/recetas/${paciente.id}`}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-1"
                >
                  Ver Recetas
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </DarkTable>
    </div>
  );
}

export default PacienteIndex;
