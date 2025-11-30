import { useState } from "react";

export default function Apply() {
  // Estado del formulario
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    monto: "",
    plazo: "",
    producto: "",
  });

  const [errores, setErrores] = useState({});
  const [resumen, setResumen] = useState(null);
  const [solicitudes, setSolicitudes] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrores((prev) => ({ ...prev, [name]: "" }));
    setMensaje("");
  };

  const validar = () => {
    const nuevosErrores = {};

    if (!form.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!form.email.trim()) {
      nuevosErrores.email = "El email es obligatorio.";
    } else if (!form.email.includes("@")) {
      nuevosErrores.email = "Ingresa un email válido.";
    }
    if (!form.monto || Number(form.monto) <= 0) {
      nuevosErrores.monto = "El monto debe ser mayor a 0.";
    }
    if (!form.plazo || Number(form.plazo) <= 0) {
      nuevosErrores.plazo = "El plazo debe ser mayor a 0.";
    }
    if (!form.producto) {
      nuevosErrores.producto = "Selecciona un tipo de crédito.";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const calcularCuota = () => {
    const monto = Number(form.monto);
    const plazo = Number(form.plazo);
    if (!monto || !plazo) return 0;
    return Math.round(monto / plazo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validar()) return;

    const cuota = calcularCuota();
    setResumen({ ...form, cuota });
    setMensaje("Revisa el resumen y confirma tu solicitud.");
  };

  const confirmarEnvio = () => {
    const nuevaSolicitud = { ...resumen, id: Date.now() };
    setSolicitudes((prev) => [...prev, nuevaSolicitud]);
    setMensaje("¡Solicitud enviada exitosamente!");
    setResumen(null);

    setForm({
      nombre: "",
      email: "",
      monto: "",
      plazo: "",
      producto: "",
    });
  };

  return (
    <main className="apply-page">
      <section className="apply-container">
        <h2>Solicita tu Crédito</h2>
        <p>Llena el formulario para simular y enviar tu solicitud de crédito.</p>

        {/* FORMULARIO PRINCIPAL */}
        <form onSubmit={handleSubmit} className="form-solicitud">
          <fieldset>
            <legend>Datos personales</legend>

            <label>
              Nombre completo
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
              />
              {errores.nombre && (
                <span className="error">{errores.nombre}</span>
              )}
            </label>

            <label>
              Correo electrónico
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
              />
              {errores.email && <span className="error">{errores.email}</span>}
            </label>
          </fieldset>

          <fieldset>
            <legend>Información del crédito</legend>

            <label>
              Monto solicitado
              <input
                type="number"
                name="monto"
                value={form.monto}
                onChange={handleChange}
                placeholder="Ej: 20000000"
              />
              {errores.monto && <span className="error">{errores.monto}</span>}
            </label>

            <label>
              Plazo (en meses)
              <input
                type="number"
                name="plazo"
                value={form.plazo}
                onChange={handleChange}
                placeholder="Ej: 24"
              />
              {errores.plazo && <span className="error">{errores.plazo}</span>}
            </label>

            <label>
              Producto de crédito
              <select
                name="producto"
                value={form.producto}
                onChange={handleChange}
              >
                <option value="">Selecciona...</option>
                <option value="personal">Crédito Personal</option>
                <option value="vehiculo">Crédito Vehículo</option>
                <option value="educacion">Crédito Educación</option>
                <option value="empresarial">Crédito Empresarial</option>
              </select>
              {errores.producto && (
                <span className="error">{errores.producto}</span>
              )}
            </label>
          </fieldset>

          <button type="submit" className="btn">
            Ver resumen
          </button>
        </form>

        {mensaje && <p>{mensaje}</p>}

        {/* RESUMEN */}
        {resumen && (
          <div className="apply-resumen">
            <h3>Resumen de tu solicitud</h3>
            <ul>
              <li>Nombre: {resumen.nombre}</li>
              <li>Email: {resumen.email}</li>
              <li>Monto: ${resumen.monto}</li>
              <li>Plazo: {resumen.plazo} meses</li>
              <li>Producto: {resumen.producto}</li>
              <li>Cuota mensual estimada: ${resumen.cuota}</li>
            </ul>

            <button onClick={confirmarEnvio} className="btn">
              Confirmar y enviar
            </button>
          </div>
        )}

        {/* HISTORIAL */}
        {solicitudes.length > 0 && (
          <div className="apply-historial">
            <h3>Solicitudes enviadas (solo en memoria)</h3>
            <ul>
              {solicitudes.map((s) => (
                <li key={s.id}>
                  {s.nombre} - {s.producto} - ${s.monto} en {s.plazo} meses
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
