import Card from "./Card"
export default function Main({actors, actresses}){

    return (

        <main className="container">
            <div className="cards-container row">
                <div className="col-auto">

                    <Card name={actors[0]?.name} image={actors[0]?.image} nationality={actors[0]?.nationality} dateOfBirth={actors[0]?.birth_year} bio={actors[0]?.biography} awards={actors[0]?.awards}></Card>
                </div>
                <div className="col-auto">

                    <Card name={actresses[0]?.name} image={actresses[0]?.image} nationality={actresses[0]?.nationality} dateOfBirth={actresses[0]?.birth_year} bio={actresses[0]?.biography} awards={actresses[0]?.awards}></Card>
                </div>
            </div>
        </main>

    )

}