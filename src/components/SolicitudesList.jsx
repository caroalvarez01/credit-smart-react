import { useEffect, useState } from "react";
import { obtenerSolicitudesTiempoReal, eliminarSolicitud } from "../services/solicitudesService";

export default function SolicitudesList() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = obtenerSolicitudesTiempoReal(
      (data) => {
        setSolicitudes(data);
        setLoading(false);
      },
      () => {
  setError("Error al cargar datos. Revisa tu conexión.");
  setLoading(false);
}
    );

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Cargando solicitudes...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Solicitudes guardadas</h2>

      {solicitudes.length === 0 ? (
        <p>No hay solicitudes registradas.</p>
      ) : (
        <ul>
          {solicitudes.map((sol) => (
            <li key={sol.id}>
              <strong>{sol.nombre}</strong> — {sol.email} — ${sol.monto}
              <br />
              Motivo: {sol.motivo}
              <br />
              <button onClick={() => eliminarSolicitud(sol.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
