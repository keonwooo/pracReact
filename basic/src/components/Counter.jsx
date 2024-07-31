import { useState } from "react";

export default function Counter({cnt, onClick}) {
    const [number, setNumber] = useState(0);
    return (
        <div className="counter">
            <span className="number">{number} / {cnt}</span>
            <button className="button" onClick={()=> {
                setNumber((prev) => prev + 1);
                onClick();
            }}>Add +</button>
        </div>
    )
}