import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Simulator from "./pages/Simulator";
import Apply from "./pages/Apply";
import Footer from "./components/Footer";
import SolicitudForm from "./components/SolicitudForm";
import SolicitudesList from "./components/SolicitudesList";
import "./assets/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          {/* Rutas existentes */}
          <Route path="/" element={<Home />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/apply" element={<Apply />} />

          {/* Nuevas rutas para Firebase */}
          <Route path="/solicitudes" element={<SolicitudesList />} />
          <Route path="/crear" element={<SolicitudForm />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
