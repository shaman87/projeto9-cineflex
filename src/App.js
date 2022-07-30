import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SessionList from "./components/SessionList";
import SeatList from "./components/SeatList";
import CompletedOrder from "./components/CompletedOrder";


export default function App () {
    const [orderInfo, setOrderInfo] = useState({});

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/sessoes/:idFilme" element={<SessionList />} />
                <Route path="/assentos/:idSessao" element={<SeatList orderInfo={orderInfo} setOrderInfo={setOrderInfo} />} />
                <Route path="/sucesso" element={<CompletedOrder orderInfo={orderInfo} setOrderInfo={setOrderInfo} />} />
            </Routes>
        </BrowserRouter>
    );
}