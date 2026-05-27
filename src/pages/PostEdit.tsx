import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useOutletContext,
} from "react-router-dom";
import { updatePost, getPost } from "../services/postService";
import SuccessModal from "../components/SuccessModal";
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
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    if (id) {
      getPost(id).then((res) => {
        setTitle(res.title);
        setbody(res.body);
      });
    }
  }, [id]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    try {
      await updatePost(id, { title, body });
      setModalTitle("Post actualizado");
      setModalMessage("Los cambios se guardaron correctamente.");
      setShowModal(true);
    } catch (error) {
      console.error("Error actualizando post:", error);
    }
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
          "font-bold text-2xl mb-4 " + (dark ? "text-white" : "text-black")
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
        <label className={formLabelClass}>Titulo</label>
        <input
          name="title"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={formInputClass}
          placeholder="Escribe aquí..."
        />
        <label className={formLabelClass}>Descripcion</label>
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
          Editar Post
        </button>
      </form>
      <SuccessModal
        isOpen={showModal}
        title={modalTitle}
        message={modalMessage}
        onClose={() => {
          setShowModal(false);
          navigation("/");
        }}
      />
    </div>
  );
}
