export default function Card({name, dateOfBirth, nationality, bio, image, awards}){

    return(

        <div className="card py-2" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{dateOfBirth} {nationality}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{bio}</li>
                <li className="list-group-item">{awards}</li>
            </ul>
        </div>

    )

}