import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Seat from "./Seat";
import Form from "./Form";
import Footer from "./Footer";

export default function SeatList({ orderInfo, setOrderInfo }) {
    const [session, setSession] = useState([]);
    const [idMovie, setIdMovie] = useState();
    const [date, setDate] = useState("");
    const [weekday, setWeekday] = useState("");
    const [timeSession, setTimeSession] = useState("");
    const [movieName, setMovieName] = useState("");
    const [selectedSeats, setSelectedSeats] = useState([]);
    const {idSessao} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then(response => {
            console.log(response.data);
            setMovieName(response.data.movie.title)
            setDate(response.data.day.date);
            setWeekday(response.data.day.weekday);
            setTimeSession(response.data.name);
            setIdMovie(response.data.movie.id);
            setSession(response.data.seats);
        });
    }, []);

    console.log(selectedSeats);

    return (
        <>
            <div className="title">
                <h2>Selecione o(s) assento(s)</h2>
            </div>

            <div className="container-seats">
                {session.map((seat, index) => (
                    <Seat 
                        key={index} 
                        seatId={seat.id}
                        chairNumber={seat.name} 
                        isAvailable={seat.isAvailable}
                        selectedSeats={selectedSeats} 
                        setSelectedSeats={setSelectedSeats} 
                    />
                ))}
            </div>

            <div className="container-seats-examples">
                <div className="seat selected"></div>
                <div className="seat available"></div>
                <div className="seat unavailable"></div>
            </div>

            <div className="container-seats-examples">
                <span>Selecionado</span>
                <span>Disponível</span>
                <span>Indisponível</span>
            </div>

            <Form 
                selectedSeats={selectedSeats} 
                movieName={movieName} 
                date={date} 
                timeSession={timeSession} 
                orderInfo={orderInfo} 
                setOrderInfo={setOrderInfo} 
            />

            <Footer movieId={idMovie} weekday={weekday} timeSession={timeSession} />
        </>
    );
}