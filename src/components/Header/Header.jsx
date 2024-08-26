import React from "react";

export default function Header(item) {
    return <header>
        <ul>
            {item.filters.map((value, index) => (
                <li key={index}>
                    <button onClick={() => item.onFilterChange(value)}>{value}</button>

                </li>
            ))}
        </ul>
    </header>
}