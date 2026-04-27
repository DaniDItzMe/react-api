export default function Card({
  name,
  dateOfBirth,
  nationality,
  bio,
  image,
  awards,
  knownFor,
}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <p className="card-text text-center">
          {dateOfBirth} {nationality}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <p className="text-center fw-bold">Biography</p>
          <p className="text-center">{bio}</p>
        </li>
        <li className="list-group-item known_for">
          <p className="text-center fw-bold">Known for</p>
          <p className="text-center">{knownFor?.join(", ")}</p>
        </li>
        <li className="list-group-item awards">
          <p className="text-center fw-bold">Awards</p>
          <p className="text-center">{awards?.join(", ")}</p>
        </li>
      </ul>
    </div>
  );
}
