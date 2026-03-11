import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createPost, getPost } from "../services/postService";

export default function PostEdit() {
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bold text-2xl mb-4">Post Show</h1>
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
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Titulo
        </label>
        <input
          name="title"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Escribe aquí..."
          readOnly
        />
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descripcion
        </label>
        <textarea
          name="body"
          id="body"
          value={body}
          readOnly
          onChange={(e) => setbody(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></textarea>

        <br />
      </form>
    </div>
  );
}
