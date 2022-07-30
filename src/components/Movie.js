import { Link } from "react-router-dom";

export default function Movie({ movieImage, movieTitle, movieId }) {
    return (
        <>
            <Link to={`/sessoes/${movieId}`}>
                <div className="poster-frame">
                    <img src={movieImage} alt={movieTitle} />
                </div>
            </Link>
        </>
    );
}