import { Link, useOutletContext } from "react-router-dom";
import DarkTable from "../../configuration/DarkTable";
import TextDark from "../../configuration/TextDark";

type OutletContext = {
  dark: boolean;
};

function RecetasIndex() {
  const { dark } = useOutletContext<OutletContext>();
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
          Crear Post
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
            <th className="px-6 py-3">Titulo</th>
            <th className="px-6 py-3">Descripcion</th>
            <th className="px-6 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </DarkTable>
    </div>
  );
}

export default RecetasIndex;
