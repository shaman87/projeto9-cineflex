import { useNavigate } from "react-router-dom";

export default function CompletedOrder({ orderInfo }) {
    let navigate = useNavigate();
    const { movieName, date, timeSession, selectedSeatsNumbers, name, cpf } = orderInfo;

    return (
        <>
            {(
                movieName !== undefined || 
                date !== undefined || 
                timeSession !== undefined || 
                selectedSeatsNumbers !== undefined || 
                name !== undefined || 
                cpf !== undefined
            ) ? (
                <>
                    <div className="success-title">
                        <h2>Pedido feito com sucesso!</h2>
                    </div>

                    <div className="container-success">
                        <div>
                            <h2>Filme e sessão</h2>
                            <p>{movieName}</p>
                            <p>{date} {timeSession}</p>
                        </div>

                        <div>
                            <h2>Ingressos</h2>
                            {selectedSeatsNumbers.map(seats => <p>Assento {seats}</p>)}
                        </div>

                        <div>
                            <h2>Comprador</h2>
                            <p>Nome: {name}</p>
                            <p>CPF: {cpf}</p>
                        </div>
                    </div>

                    <div className="success-button" onClick={() => navigate("/")}>
                        <button>Voltar para Home</button>
                    </div>
                </>
            ) : (
                <>
                    <div className="success-title">
                        <h2>{setTimeout(() => navigate("/"), 0)}</h2>
                    </div>
                </>
            )}
        </>
    );
}