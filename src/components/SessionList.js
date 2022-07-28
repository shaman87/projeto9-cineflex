import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Session from "./Session";
import Footer from "./Footer";

export default function SessionList() {
    const params = useParams();
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.idFilme}/showtimes`);

        promise.then(response => {
            setSessions(response.data.days);
        });
    }, []);

    return (
        <>
            <div className="title">
                <h2>Selecione o horário</h2>
            </div>

            <div className="container-sessions">
                {sessions.map((session, index) => (
                    <Session
                        key={index} 
                        index={index} 
                        id={params.idFilme} 
                        day={session.weekday} 
                        date={session.date} 
                        times={session.showtimes} 
                    />
                ))}
            </div>
            
            <Footer id={params.idFilme} />
        </>
    );
}