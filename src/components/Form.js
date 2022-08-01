import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form({ selectedSeatsIds, selectedSeatsNumbers, movieName, date, timeSession, orderInfo, setOrderInfo }) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    let navigate = useNavigate();

    function submitRequest(event) {
        event.preventDefault();

        if(selectedSeatsIds.length === 0) {
            return alert("Escolha no mínimo um assento!");
        }

        for(let i = 0; i < name.length; i++) {
            if(isNaN(name[i]) === false) {
                setName("");
                return alert("Nome inválido!");
            }
        }

        if(cpf.length !== 11) {
            return alert("CPF inválido!");
        } else if(cpf.length === 11) {
            for(let i = 0; i < cpf.length; i++) {
                if(isNaN(cpf[i]) === true) {
                    return alert("CPF inválido!");
                }
            }
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
            ids: selectedSeatsIds, 
            name, 
            cpf
        });

        promise.then(response => {
            setOrderInfo({
                movieName, 
                date, 
                timeSession, 
                selectedSeatsNumbers, 
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