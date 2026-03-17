import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useOutletContext } from "react-router-dom";
import { createPost, getPost } from "../services/postService";

type OutletContext = {
  dark: boolean
}

export default function PostEdit() {
  const { dark } = useOutletContext<OutletContext>()
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    if (id) {
      getPost(id).then((res) => {
        setTitle(res.data.dato.title);
        setbody(res.data.dato.body);
      });
    }
  }, [id]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    createPost({ title, body }).then(() => {
      navigation("/");
    });
  };

  return (
    <div
      className={
        "container mx-auto px-4 py-8 " +
        (dark ? "bg-gray-800 text-white" : "bg-white text-black")
      }
    >
      <h1
        className={
          "font-bold text-2xl mb-4 " +
          (dark ? "text-white" : "text-black")
        }
      >
        Post Edit
      </h1>
      <br />
      <Link
        to="/"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Regresar
      </Link>
      <br />
      <br />
      <form onSubmit={submit} method="post">
        <label
          className={
            "block text-sm font-medium mb-1 " +
            (dark ? "text-gray-300" : "text-gray-700")
          }
        >
          Titulo
        </label>
        <input
          name="title"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={
            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " +
            (dark
              ? "border-gray-600 bg-gray-700 text-white"
              : "border-gray-300 bg-white text-black")
          }
          placeholder="Escribe aquí..."
        />
        <label
          className={
            "block text-sm font-medium mb-1 " +
            (dark ? "text-gray-300" : "text-gray-700")
          }
        >
          Descripcion
        </label>
        <textarea
          name="body"
          id="body"
          value={body}
          onChange={(e) => setbody(e.target.value)}
          className={
            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " +
            (dark
              ? "border-gray-600 bg-gray-700 text-white"
              : "border-gray-300 bg-white text-black")
          }
        ></textarea>

        <br />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Editar Post
        </button>
      </form>
    </div>
  );
}
