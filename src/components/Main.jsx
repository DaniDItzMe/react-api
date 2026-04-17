import Card from "./Card";
export default function Main({ actors, actresses }) {
  return (
    <main className="container my-5">
      <h2 className="mb-3">Attori</h2>
      <div className="cards-container row g-5">
        {actors.map((actor) => (
          <div key={actor.id} className="col-auto">
            <Card
              name={actor.name}
              image={actor.image}
              nationality={actor.nationality}
              dateOfBirth={actor.birth_year}
              bio={actor.biography}
              awards={actor.awards}
              knownFor={actor.known_for}
            ></Card>
          </div>
        ))}
      </div>
      <div className="cards-container row g-5 mb-3">
        <h2 className="">Attrici</h2>
        {actresses.map((actress) => (
          <div key={actress.id} className="col-auto">
            <Card
              name={actress.name}
              image={actress.image}
              nationality={actress.nationality}
              dateOfBirth={actress.birth_year}
              bio={actress.biography}
              awards={actress.awards}
              knownFor={actress.most_famous_movies}
            ></Card>
          </div>
        ))}
      </div>
      <div className="cards-container row g-5">
        <h2 className="">Tutto il cast</h2>
        {actors.map((actor) => (
          <div key={actor.id} className="col-auto">
            <Card
              name={actor.name}
              image={actor.image}
              nationality={actor.nationality}
              dateOfBirth={actor.birth_year}
              bio={actor.biography}
              awards={actor.awards}
              knownFor={actor.known_for}
            ></Card>
          </div>
        ))}
        {actresses.map((actress) => (
          <div key={actress.id} className="col-auto">
            <Card
              name={actress.name}
              image={actress.image}
              nationality={actress.nationality}
              dateOfBirth={actress.birth_year}
              bio={actress.biography}
              awards={actress.awards}
              knownFor={actress.most_famous_movies}
            ></Card>
          </div>
        ))}
      </div>
    </main>
  );
}
