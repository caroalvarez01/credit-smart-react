import { useEffect, useRef } from "react";
import CreditCard from "../components/CreditCard";
import creditsData from "../data/creditsData";

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const loopVideo = () => {
      if (video.duration && video.currentTime >= video.duration - 0.3) {
        video.currentTime = 0.001;
        video.play();
      }
    };

    const resumeVideo = () => {
      setTimeout(() => {
        if (video.paused) video.play();
      }, 500);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && video.paused) {
        video.play();
      }
    };

    video.addEventListener("timeupdate", loopVideo);
    video.addEventListener("pause", resumeVideo);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      video.removeEventListener("timeupdate", loopVideo);
      video.removeEventListener("pause", resumeVideo);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      {/* HERO CON VIDEO DE FONDO */}
      <section className="hero hero-creditos">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="video-fondo"
          poster=""
        >
          <source src="/recursos/pieza1.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <p>
            Encuentra el crédito ideal con{" "}
            <span className="cambio-clim">
              <img
                src="/recursos/span-trans.png"
                alt="CreditSmart"
                style={{ width: "150px", verticalAlign: "middle" }}
              />
            </span>{" "}
            y cumple tus sueños.
            <br />
            Tasas competitivas, plazos flexibles y asesoría personalizada.
          </p>
        </div>
      </section>

      {/* CATÁLOGO DE CRÉDITOS */}
      <section className="contenedor">
        <h2>Catálogo de Créditos</h2>
        <p>Selecciona un producto para conocer más detalles o solicitarlo en línea.</p>

        <div className="catalogo-grid">
          {creditsData.map((credit) => (
            <CreditCard
              key={credit.id}
              title={credit.title}
              rate={credit.rate}
              description={credit.description}
              image={credit.image}  // <-- asegurarte de que creditsData tenga la propiedad image
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
