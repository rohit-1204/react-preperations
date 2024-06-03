

export default function NestedFunctionalComp(){

    function Apple(){
        return (<div>
            Hello From Apple
        </div>)
    }
    return(<div>
        hello from Nested Comp
        <Apple/>
    </div>)
}