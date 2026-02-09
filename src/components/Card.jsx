export default function Card({ id, title, description }) {
  return (
    <>
      <div className="card">
        <article key={id}>
          <h2>{title}</h2>
          <p>{description}</p>
        </article>
      </div>
    </>
  );
}
