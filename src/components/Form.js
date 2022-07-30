import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

export default function Form({ selectedSeats, movieName, date, timeSession, orderInfo, setOrderInfo }) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    let navigate = useNavigate();

    function submitRequest(event) {
        event.preventDefault();

        const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
            ids: selectedSeats, 
            name, 
            cpf
        });

        promise.then(response => {
            setName(response.data);
            setCpf(response.data);
            setOrderInfo({
                movieName, 
                date, 
                timeSession, 
                selectedSeats, 
                name, 
                cpf
            });
            navigate("/sucesso");
        });
    }

    return (
        <div className="form">
            <form onSubmit={submitRequest}>
                <div>
                    <label htmlFor="inputName">Nome do comprador:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        id="inputName" 
                        placeholder="Digite seu nome..." 
                        required 
                    />
                </div>

                <div>
                    <label htmlFor="inputCPF">CPF do comprador:</label>
                    <input 
                        type="text" 
                        value={cpf} 
                        onChange={e => setCpf(e.target.value)} 
                        id="inputCPF" 
                        placeholder="Digite seu CPF..." 
                        required 
                    />
                </div>

                <div>                    
                    <button type="submit">Reservar assento(s)</button>
                </div>
            </form>
        </div>
    );
}