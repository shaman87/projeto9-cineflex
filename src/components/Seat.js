import { useState } from "react";

export default function Seat({seatId, chairNumber, isAvailable, selectedSeats, setSelectedSeats}) {
    const [selected, setSelected] = useState("seat available");

    function selectSeat() {
        selected === "seat available" ? setSelected("seat selected") : setSelected("seat available");

        if((selected === "seat available") && (isAvailable === true)) {
            const newArray = [...selectedSeats, seatId];
            setSelectedSeats(newArray);
        } else if((selected === "seat selected") && (isAvailable === true)) {
            const newArray = [...selectedSeats];
            const index = newArray.indexOf(seatId);
            newArray.splice(index, 1);
            setSelectedSeats(newArray);
        } else {
            alert("Esse assento não está disponível");
        }
    }

    return (
        <>
            {isAvailable === true ? (
                <div className={selected} onClick={selectSeat}>
                    {chairNumber < 10 ? 0 + chairNumber : chairNumber}
                </div>
            ) : (
                <div className={"seat unavailable"} onClick={selectSeat}>
                    {chairNumber < 10 ? 0 + chairNumber : chairNumber}
                </div>
            )}
        </>
    );
}