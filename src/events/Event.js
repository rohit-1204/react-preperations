

export default function Event(){
    function Apple(){
        alert('Hello Apple Click')
    }
return(
    <h1>
        <button onClick={()=>Apple()}>Click</button>
    </h1>
)
}