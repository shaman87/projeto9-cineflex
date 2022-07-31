import { useEffect, useState } from "react";
import axios from "axios";

export default function Footer({ movieId, weekday, timeSession }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        promise.then(response => {
            if(movieId !== undefined) {
                setMovie(response.data[movieId-1]);
            }
        });
    }, [movieId]);

    return (
        <>
            <div className="footer">
                <div className="image-frame">
                    <img src={movie.posterURL} alt={movie.title} />
                </div>

                <div>
                    <h2>{movie.title}</h2>
                    {timeSession === undefined ? (
                        <h2>{weekday}</h2>
                    ) : (
                        <h2>{weekday} - {timeSession}</h2>
                    )}
                </div>
            </div>
        </>
    );
}