import { useEffect, useState } from "react";
import type { Paciente } from "../../types/Paciente";
import { getPaciente } from "../../services/pacienteService";

function PacienteIndex() {
  const [paciente, setPaciente] = useState<Paciente[]>([]);
  useEffect(() => {
    getPaciente().then((paciente) => setPaciente(paciente));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Lista de Pacientes</h1>
      <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Crear Paciente
      </a>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
            <tr key={paciente.id} className="bg-white border-b">
              <td className="px-6 py-4">{paciente.nombre}</td>
              <td className="px-6 py-4">{paciente.curp}</td>
              <td className="px-6 py-4">{paciente.domicilio}</td>
              <td className="px-6 py-4">{paciente.telefono}</td>
              <td className="px-6 py-4">{paciente.contacto_nombre}</td>
              <td className="px-6 py-4">{paciente.contacto_telefono}</td>
              <td className="px-6 py-4">{paciente.activo}</td>
              <td className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Editar
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PacienteIndex;
