import './App.css';
// import FunctionComp from './components/FunctionComp';
// import ClassComp from './components/ClassComp';
// import NestedFunctionalComp from './components//NestedFunctionalComp'
// import Event from './events/Event';
// import StateWithFunctionalComp from './state/StateWithFunctionalComp'
// import StateWithClassComp from './state/StateWithClassComp';
// import PropsWithFunctionalComp from './props/PropsWithFunctionalComp';
// import PropsWithClassComp from './props/PropsWithClassComp'
// import { useState } from 'react'
// import InputField from './input/InputField';
// import LifecycleComponent from './lifeCycleMethods/LifecycleComponent'
// import ConditionalRendering from './conditional-rendering/ConditionalRendering'
// import HooksDemo from './hooks/HooksDemo';
// import StyleDemo from './style/StyleDemo'
// import BoostrapDemo from './boostrap/BoostrapDemo'
// import ArrayWithList from './arrayWithlist/ArrayWithlist'
// import ReactFragment from './react-fragment/ReactFragment'
// import SendDataChildtoParent from './sendDataChildtoParent/SendDataChildtoParent'
// import DataDisplay from './api/get/DataDisplay';
import Accordion from 'react-bootstrap/Accordion';
import UseState from './hooks/useStateComp/UseState';
import UseRefComp from './hooks/useRefComp/UseRef';
// src\hooks\useReducer\useReducerComp.js
import React, { useReducer } from 'react';

// Initial state
const initialState = { count: 0 };

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}


function App() {
  // const [name, setName] = useState('Anil');

  const [state, dispatch] = useReducer(reducer, initialState);


  // function parentAlert(data) {
  //   alert(JSON.stringify(data))
  // }
  return (
    <div className="App">
      <h1>HEllo React</h1>
      {/* <FunctionComp />
      <ClassComp />
      {NestedFunctionalComp()}
      {Event()}
      {StateWithFunctionalComp()}
      <StateWithClassComp />
      <PropsWithFunctionalComp name={name}>
        <ClassComp />
      </PropsWithFunctionalComp>
      <button onClick={() => { setName('Rohits') }}>Update Name</button>
      <PropsWithClassComp message="Hello from props!" />

      <InputField></InputField>
      <LifecycleComponent ></LifecycleComponent>
      <ConditionalRendering />
      <HooksDemo />
      <StyleDemo />
      <BoostrapDemo />
      <ArrayWithList />
      <ReactFragment />

      <SendDataChildtoParent alert={parentAlert}></SendDataChildtoParent>

      <DataDisplay /> */}




      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Use State</Accordion.Header>
          <Accordion.Body>
            <UseState></UseState>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Use Effect</Accordion.Header>
          <Accordion.Body>
            <div>Working....!</div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Use Ref</Accordion.Header>
          <Accordion.Body>
            <UseRefComp />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Use Reducer</Accordion.Header>
          <Accordion.Body>
            <useReducerComp></useReducerComp>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>



      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>

    </div>
  );
}

export default App;
