import { Link } from "react-router-dom";
import SeatList from "./SeatList";

export default function Session({id, day, date, times}) {
    return (
        <>
            <h3>{day} - {date}</h3>

            <Link to={`/assentos/${id}`}>
                <div>
                    <button onClick={() => {<SeatList />}}>{times[0].name}</button>
                    <button onClick={() => {<SeatList />}}>{times[1].name}</button>
                </div>
            </Link>
        </>
    );
}