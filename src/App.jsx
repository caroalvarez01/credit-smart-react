import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Simulator from "./pages/Simulator";
import Apply from "./pages/Apply";
import "./assets/styles.css";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </>
  );
}

export default App;
