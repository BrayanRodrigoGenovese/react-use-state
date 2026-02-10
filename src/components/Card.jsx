export default function Card({ id, title, description, isOpen }) {
  return (
    <>
      {isOpen && (
        <div className={"card"}>
          <article id={id}>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        </div>
      )}
    </>
  );
}
