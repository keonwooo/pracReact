import React, { useState } from "react"
import './App.css'
import Counter from './components/Counter'
import TotalCount from './components/TotalCount'

export default function AppCounter() {
    const [totalCnt, setTotalCnt] = useState(0);
    const totalCntClick = () => setTotalCnt((prev) => prev + 1);
    return (
        <div>
            <TotalCount cnt={totalCnt}/>
            {/* <Counter />
            <Counter /> */}
            <Counter cnt={totalCnt} onClick={totalCntClick}/>
            <Counter cnt={totalCnt} onClick={totalCntClick}/>
        </div>
    )
}