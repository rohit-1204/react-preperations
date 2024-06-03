
import {useState} from "react"
export default function StateWithFunctionalComp(){
    const [data,setData]= useState('')
    function updateData(){
        setData('Rohit')
    }
    return(
        <div>
            <h1>State in React with Fun Comp</h1> 

            <button onClick={updateData}>Update Data</button>

            <h2>Hello {data}</h2>
        </div>
    )
}