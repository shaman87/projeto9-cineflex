import { useState } from "react";

export default function Seat({ 
    seatId, 
    chairNumber, 
    isAvailable, 
    selectedSeatsIds, 
    setSelectedSeatsIds, 
    selectedSeatsNumbers, 
    setSelectedSeatsNumbers 
}) {

    const [selected, setSelected] = useState("seat available");

    function selectSeat() {
        selected === "seat available" ? setSelected("seat selected") : setSelected("seat available");

        if((selected === "seat available") && (isAvailable === true)) {
            const newArrayIds = [...selectedSeatsIds, seatId];
            const newArrayNumbers = [...selectedSeatsNumbers, chairNumber];

            setSelectedSeatsIds(newArrayIds);
            setSelectedSeatsNumbers(newArrayNumbers);

        } else if((selected === "seat selected") && (isAvailable === true)) {
            const newArrayIds = [...selectedSeatsIds];
            const newArrayNumbers = [...selectedSeatsNumbers];
            const indexIds = newArrayIds.indexOf(seatId);
            const indexNumbers = newArrayNumbers.indexOf(chairNumber);

            newArrayIds.splice(indexIds, 1);
            newArrayNumbers.splice(indexNumbers, 1);

            setSelectedSeatsIds(newArrayIds);
            setSelectedSeatsNumbers(newArrayNumbers);

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