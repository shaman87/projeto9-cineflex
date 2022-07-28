import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Movie({movieImage, movieTitle, id}) {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);

        promise.then(response => {
            console.log(response.data);
            setSessions(response.data);
        });
    }, []);

    return (
        <>
            <Link to={`/session/${id}`}>
                <div className="poster-frame">
                    <img src={movieImage} alt={movieTitle} />
                </div>
            </Link>
        </>
    );
}