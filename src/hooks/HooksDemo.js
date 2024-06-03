import '../App.css';

import {useState} from 'react'
export default function HooksDemo(){

    const [getData,setData]= useState('Rohit')
    return(
        <div>
            <h1 className='heading'>HOOKS in REACT</h1>
            <h1>Hello useState =>{getData}</h1>
            <button onClick={()=>setData('Anil')}>Change State</button>
        </div>
    )
}