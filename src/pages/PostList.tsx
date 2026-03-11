import { useEffect, useState } from "react";
import { getPosts } from "../services/postService";
import type { Post } from "../types/Post";
import { Link } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data.dato));
  }, []);
  // console.log(posts);

  return (
    <div className="container mx-auto px-4 py-8 overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Lista de Posts</h1>
      <Link
        to="/create"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Crear Post
      </Link>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Titulo</th>
            <th className="px-6 py-3">Descripcion</th>
            <th className="px-6 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">
                {post.title}
              </td>
              <td className="px-6 py-4">{post.body}</td>
              <td className="px-6 py-4">
                <Link
                  to={`/show/${post.id}`}
                  className="bg-transparent hover:bg-blue-700 text-blue-700 border font-bold py-2 px-4 rounded"
                >
                  Ver
                </Link>
                <Link
                  to={`/edit/${post.id}`}
                  className="bg-transparent hover:bg-yellow-700 text-yellow-700 border font-bold py-2 px-4 rounded"
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
      </table>
    </div>
  );
}
