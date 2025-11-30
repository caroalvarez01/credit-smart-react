// src/components/CreditCard.jsx
function CreditCard({ title, rate, description, image }) {
  return (
    <article className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Tasa anual: <strong>{rate}%</strong></p>
      <p>{description}</p>
      <a href="/simulator" className="btn">Ver más</a>
    </article>
  );
}

export default CreditCard;
