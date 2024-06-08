import { Fragment } from "react"
import { useState } from 'react'
export default function UseMemoComp() {

    let [data, setData] = useState(0);
    function updateData() {
        setData(data + 1);
    }
    return (
        <>
            <div>Hello form Use Memo</div>
            <p>Perform the Heavy Operation </p>
            <p>Optimize the expencive Operation </p>
            <h2> {data}</h2>
            <button onClick={updateData}>Increment</button>
        </>
    )
}