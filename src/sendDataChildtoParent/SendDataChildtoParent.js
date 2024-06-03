import { Fragment } from "react";


export default function SendDataChildtoParent(props){
    let user={name:'Rohit',age:25}
return(
    <Fragment>
<button onClick={()=>props.alert(user)}>Send</button>
    </Fragment>
)
}