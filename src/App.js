import './App.css';
import FunctionComp from './components/FunctionComp';
import ClassComp from './components/ClassComp';
import NestedFunctionalComp from './components//NestedFunctionalComp'
import Event from './events/Event';
import StateWithFunctionalComp from './state/StateWithFunctionalComp'
import StateWithClassComp  from './state/StateWithClassComp';
import PropsWithFunctionalComp from './props/PropsWithFunctionalComp';
import PropsWithClassComp from './props/PropsWithClassComp'
import {useState} from 'react'
import InputField from './input/InputField';
import LifecycleComponent from './lifeCycleMethods/LifecycleComponent'
import ConditionalRendering from'./conditional-rendering/ConditionalRendering'
import HooksDemo from './hooks/HooksDemo';
import StyleDemo from './style/StyleDemo'
import BoostrapDemo from './boostrap/BoostrapDemo'
import ArrayWithList from './arrayWithlist/ArrayWithlist'
import ReactFragment from './react-fragment/ReactFragment'
import SendDataChildtoParent from './sendDataChildtoParent/SendDataChildtoParent'


function App() {
  const [name,setName] = useState('Anil');
  function parentAlert(data){
alert(JSON.stringify(data))
  }
  return (
    <div className="App">
     <h1>HEllo React</h1>
     <FunctionComp/>
     <ClassComp/>
     {NestedFunctionalComp()}
     {Event()}
     {StateWithFunctionalComp()}
     <StateWithClassComp/>
     <PropsWithFunctionalComp name={name}/>
     <button onClick={()=>{setName('Rohits')}}>Update Name</button>
     <PropsWithClassComp message="Hello from props!" />

     <InputField></InputField>
<LifecycleComponent ></LifecycleComponent>
<ConditionalRendering/>
<HooksDemo/>
<StyleDemo/>
<BoostrapDemo/>
<ArrayWithList/>
<ReactFragment/>

<SendDataChildtoParent alert={parentAlert}></SendDataChildtoParent>
    </div>
  );
}

export default App;
