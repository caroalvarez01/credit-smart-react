import { collection, addDoc, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

// Crear una nueva solicitud
export async function crearSolicitud(data) {
  await addDoc(collection(db, "solicitudes"), data);
}

// Obtener solicitudes en tiempo real
export function obtenerSolicitudesTiempoReal(callbackSuccess, callbackError) {
  try {
    const ref = collection(db, "solicitudes");
    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        callbackSuccess(data);
      },
      callbackError
    );

    return unsubscribe;
  } catch {
    callbackError();
  }
}

// Eliminar una solicitud
export async function eliminarSolicitud(id) {
  await deleteDoc(doc(db, "solicitudes", id));
}
