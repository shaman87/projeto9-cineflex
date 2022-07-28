import { useEffect, useState } from "react";
import axios from "axios";

export default function Footer({id}) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(response => {
            setMovie(response.data[id-1]);
        });
    }, []);

    return (
        <>
            <div className="footer">
                <div className="image-frame">
                    <img src={movie.posterURL} alt={movie.title} />
                </div>
                <h2>{movie.title}</h2>
            </div>
        </>
    );
}