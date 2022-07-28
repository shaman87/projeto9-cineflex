import { Link } from "react-router-dom";

export default function Movie({movieImage, movieTitle, id}) {
    return (
        <>
            <Link to={`/sessoes/${id}`}>
                <div className="poster-frame">
                    <img src={movieImage} alt={movieTitle} />
                </div>
            </Link>
        </>
    );
}