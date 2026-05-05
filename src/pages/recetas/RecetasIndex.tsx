import { Link, useOutletContext, useParams } from "react-router-dom";
import DarkTable from "../../configuration/DarkTable";
import TextDark from "../../configuration/TextDark";
import { useEffect, useState } from "react";
import type { Receta } from "../../types/Recetas";
import { getRecetas } from "../../services/recetasService";

type OutletContext = {
  dark: boolean;
};

function RecetasIndex() {
  const { dark } = useOutletContext<OutletContext>();
  const { idPaciente } = useParams();
  console.log(idPaciente);

  const [recetas, setRecetas] = useState<Receta[]>([]);
  useEffect(() => {
    // if (idPaciente) {
    getRecetas(Number(idPaciente)).then((recetas) => setRecetas(recetas));
    // }
  }, [idPaciente]);
  console.log(recetas);

  return (
    <div
      className={
        "container mx-auto px-4 py-8 " +
        (dark ? "bg-gray-900 text-white" : "bg-white text-black")
      }
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <TextDark dark={dark} as="h1" className="text-2xl font-bold">
          Lista de Recetas
        </TextDark>
        <Link
          to="/create"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Crear Recetas
        </Link>
      </div>

      <DarkTable dark={dark} className="shadow-sm rounded-lg" tableClassName="">
        <thead
          className={
            "text-xs uppercase " +
            (dark ? "text-gray-300 bg-gray-700" : "text-gray-700 bg-gray-50")
          }
        >
          <tr>
            <th className="px-6 py-3">Fecha</th>
            <th className="px-6 py-3">Hora</th>
            <th className="px-6 py-3">Diagnostico</th>
            <th className="px-6 py-3">Proxima Cita</th>
            <th className="px-6 py-3">Indicaciones</th>
            <th className="px-6 py-3">Receta</th>
          </tr>
        </thead>
        <tbody>
          {recetas.map((receta) => (
            <tr
              key={receta.id}
              className={
                "border-b " +
                (dark
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50")
              }
            >
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  {receta.fecha}
                </TextDark>
              </td>
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  {receta.hora}
                </TextDark>
              </td>
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  {receta.diagnostico}
                </TextDark>
              </td>
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  {receta.proxima_cita}
                </TextDark>
              </td>
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  {receta.indicaciones}
                </TextDark>
              </td>
              <td>
                <TextDark dark={dark} className="px-6 py-4">
                  ljksdlksd
                </TextDark>
              </td>
            </tr>
          ))}
        </tbody>
      </DarkTable>
    </div>
  );
}

export default RecetasIndex;
