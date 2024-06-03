import { Component } from 'react';

export default class StateWithClassComp extends Component {
    constructor() {
        super();
        this.state = {
            message: 'StateWithClassComp'
        };
    }

    render() {
        return (

            <div>Hello state 
                {this.state.message}
                <button onClick={()=>this.setState({message:'Bye'})}>update Data</button>
                </div>
        );
    }
}
