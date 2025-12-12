# 💳 CreditSmart – Integración con Backend Firebase (Firestore CRUD)

Proyecto desarrollado para la actividad **S40 - EA3: Integración con Backend Firebase**, del curso **Ingeniería Web 1**.  
El objetivo es integrar persistencia real en la nube mediante Firebase, permitiendo almacenar, consultar y gestionar solicitudes crediticias desde una base de datos NoSQL (Firestore).

---

## 🚀 Objetivo del Proyecto

Implementar en CreditSmart:

- Persistencia de datos en Firestore  
- CRUD (Create, Read, Delete)  
- Comunicación asíncrona  
- Lectura en tiempo real con `onSnapshot`  
- Manejo de errores (offline)  
- Loading states  
- Variables de entorno con `.env`  
- Integración completa React + Firebase  

Este proyecto representa la evolución de CreditSmart de guardar datos solo en memoria a convertirse en un sistema moderno con backend real.

---

## 🛠️ Tecnologías Utilizadas

- React + Vite  
- React Router  
- Firebase (Firestore)  
- JavaScript (ESModules)  
- Git / GitHub  
- Variables de entorno (.env)  

---

## 📁 Estructura del Proyecto

```md
src/
├── components/
│   ├── SolicitudForm.jsx
│   ├── SolicitudesList.jsx
│   └── Navbar / Footer / otros
├── services/
│   └── solicitudesService.js   ← CRUD con Firestore
├── firebase.js                 ← Configuración Firebase
├── App.jsx                     ← Rutas integradas
.env.example                    ← Variables necesarias
.gitignore                      ← Ignora .env
```

---

## 🔥 Funcionalidades Implementadas

### ✔ 1. Crear solicitud (CREATE)

Desde `/crear`, se envía información a Firestore:

```js
await addDoc(collection(db, "solicitudes"), data);
```

Incluye:

- Loading  
- Mensaje de éxito  
- Manejo de error si no hay internet  

---

### ✔ 2. Consultar solicitudes (READ – tiempo real)

Ruta: `/solicitudes`

Uso de `onSnapshot()`:

```js
onSnapshot(collection(db, "solicitudes"), callback);
```

Lista actualizada sin recargar.

---

### ✔ 3. Eliminar solicitud (DELETE)

```js
await deleteDoc(doc(db, "solicitudes", id));
```

Se borra en Firebase y en la interfaz al instante.

---

### ✔ 4. Loading States

- “Guardando…”  
- “Cargando solicitudes…”  

---

### ✔ 5. Manejo de errores (offline)

Si el usuario está sin internet:

- Muestra mensaje de error  
- No congela la app  

---

### ✔ 6. Seguridad con Variables de Entorno

`.env.example` incluido:

```md
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

`.env` está protegido por `.gitignore`.

---

## 🔧 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/caroalvarez01/credit-smart-react.git
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Crear archivo `.env` siguiendo `.env.example`

### 4. Ejecutar el servidor de desarrollo
```bash
npm run dev
```

---

## 🗄️ Configuración Firebase

- Proyecto creado en Firebase Console  
- App Web configurada  
- Firestore habilitado en modo **test mode**  
- Colección: `solicitudes`  

Reglas iniciales:

```js
// Test mode rules (válidas por 30 días)
allow read, write: if true;
```


---

## 📝 Estado Final del Proyecto

El proyecto cumple con todos los requisitos:

✔ CRUD completo (create, read, delete)  
✔ Persistencia real en Firebase  
✔ Lectura en tiempo real  
✔ Manejo de errores  
✔ Loading states  
✔ React Router funcionando correctamente  
✔ Repositorio actualizado  
✔ `.env.example` incluido y `.env` protegido  
✔ Firebase Console con datos verificados  

---

## ✨ Desarrollado por

**Carolina Alvarez**  
*Estudiante de Tecnología de Desarrollo de Software*  
*IU Digital de Antioquia*
LInk Video: https://drive.google.com/file/d/10k8OHPEeLzAhl1BhUxG_3BkPBuag9jzm/view?usp=sharing

---

¡Gracias por revisar este proyecto! 😊
