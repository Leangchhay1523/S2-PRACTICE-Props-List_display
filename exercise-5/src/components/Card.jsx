export default function Card({people}) {
    return (
        <div className="card-container">
            <img src={people.image.src} alt={people.image.alt} />
            <div className="detail">
                <p className="name">{people.name}</p>
                <p className="gender">{people.gender}</p>
            </div>
            <p className="hobby">{people.hobby}</p>
        </div>
    );
}