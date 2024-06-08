import { Fragment } from "react"
import { useState, useRef } from 'react'
export default function UseRefComp() {

    let [name, setName] = useState('Rohit');
    let inpEle = useRef('');

    function cleardata() {
        setName('');
        inpEle.current.focus();
    }
    return (
        <>
            <div>Hello form Use Effect</div>
            <p>To Access The DOM elelemts</p>
            <div>{name}</div>
            <input ref={inpEle} name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
            <button onClick={cleardata}>Clear</button>
        </>
    )
}