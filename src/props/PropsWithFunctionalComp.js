

export default function PropsWithFunctionalComp(props) {
    console.log(props)
    return (
        <div>
            <h1>Hello Propsb  {props.name}</h1>
            <h1>hello Child</h1>
            {props.children}
            {88}
        </div>
    )
}