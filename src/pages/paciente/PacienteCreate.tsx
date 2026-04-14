import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import TextDark from "../../configuration/TextDark";
import { formInputClass } from "../../configuration/formStyles";

function PacienteCreate() {
  type ContextType = {
    dark: boolean;
  };

  const { dark } = useOutletContext<ContextType>();
  const [nombre, setNombre] = useState("");
  const [apellido_paterno, setApellido_paterno] = useState("");
  const [apellido_materno, setApellido_materno] = useState("");
  const [correo, setCorreo] = useState("");
  const [sexo, setSexo] = useState("1");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  //   const [curp, setCurp] = useState("");
  //   const [domicilio, setDomicilio] = useState("");
  //   const [telefono, setTelefono] = useState("");
  //   const [ocupacion, setOcupacion] = useState("");
  //   const [estado_civil, setEstado_civil] = useState("");
  //   const [religion, setReligion] = useState("");
  //   const [escolaridad, setEscolaridad] = useState("");
  //   const [alergias, setAlergias] = useState("");
  //   const [medicamentos, setMedicamentos] = useState("");
  //   const [contacto_telefono, setContacto_telefono] = useState("");
  //   const [contacto_nombre, setContacto_nombre] = useState("");
  //   const [tipo_sangre, setTipo_sangre] = useState("");

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
        to="/pacientes"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Regresar
      </Link>
      <br />
      <br />
      <form method="post">
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Nombre
        </TextDark>
        <input
          name="nombre"
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className={formInputClass}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Apellido Paterno
        </TextDark>
        <input
          name="apellido_paterno"
          type="text"
          id="apellido_paterno"
          className={formInputClass}
          value={apellido_paterno}
          onChange={(e) => setApellido_paterno(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Apellido Materno
        </TextDark>
        <input
          name="apellido_materno"
          type="text"
          id="apellido_materno"
          className={formInputClass}
          value={apellido_materno}
          onChange={(e) => setApellido_materno(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Correo
        </TextDark>
        <input
          name="correo"
          type="email"
          id="correo"
          className={formInputClass}
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Sexo
        </TextDark>

        <div className="flex items-center mb-4">
          <input
            name="sexo"
            type="radio"
            value="0"
            checked={sexo == "0"}
            onChange={(e) => setSexo(e.target.value)}
          />
          <TextDark dark={dark}>Femenino</TextDark>
        </div>
        <div className="flex items-center">
          <input
            name="sexo"
            type="radio"
            value="1"
            checked={sexo == "1"}
            onChange={(e) => setSexo(e.target.value)}
          />
          <TextDark dark={dark}>Masculino</TextDark>
        </div>

        <br />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Fecha de Nacimiento
        </TextDark>
        <input
          name="fecha_nacimiento"
          type="date"
          id="fecha_nacimiento"
          value={fecha_nacimiento}
          onChange={(e) => setFecha_nacimiento(e.target.value)}
          className={formInputClass}
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Agregar Paciente
        </button>
      </form>
    </div>
  );
}

export default PacienteCreate;
