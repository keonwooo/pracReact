import React from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header(item) {
    const {darkMode, toggleDarkMode} = useDarkMode();
    return (
        <header className={styles.header}>
            <button 
                onClick={toggleDarkMode}
                className={styles.toggle}
            >
                {!darkMode && <HiMoon />}
                {darkMode && <HiSun />}
            </button>
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