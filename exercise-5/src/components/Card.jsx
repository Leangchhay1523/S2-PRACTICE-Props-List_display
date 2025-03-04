export default function Card({people}) {
    return (
        <div className="card-container">
            <p>Name: {people.name}</p>
            <p>Gender: {people.gender}</p>
            <p className="hobby">{people.hobby}</p>
            <img src={people.image.src} alt={people.image.alt} />
        </div>
    );
}