export default function Card({ id, title, description }) {
  return (
    <>
      <div>
        <article key={id}>
          <header>
            <h2>{title}</h2>
          </header>
          <p>{description}</p>
        </article>
      </div>
    </>
  );
}
