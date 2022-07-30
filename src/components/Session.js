import { Link } from "react-router-dom";

export default function Session({ day, date, times }) {
    return (
        <>
            <h3>{day} - {date}</h3>

            <div>
                <Link to={`/assentos/${times[0].id}`} >
                    <button>{times[0].name}</button>
                </Link>
                <Link to={`/assentos/${times[1].id}`} >
                    <button>{times[1].name}</button>
                </Link>
            </div>
        </>
    );
}