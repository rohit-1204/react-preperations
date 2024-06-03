
import '../style/style.css';
import style from '../style.module.css'
export default function StyleDemo(){
    return(
        <div>
            <h1>Hello Styles</h1>
            <h1 className="one">Style One Using className</h1>
            <h1 style={{backgroundColor:'pink',}}>Style Two using online Css</h1>
            <h1 className={style.three}>Style Three using Module</h1>
        </div>
    )
}