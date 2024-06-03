
import {useState} from 'react'
export default function InputField(){

    const [getData,setData]= useState('')
    return(
        <div>
            {getData}
            <input type="text" onChange={(event)=>{setData(event.target.value)}}></input>
        </div>
    )
}