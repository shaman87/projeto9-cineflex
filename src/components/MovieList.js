import { useState, useEffect } from "react";
import axios from "axios";

import Movie from "./Movie";

export default function MovieList() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        
        promise.then(response => {
            setMovieList(response.data);
        });
    }, []);

    return (
        <>
            <div className="title">
                <h2>Selecione o filme</h2>
            </div>
            <div className="container-movies">
                {movieList.map((movie, index) => (
                    <Movie 
                        key={index} 
                        index={index} 
                        movieId={movie.id} 
                        movieImage={movie.posterURL} 
                        movieTitle={movie.title} 
                    />
                ))}
            </div>
        </>
    );
}