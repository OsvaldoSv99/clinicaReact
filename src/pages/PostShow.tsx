import { useEffect, useState } from "react";
import { Link, useParams, useOutletContext } from "react-router-dom";
import { getPost } from "../services/postService";
import {
  formInputClass,
  formTextareaClass,
  formLabelClass,
} from "../configuration/formStyles";

type OutletContext = {
  dark: boolean;
};

export default function PostEdit() {
  const { dark } = useOutletContext<OutletContext>();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");

  useEffect(() => {
    if (id) {
      getPost(id).then((res) => {
        setTitle(res.title);
        setbody(res.body);
      });
    }
  }, [id]);

  return (
    <div
      className={
        "container mx-auto px-4 py-8 " +
        (dark ? "bg-gray-800 text-white" : "bg-white text-black")
      }
    >
      <h1
        className={
          "font-bold text-2xl mb-4 " + (dark ? "text-white" : "text-black")
        }
      >
        Post Show
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
      <form method="post">
        <label className={formLabelClass}>Titulo</label>
        <input
          name="title"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={formInputClass}
          placeholder="Escribe aquí..."
          readOnly
        />
        <label className={formLabelClass}>Descripcion</label>
        <textarea
          name="body"
          id="body"
          value={body}
          readOnly
          onChange={(e) => setbody(e.target.value)}
          className={formTextareaClass}
        ></textarea>

        <br />
      </form>
    </div>
  );
}
