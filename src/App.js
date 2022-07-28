import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Session from "./components/Session";


export default function App () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/sessoes/:idFilme" element={<Session />} />
            </Routes>
        </BrowserRouter>
    );
}