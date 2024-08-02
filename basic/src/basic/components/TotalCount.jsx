import { useState } from "react";

export default function TotalCount({cnt}) {
    return (
        <div className="totalCount">
            <span>total :&nbsp;{cnt} {cnt >= 10 ? '❤️' : '💩'}</span>
        </div>
    )
}