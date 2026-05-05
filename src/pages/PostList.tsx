import { useEffect, useState } from "react";
import { getPosts } from "../services/postService";
import type { Post } from "../types/Post";
import { Link, useOutletContext } from "react-router-dom";
import DarkTable from "../configuration/DarkTable";
import TextDark from "../configuration/TextDark";

type OutletContext = {
  dark: boolean;
};

export default function PostList() {
  const { dark } = useOutletContext<OutletContext>();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);
  console.log(posts);

  return (
    <div
      className={
        "container mx-auto px-4 py-8 " +
        (dark ? "bg-gray-900 text-white" : "bg-white text-black")
      }
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <TextDark dark={dark} as="h1" className="text-2xl font-bold">
          Lista de Posts
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
        <tbody>
          {posts.map((post) => (
            <tr
              key={post.id}
              className={
                "border-b " +
                (dark
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50")
              }
            >
              <td>
                <TextDark dark={dark} className="px-6 py-4 ">
                  {post.title}
                </TextDark>
              </td>
              <td>
                <TextDark dark={dark} className="px-6 py-4 ">
                  {post.body}
                </TextDark>
              </td>
              <td className="px-6 py-4">
                <Link
                  to={`/show/${post.id}`}
                  className="bg-transparent hover:bg-blue-700 text-blue-700 border font-bold py-2 px-4 rounded mr-2 "
                >
                  Ver
                </Link>
                <Link
                  to={`/edit/${post.id}`}
                  className="bg-transparent hover:bg-yellow-700 text-yellow-700 border font-bold py-2 px-4 rounded "
                >
                  Editar
                </Link>
                <button className="bg-transparent hover:bg-red-700 text-red-700 border font-bold py-2 px-4 rounded">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </DarkTable>
    </div>
  );
}
