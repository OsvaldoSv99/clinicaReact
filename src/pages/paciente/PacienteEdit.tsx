import axios from "axios";
import { useEffect, useState } from "react";
import {
  Link,
  useOutletContext,
  useNavigate,
  useParams,
} from "react-router-dom";
import TextDark from "../../configuration/TextDark";
import { formInputClass } from "../../configuration/formStyles";
import {
  updatePaciente,
  getPacienteById,
} from "../../services/pacienteService";
import React from "react";

function PacienteEdit() {
  type ContextType = {
    dark: boolean;
  };

  const { id } = useParams();

  const { dark } = useOutletContext<ContextType>();
  const [expediente, setExpediente] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido_paterno, setApellido_paterno] = useState("");
  const [apellido_materno, setApellido_materno] = useState("");
  const [correo, setCorreo] = useState("");
  const [sexo, setSexo] = useState<number>(1);
  const [activo, setActivo] = useState("1");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [curp, setCurp] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [estado_civil, setEstado_civil] = useState("");
  const [religion, setReligion] = useState("");
  const [escolaridad, setEscolaridad] = useState("");
  const [alergias, setAlergias] = useState("");
  const [medicamentos, setMedicamentos] = useState("");
  const [contacto_telefono, setContacto_telefono] = useState("");
  const [contacto_nombre, setContacto_nombre] = useState("");
  const [tipo_sangre, setTipo_sangre] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getPacienteById(Number(id)).then((res) => {
        setExpediente(res.no_expediente);
        setNombre(res.nombre);
        setApellido_paterno(res.apellido_paterno);
        setApellido_materno(res.apellido_materno);
        setCorreo(res.correo);
        setSexo(res.sexo);
        setActivo(res.activo);
        setFecha_nacimiento(res.fecha_nacimiento);
        setCurp(res.curp);
        setDomicilio(res.domicilio);
        setTelefono(res.telefono);
        setOcupacion(res.ocupacion);
        setEstado_civil(res.estado_civil);
        setReligion(res.religion);
        setEscolaridad(res.escolaridad);
        setAlergias(res.alergias);
        setMedicamentos(res.medicamentos);
        setContacto_telefono(res.contacto_telefono);
        setContacto_nombre(res.contacto_nombre);
        setTipo_sangre(res.tipo_sangre);
      });
    }
  }, [id]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mostrar errores de validación del lado del backend antes de enviar la solicitud
    setErrors({});

    try {
      await updatePaciente(Number(id), {
        nombre,
        apellido_paterno,
        apellido_materno,
        correo,
        sexo,
        fecha_nacimiento,
        curp,
        domicilio,
        telefono,
        ocupacion,
        estado_civil,
        religion,
        escolaridad,
        alergias,
        medicamentos,
        contacto_telefono,
        contacto_nombre,
        tipo_sangre,
        activo,
      });
      navigate("/pacientes");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 422) {
          setErrors(error.response.data.errors ?? {});
        }
      }
    }
  };

  return (
    <div
      className={
        "container mx-auto px-4 py-8 " +
        (dark ? "bg-gray-800 text-white" : "bg-white text-black")
      }
    >
      <TextDark dark={dark} as="h1" className="font-bold text-2xl mb-4">
        Editar Paciente {` - Expediente ${expediente}`}
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
      <form onSubmit={submit} method="post">
        {Object.keys(errors).length > 0 && (
          <div className="mb-4 rounded border border-red-400 bg-red-50 p-3 text-sm text-red-700">
            <p className="font-semibold">Corrige los siguientes errores:</p>
            <ul className="list-disc pl-5">
              {Object.entries(errors).map(([field, messages]) => (
                <li key={field}>
                  <strong>{field}:</strong> {messages.join(", ")}
                </li>
              ))}
            </ul>
          </div>
        )}
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
            checked={sexo === 0}
            onChange={(e) => setSexo(Number(e.target.value))}
          />
          <TextDark dark={dark}>Femenino</TextDark>
        </div>
        <div className="flex items-center">
          <input
            name="sexo"
            type="radio"
            value="1"
            checked={sexo === 1}
            onChange={(e) => setSexo(Number(e.target.value))}
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
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          CURP
        </TextDark>
        <input
          name="curp"
          type="text"
          id="curp"
          className={formInputClass}
          value={curp}
          onChange={(e) => setCurp(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Domicilio
        </TextDark>
        <input
          name="domicilio"
          type="text"
          id="domicilio"
          className={formInputClass}
          value={domicilio}
          onChange={(e) => setDomicilio(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Teléfono
        </TextDark>
        <input
          name="telefono"
          type="number"
          id="telefono"
          className={formInputClass}
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Ocupación
        </TextDark>
        <input
          name="ocupacion"
          type="text"
          id="ocupacion"
          className={formInputClass}
          value={ocupacion}
          onChange={(e) => setOcupacion(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Estado Civil
        </TextDark>
        <input
          name="estado_civil"
          type="text"
          id="estado_civil"
          className={formInputClass}
          value={estado_civil}
          onChange={(e) => setEstado_civil(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Religión
        </TextDark>
        <input
          name="religion"
          type="text"
          id="religion"
          className={formInputClass}
          value={religion}
          onChange={(e) => setReligion(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Escolaridad
        </TextDark>
        <input
          name="escolaridad"
          type="text"
          id="escolaridad"
          className={formInputClass}
          value={escolaridad}
          onChange={(e) => setEscolaridad(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Alergias
        </TextDark>
        <input
          name="alergias"
          type="text"
          id="alergias"
          className={formInputClass}
          value={alergias}
          onChange={(e) => setAlergias(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Medicamentos
        </TextDark>
        <input
          name="medicamentos"
          type="text"
          id="medicamentos"
          className={formInputClass}
          value={medicamentos}
          onChange={(e) => setMedicamentos(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Tipo de Sangre
        </TextDark>
        <input
          name="tipo_sangre"
          type="text"
          id="tipo_sangre"
          className={formInputClass}
          value={tipo_sangre}
          onChange={(e) => setTipo_sangre(e.target.value)}
        />
        <TextDark dark={dark} as="h1" className="font-bold text-2xl mb-4">
          Contacto de Emergencia
        </TextDark>
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Nombre Completo
        </TextDark>
        <input
          name="contacto_nombre"
          type="text"
          id="contacto_nombre"
          className={formInputClass}
          value={contacto_nombre}
          onChange={(e) => setContacto_nombre(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Número de Teléfono
        </TextDark>
        <input
          name="contacto_telefono"
          type="text"
          id="contacto_telefono"
          className={formInputClass}
          value={contacto_telefono}
          onChange={(e) => setContacto_telefono(e.target.value)}
        />
        <TextDark dark={dark} className="block text-sm font-medium mb-1">
          Activo
        </TextDark>

        <div className="flex items-center">
          <input
            name="activo"
            type="radio"
            value="1"
            checked={activo === "1"}
            onChange={(e) => setActivo(e.target.value)}
          />
          <TextDark dark={dark}>Activo</TextDark>
        </div>
        <div className="flex items-center mb-4">
          <input
            name="activo"
            type="radio"
            value="0"
            checked={activo === "0"}
            onChange={(e) => setActivo(e.target.value)}
          />
          <TextDark dark={dark}>Inactivo</TextDark>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
}

export default PacienteEdit;
