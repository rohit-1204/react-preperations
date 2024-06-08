import { Fragment } from "react"
import { useState } from 'react'
export default function UseState() {

    let [data, setData] = useState(0);
    function updateData() {
        setData(data + 1);
    }
    return (
        <>
            <div>Hello form Use State</div>
            <h2> {data}</h2>
            <button onClick={updateData}>Increment</button>
        </>
    )
}