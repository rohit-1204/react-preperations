
import { useState } from "react"
export default function ConditionalRendering(){
    let [display,hide]=useState(true);
    function toggle(){
    let toggle = display;
        hide(toggle=!toggle)
    }
    return(
        <div>
            {display?<h1>Hello Can you see</h1>:<h1>Can You See me im hide</h1>}
            <button onClick={()=>toggle() }>Toggle</button>
        </div>
    )
    }