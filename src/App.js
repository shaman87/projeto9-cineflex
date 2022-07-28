import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SessionList from "./components/SessionList";
import SeatList from "./components/SeatList";


export default function App () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/sessoes/:idFilme" element={<SessionList />} />
                <Route path="/assentos/:idSessao" element={<SeatList />} />
            </Routes>
        </BrowserRouter>
    );
}