import React from "react";
import styles from "./Header.module.css";

export default function Header(item) {
    return (
        <header className={styles.header}>
            <ul className={styles.filters}>
                {item.filters.map((value, index) => (
                    <li key={index} >
                        <button 
                            onClick={() => item.onFilterChange(value)} 
                            className={`${styles.filter} ${item.filter === value && styles.selected}`}
                        >
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    )
}