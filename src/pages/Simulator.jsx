import { useState } from "react";
import creditsData from "../data/creditsData";
import CreditCard from "../components/CreditCard";

export default function Simulator() {
  const [search, setSearch] = useState("");
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(500000000);
  const [sortByRate, setSortByRate] = useState(false);

  const filteredCredits = creditsData
    .filter(
      (c) =>
        c.title.toLowerCase().includes(search.toLowerCase()) &&
        (!minAmount || c.amount >= minAmount) &&
        (!maxAmount || c.amount <= maxAmount)
    )
    .sort((a, b) => (sortByRate ? a.rate - b.rate : 0));

  return (
    <main>
      <div className="page-wrapper">
        <section className="simulador-page">
          <h2>Simula tu Crédito</h2>
          <p className="seccion-subtitulo">Filtra por nombre, monto y tasa para encontrar la mejor opción.</p>

          <form className="simulador-form">
            <div style={{ width: "100%" }}>
              <label>
                Búsqueda por producto
                <input
                  type="text"
                  placeholder="Ej: Vivienda, Libre inversión..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </div>

            <div style={{ flex: "1 1 200px" }}>
              <label>
                Monto mínimo
                <input
                  type="number"
                  value={minAmount}
                  min={0}
                  max={maxAmount}
                  onChange={(e) => setMinAmount(Number(e.target.value))}
                />
              </label>
            </div>

            <div style={{ flex: "1 1 200px" }}>
              <label>
                Monto máximo
                <input
                  type="number"
                  value={maxAmount}
                  min={minAmount}
                  onChange={(e) => setMaxAmount(Number(e.target.value))}
                />
              </label>
            </div>

            <div style={{ width: "100%" }}>
              <label>
                <input
                  type="checkbox"
                  checked={sortByRate}
                  onChange={(e) => setSortByRate(e.target.checked)}
                  style={{ marginRight: "0.5rem" }}
                />
                Ordenar por tasa de interés (de menor a mayor)
              </label>
            </div>
          </form>

          <div className="catalogo-grid">
            {filteredCredits.length === 0 ? (
              <p>No hay créditos disponibles.</p>
            ) : (
              filteredCredits.map((credit) => (
                <CreditCard
                  key={credit.id}
                  title={credit.title}
                  rate={credit.rate}
                  description={credit.description}
                  image={credit.image}
                />
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
