import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { createPost } from "../services/postService";
import TextDark from "../configuration/TextDark";
import { formInputClass, formTextareaClass } from "../configuration/formStyles";

type OutletContext = {
  dark: boolean;
};

export default function PostCreate() {
  const { dark } = useOutletContext<OutletContext>();
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const navigation = useNavigate();

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
      <TextDark dark={dark} as="h1" className="font-bold text-2xl mb-4">
        Post Create
      </TextDark>
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
        <TextDark
          dark={dark}
          as="label"
          className="block text-sm font-medium mb-1"
        >
          Titulo
        </TextDark>

        <input
          name="title"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={formInputClass}
          placeholder="Escribe aquí..."
        />
        <TextDark
          dark={dark}
          as="label"
          className="block text-sm font-medium mb-1"
        >
          Descripcion
        </TextDark>
        <textarea
          name="body"
          id="body"
          value={body}
          onChange={(e) => setbody(e.target.value)}
          className={formTextareaClass}
        ></textarea>

        <br />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Crear Post
        </button>
      </form>
    </div>
  );
}
