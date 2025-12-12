import { useState } from "react";
import { crearSolicitud } from "../services/solicitudesService";

export default function SolicitudForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    monto: "",
    motivo: "",
  });

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje("");

    try {
      await crearSolicitud(form);
      setMensaje("Solicitud creada con éxito 🎉");
      setForm({ nombre: "", email: "", monto: "", motivo: "" });
    } catch {
      setMensaje("Error al crear la solicitud. Verifique su conexión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Crear Solicitud</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="monto"
          placeholder="Monto solicitado"
          value={form.monto}
          onChange={handleChange}
          required
        />

        <textarea
          name="motivo"
          placeholder="Motivo"
          value={form.motivo}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Enviar solicitud"}
        </button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}
